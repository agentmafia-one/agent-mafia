#!/usr/bin/env python3
"""
WatchBot Monitor — Brand/Mention Tracking
Uses DuckDuckGo Search for Twitter/X and web mentions
"""

import json
import hashlib
import os
import subprocess
from datetime import datetime, timedelta
from pathlib import Path

try:
    from ddgs import DDGS
except ImportError:
    print("Installing ddgs...")
    os.system("pip3 install ddgs --break-system-packages -q")
    from ddgs import DDGS

# Paths
BASE_DIR = Path(__file__).parent.parent
CONFIG_PATH = BASE_DIR / "src" / "config.json"
SEEN_PATH = BASE_DIR / "data" / "seen.json"
RESULTS_PATH = BASE_DIR / "data" / "results.json"

def load_config():
    """Load configuration from JSON"""
    with open(CONFIG_PATH) as f:
        return json.load(f)

def load_seen():
    """Load seen mention hashes"""
    if SEEN_PATH.exists():
        with open(SEEN_PATH) as f:
            return json.load(f)
    return {"hashes": {}, "last_cleanup": None}

def save_seen(seen):
    """Save seen mention hashes"""
    SEEN_PATH.parent.mkdir(exist_ok=True)
    with open(SEEN_PATH, "w") as f:
        json.dump(seen, f, indent=2)

def hash_mention(title, url):
    """Create unique hash for deduplication"""
    content = f"{title}|{url}"
    return hashlib.md5(content.encode()).hexdigest()[:12]

def search_ddg(query, max_results=10):
    """Search using DuckDuckGo"""
    try:
        with DDGS() as ddgs:
            results = list(ddgs.text(query, max_results=max_results))
            return results
    except Exception as e:
        print(f"DDG search error: {e}")
        return []

def search_twitter_mentions(keyword):
    """Search for Twitter/X mentions of keyword"""
    query = f'site:twitter.com OR site:x.com "{keyword}"'
    results = search_ddg(query, 10)
    
    mentions = []
    for r in results:
        url = r.get("href", r.get("url", ""))
        if "twitter.com" in url or "x.com" in url:
            mentions.append({
                "source": "twitter",
                "title": r.get("title", ""),
                "url": url,
                "description": r.get("body", r.get("description", "")),
                "found_at": datetime.utcnow().isoformat()
            })
    return mentions

def search_web_mentions(keyword):
    """Search for general web mentions"""
    query = f'"{keyword}" -site:twitter.com -site:x.com'
    results = search_ddg(query, 10)
    
    mentions = []
    for r in results:
        url = r.get("href", r.get("url", ""))
        mentions.append({
            "source": "web",
            "title": r.get("title", ""),
            "url": url,
            "description": r.get("body", r.get("description", "")),
            "found_at": datetime.utcnow().isoformat()
        })
    return mentions

def should_exclude(url, config):
    """Check if URL should be excluded based on config"""
    exclude_urls = config.get("exclude_urls", [])
    for pattern in exclude_urls:
        if pattern.lower() in url.lower():
            return True
    return False

def is_priority_domain(url, config):
    """Check if URL is from a priority domain"""
    priority = config.get("priority_domains", [])
    for domain in priority:
        if domain.lower() in url.lower():
            return True
    return False

def filter_new_mentions(mentions, seen, config):
    """Filter out already-seen mentions and apply exclusions"""
    dedup_hours = config.get("dedup_hours", 24)
    new_mentions = []
    cutoff = datetime.utcnow() - timedelta(hours=dedup_hours)
    
    for mention in mentions:
        url = mention.get("url", "")
        
        # Apply exclusion filters
        if should_exclude(url, config):
            print(f"    ⛔ Excluded: {url[:60]}")
            continue
        
        # Check for excluded keywords in title/description
        exclude_kw = config.get("exclude_keywords", [])
        text = f"{mention.get('title', '')} {mention.get('description', '')}"
        if any(kw.lower() in text.lower() for kw in exclude_kw):
            print(f"    ⛔ Excluded (keyword): {mention.get('title', '')[:40]}")
            continue
        
        h = hash_mention(mention["title"], url)
        
        # Check if we've seen this before
        if h in seen["hashes"]:
            seen_time = datetime.fromisoformat(seen["hashes"][h])
            if seen_time > cutoff:
                continue  # Skip, seen recently
        
        # Mark priority
        mention["priority"] = is_priority_domain(url, config)
        
        # New mention!
        seen["hashes"][h] = datetime.utcnow().isoformat()
        new_mentions.append(mention)
    
    return new_mentions

def format_alert(mention, keyword):
    """Format mention for Telegram alert"""
    source_emoji = "🐦" if mention["source"] == "twitter" else "🌐"
    priority_marker = "⭐ " if mention.get("priority") else ""
    
    title = mention['title'][:100] if mention['title'] else "No title"
    desc = mention['description'][:200] if mention['description'] else "No description"
    
    # Flag potential issues
    warnings = []
    if not desc or len(desc) < 20:
        warnings.append("⚠️ Page may have little/no content")
    
    warning_text = "\n".join(warnings) + "\n" if warnings else ""
    
    alert = f"""{priority_marker}{source_emoji} **New Mention: {keyword}**

{title}

{desc}

{warning_text}🔗 {mention['url']}"""
    return alert

def send_telegram_alert(message, chat_id):
    """Send alert via clawdbot message tool"""
    try:
        # Write message to temp file to avoid escaping issues
        tmp_file = "/tmp/watchbot_msg.txt"
        with open(tmp_file, "w") as f:
            f.write(message)
        
        cmd = f'/usr/local/bin/clawdbot message send --channel telegram --target {chat_id} --file {tmp_file}'
        result = subprocess.run(cmd, shell=True, capture_output=True, timeout=15)
        return result.returncode == 0
    except Exception as e:
        print(f"Telegram send error: {e}")
        return False

def run_monitor(send_alerts=True):
    """Main monitoring loop iteration"""
    config = load_config()
    seen = load_seen()
    
    all_new_mentions = []
    
    for keyword in config["keywords"]:
        print(f"🔍 Searching for: {keyword}")
        
        # Search Twitter
        if config["sources"].get("twitter", True):
            twitter_mentions = search_twitter_mentions(keyword)
            print(f"  Twitter: {len(twitter_mentions)} results")
            new_twitter = filter_new_mentions(twitter_mentions, seen, config)
            all_new_mentions.extend([(m, keyword) for m in new_twitter])
        
        # Search Web
        if config["sources"].get("google", True):
            web_mentions = search_web_mentions(keyword)
            print(f"  Web: {len(web_mentions)} results")
            new_web = filter_new_mentions(web_mentions, seen, config)
            all_new_mentions.extend([(m, keyword) for m in new_web])
    
    # Save updated seen hashes
    save_seen(seen)
    
    # Save results for digest
    save_results(all_new_mentions)
    
    print(f"\n✅ Found {len(all_new_mentions)} NEW mentions")
    
    # Send Telegram alerts for new mentions
    if send_alerts and all_new_mentions and config.get("telegram_chat_id"):
        chat_id = config["telegram_chat_id"]
        print(f"\n📤 Sending {len(all_new_mentions)} alerts to Telegram...")
        
        for mention, keyword in all_new_mentions[:5]:  # Limit to 5 per run
            alert = format_alert(mention, keyword)
            if send_telegram_alert(alert, chat_id):
                print(f"  ✅ Sent: {mention['title'][:40]}...")
            else:
                print(f"  ❌ Failed: {mention['title'][:40]}...")
    
    return all_new_mentions


def generate_daily_digest():
    """Generate and send daily digest of all mentions"""
    config = load_config()
    
    if not RESULTS_PATH.exists():
        print("No results to digest")
        return
    
    with open(RESULTS_PATH) as f:
        results = json.load(f)
    
    # Filter to last 24 hours
    cutoff = (datetime.utcnow() - timedelta(hours=24)).isoformat()
    recent = [r for r in results if r.get("found_at", "") > cutoff]
    
    if not recent:
        print("No new mentions in last 24 hours")
        return
    
    # Group by keyword
    by_keyword = {}
    for r in recent:
        kw = r.get("keyword", "Unknown")
        by_keyword.setdefault(kw, []).append(r)
    
    # Build digest message
    digest = f"""📊 **WatchBot Daily Digest**
{datetime.utcnow().strftime('%Y-%m-%d')}

**{len(recent)} mentions** in the last 24 hours:

"""
    
    for keyword, mentions in by_keyword.items():
        twitter_count = len([m for m in mentions if m["source"] == "twitter"])
        web_count = len([m for m in mentions if m["source"] == "web"])
        digest += f"• **{keyword}**: {twitter_count} Twitter, {web_count} Web\n"
    
    digest += "\n**Top Mentions:**\n\n"
    
    for mention in recent[:5]:
        source_emoji = "🐦" if mention["source"] == "twitter" else "🌐"
        title = mention['title'][:60] if mention['title'] else "No title"
        digest += f"{source_emoji} {title}\n{mention['url']}\n\n"
    
    digest += f"\n_Generated by WatchBot — agentmafia.one_"
    
    # Send digest
    if config.get("telegram_chat_id"):
        send_telegram_alert(digest, config["telegram_chat_id"])
        print(f"✅ Daily digest sent ({len(recent)} mentions)")
    else:
        print("No Telegram chat ID configured")
        print(digest)
    
    return digest

def save_results(mentions):
    """Append results to JSON file for daily digest"""
    RESULTS_PATH.parent.mkdir(exist_ok=True)
    
    existing = []
    if RESULTS_PATH.exists():
        with open(RESULTS_PATH) as f:
            try:
                existing = json.load(f)
            except:
                existing = []
    
    for mention, keyword in mentions:
        mention["keyword"] = keyword
        existing.append(mention)
    
    # Keep only last 7 days
    cutoff = (datetime.utcnow() - timedelta(days=7)).isoformat()
    existing = [m for m in existing if m.get("found_at", "") > cutoff]
    
    with open(RESULTS_PATH, "w") as f:
        json.dump(existing, f, indent=2)

def test_search():
    """Quick test of search functionality"""
    print("Testing DuckDuckGo search...")
    results = search_ddg('"SwissChain"', 3)
    print(f"Got {len(results)} results")
    for r in results:
        print(f"  - {r.get('title', 'No title')[:50]}")
    return len(results) > 0

if __name__ == "__main__":
    import sys
    
    print(f"🤖 WatchBot Monitor — {datetime.utcnow().strftime('%Y-%m-%d %H:%M')} UTC")
    print("=" * 50)
    
    if len(sys.argv) > 1:
        cmd = sys.argv[1]
        if cmd == "test":
            success = test_search()
            print(f"\nTest {'PASSED ✅' if success else 'FAILED ❌'}")
        elif cmd == "digest":
            generate_daily_digest()
        elif cmd == "silent":
            mentions = run_monitor(send_alerts=False)
            print(f"\nDone. {len(mentions)} new mentions found (no alerts sent).")
        else:
            print(f"Unknown command: {cmd}")
            print("Usage: monitor.py [test|digest|silent]")
    else:
        mentions = run_monitor()
        print(f"\nDone. {len(mentions)} new mentions found.")
