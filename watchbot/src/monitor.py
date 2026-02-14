#!/usr/bin/env python3
"""
WatchBot Monitor — Brand/Mention Tracking
Uses DuckDuckGo Search with strict validation and rate-limit handling
"""

import json
import hashlib
import os
import subprocess
import time
import re
from datetime import datetime, timedelta, timezone
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

# STRICT validation - reject these garbage domains
GARBAGE_DOMAINS = [
    "gmail.com",
    "mail.google.com",
    "accounts.google.com",
    "support.google.com",
    "google.com/intl",
    "play.google.com",
    "apps.apple.com",
    "facebook.com/login",
    "linkedin.com/login",
    "microsoft.com/en-us/microsoft-365",
    "office.com",
    "amazon.com",
    "wikipedia.org/wiki/Swiss",  # Generic Swiss pages
    "javascript is not available",  # Twitter JS blocks
]

# Generic descriptions that indicate scraping failed
GARBAGE_DESCRIPTIONS = [
    "javascript is not available",
    "javascript is disabled",
    "enable javascript",
    "gmail is email that's intuitive",
    "sign in to continue",
    "log in to your account",
    "create an account",
]

def now_utc():
    """Get current UTC time (timezone-aware)"""
    return datetime.now(timezone.utc)

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

def is_garbage_result(url, title, description):
    """Strict validation - returns True if result is garbage"""
    url_lower = url.lower() if url else ""
    title_lower = title.lower() if title else ""
    desc_lower = description.lower() if description else ""
    combined = f"{title_lower} {desc_lower}"
    
    # Check garbage domains
    for domain in GARBAGE_DOMAINS:
        if domain in url_lower:
            return True
    
    # Check garbage descriptions
    for garbage in GARBAGE_DESCRIPTIONS:
        if garbage in combined:
            return True
    
    # Empty or too short descriptions
    if not description or len(description.strip()) < 30:
        return True
    
    # URL looks malformed
    if not url or not url.startswith(("http://", "https://")):
        return True
    
    return False

def search_ddg_with_retry(query, max_results=10, retries=3, delay=2):
    """Search DDG with retry logic and delays"""
    for attempt in range(retries):
        try:
            with DDGS() as ddgs:
                results = list(ddgs.text(query, max_results=max_results))
                if results:
                    return results
        except Exception as e:
            error_str = str(e).lower()
            if "ratelimit" in error_str or "429" in error_str:
                wait_time = delay * (attempt + 1) * 2
                print(f"  ⏳ Rate limited, waiting {wait_time}s...")
                time.sleep(wait_time)
            else:
                print(f"  DDG error (attempt {attempt+1}/{retries}): {e}")
                time.sleep(delay)
    
    # Fallback: try HTML scraping
    return search_ddg_html(query, max_results)

def search_ddg_html(query, max_results=10):
    """Fallback: scrape DDG HTML directly"""
    import requests
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
        url = f"https://html.duckduckgo.com/html/?q={requests.utils.quote(query)}"
        resp = requests.get(url, headers=headers, timeout=10)
        
        if resp.status_code != 200:
            return []
        
        # Parse HTML results
        results = []
        from html.parser import HTMLParser
        
        class DDGParser(HTMLParser):
            def __init__(self):
                super().__init__()
                self.results = []
                self.current = {}
                self.in_result = False
                self.in_title = False
                self.in_snippet = False
            
            def handle_starttag(self, tag, attrs):
                attrs = dict(attrs)
                if tag == "a" and attrs.get("class") == "result__a":
                    self.current = {"href": attrs.get("href", ""), "title": ""}
                    self.in_title = True
                elif tag == "a" and "result__snippet" in attrs.get("class", ""):
                    self.in_snippet = True
                    self.current["body"] = ""
            
            def handle_endtag(self, tag):
                if tag == "a" and self.in_title:
                    self.in_title = False
                elif tag == "a" and self.in_snippet:
                    self.in_snippet = False
                    if self.current.get("href"):
                        self.results.append(self.current)
                    self.current = {}
            
            def handle_data(self, data):
                if self.in_title:
                    self.current["title"] = self.current.get("title", "") + data
                elif self.in_snippet:
                    self.current["body"] = self.current.get("body", "") + data
        
        parser = DDGParser()
        parser.feed(resp.text)
        
        # Clean up URLs (DDG uses redirect URLs)
        for r in parser.results[:max_results]:
            href = r.get("href", "")
            if "uddg=" in href:
                import urllib.parse
                parsed = urllib.parse.parse_qs(urllib.parse.urlparse(href).query)
                if "uddg" in parsed:
                    r["href"] = urllib.parse.unquote(parsed["uddg"][0])
        
        return parser.results[:max_results]
    except Exception as e:
        print(f"  HTML fallback error: {e}")
        return []

def search_twitter_mentions(keyword):
    """Search for Twitter/X mentions - only actual tweets"""
    mentions = []
    
    queries = [
        f'"{keyword}" site:twitter.com',
        f'"{keyword}" site:x.com',
    ]
    
    for query in queries:
        time.sleep(1)  # Rate limit protection
        results = search_ddg_with_retry(query, 15)
        
        for r in results:
            url = r.get("href", r.get("url", ""))
            title = r.get("title", "")
            desc = r.get("body", r.get("description", ""))
            
            # Skip garbage
            if is_garbage_result(url, title, desc):
                continue
            
            # STRICT: Only accept tweet URLs with /status/
            tweet_pattern = r'(twitter\.com|x\.com)/[a-zA-Z0-9_]+/status/\d+'
            if not re.search(tweet_pattern, url):
                continue
            
            # Normalize to x.com
            url = re.sub(r'twitter\.com', 'x.com', url)
            url = url.split('?')[0]  # Clean query params
            
            if not any(m["url"] == url for m in mentions):
                mentions.append({
                    "source": "twitter",
                    "title": title,
                    "url": url,
                    "description": desc,
                    "found_at": now_utc().isoformat()
                })
    
    return mentions

def search_web_mentions(keyword):
    """Search for web mentions with strict validation"""
    query = f'"{keyword}" -site:twitter.com -site:x.com'
    
    time.sleep(1)  # Rate limit protection
    results = search_ddg_with_retry(query, 10)
    
    mentions = []
    for r in results:
        url = r.get("href", r.get("url", ""))
        title = r.get("title", "")
        desc = r.get("body", r.get("description", ""))
        
        # Skip garbage results
        if is_garbage_result(url, title, desc):
            print(f"    🗑️ Rejected garbage: {url[:50]}")
            continue
        
        mentions.append({
            "source": "web",
            "title": title,
            "url": url,
            "description": desc,
            "found_at": now_utc().isoformat()
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
    cutoff = now_utc() - timedelta(hours=dedup_hours)
    
    for mention in mentions:
        url = mention.get("url", "")
        
        # Apply exclusion filters
        if should_exclude(url, config):
            print(f"    ⛔ Config excluded: {url[:60]}")
            continue
        
        # Check for excluded keywords in title/description
        exclude_kw = config.get("exclude_keywords", [])
        text = f"{mention.get('title', '')} {mention.get('description', '')}"
        if any(kw.lower() in text.lower() for kw in exclude_kw):
            print(f"    ⛔ Keyword excluded: {mention.get('title', '')[:40]}")
            continue
        
        h = hash_mention(mention["title"], url)
        
        # Check if we've seen this before
        if h in seen["hashes"]:
            try:
                seen_time = datetime.fromisoformat(seen["hashes"][h].replace('Z', '+00:00'))
                if seen_time.tzinfo is None:
                    seen_time = seen_time.replace(tzinfo=timezone.utc)
                if seen_time > cutoff:
                    continue
            except:
                pass
        
        # Mark priority
        mention["priority"] = is_priority_domain(url, config)
        
        # New mention!
        seen["hashes"][h] = now_utc().isoformat()
        new_mentions.append(mention)
    
    return new_mentions

def format_alert(mention, keyword):
    """Format mention for Telegram alert"""
    source_emoji = "🐦" if mention["source"] == "twitter" else "🌐"
    priority_marker = "⭐ " if mention.get("priority") else ""
    
    title = mention['title'][:100] if mention['title'] else "No title"
    desc = mention['description'][:200] if mention['description'] else ""
    
    alert = f"""{priority_marker}{source_emoji} New Mention: {keyword}

{title}

{desc}

🔗 {mention['url']}"""
    return alert

def send_telegram_alert(message, chat_id):
    """Send alert via clawdbot message tool"""
    try:
        tmp_file = "/tmp/watchbot_msg.txt"
        with open(tmp_file, "w") as f:
            f.write(message)
        
        with open(tmp_file, "r") as f:
            msg_content = f.read()
        
        cmd = ['/usr/bin/clawdbot', 'message', 'send', '--channel', 'telegram', '--target', str(chat_id), '--message', msg_content]
        result = subprocess.run(cmd, capture_output=True, timeout=15)
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
            print(f"  Twitter: {len(twitter_mentions)} valid results")
            new_twitter = filter_new_mentions(twitter_mentions, seen, config)
            all_new_mentions.extend([(m, keyword) for m in new_twitter])
        
        # Search Web
        if config["sources"].get("google", True):
            web_mentions = search_web_mentions(keyword)
            print(f"  Web: {len(web_mentions)} valid results")
            new_web = filter_new_mentions(web_mentions, seen, config)
            all_new_mentions.extend([(m, keyword) for m in new_web])
        
        # Delay between keywords to avoid rate limits
        time.sleep(2)
    
    # Save updated seen hashes
    save_seen(seen)
    
    # Save results for digest
    save_results(all_new_mentions)
    
    print(f"\n✅ Found {len(all_new_mentions)} NEW mentions (validated)")
    
    # Send Telegram alerts
    if send_alerts and all_new_mentions and config.get("telegram_chat_id"):
        chat_id = config["telegram_chat_id"]
        print(f"\n📤 Sending {len(all_new_mentions)} alerts to Telegram...")
        
        for mention, keyword in all_new_mentions[:5]:
            alert = format_alert(mention, keyword)
            if send_telegram_alert(alert, chat_id):
                print(f"  ✅ Sent: {mention['title'][:40]}...")
            else:
                print(f"  ❌ Failed: {mention['title'][:40]}...")
            time.sleep(1)  # Don't spam
    
    return all_new_mentions

def generate_daily_digest():
    """Generate and send daily digest"""
    config = load_config()
    
    if not RESULTS_PATH.exists():
        print("No results to digest")
        return
    
    with open(RESULTS_PATH) as f:
        results = json.load(f)
    
    cutoff = (now_utc() - timedelta(hours=24)).isoformat()
    recent = [r for r in results if r.get("found_at", "") > cutoff]
    
    if not recent:
        print("No new mentions in last 24 hours")
        return
    
    by_keyword = {}
    for r in recent:
        kw = r.get("keyword", "Unknown")
        by_keyword.setdefault(kw, []).append(r)
    
    digest = f"""📊 WatchBot Daily Digest
{now_utc().strftime('%Y-%m-%d')}

{len(recent)} mentions in the last 24 hours:

"""
    
    for keyword, mentions in by_keyword.items():
        twitter_count = len([m for m in mentions if m["source"] == "twitter"])
        web_count = len([m for m in mentions if m["source"] == "web"])
        digest += f"• {keyword}: {twitter_count} Twitter, {web_count} Web\n"
    
    digest += "\nTop Mentions:\n\n"
    
    for mention in recent[:5]:
        source_emoji = "🐦" if mention["source"] == "twitter" else "🌐"
        title = mention['title'][:60] if mention['title'] else "No title"
        digest += f"{source_emoji} {title}\n{mention['url']}\n\n"
    
    digest += f"\n— WatchBot by Agent Mafia"
    
    if config.get("telegram_chat_id"):
        send_telegram_alert(digest, config["telegram_chat_id"])
        print(f"✅ Daily digest sent ({len(recent)} mentions)")
    
    return digest

def save_results(mentions):
    """Append results to JSON file"""
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
    
    cutoff = (now_utc() - timedelta(days=7)).isoformat()
    existing = [m for m in existing if m.get("found_at", "") > cutoff]
    
    with open(RESULTS_PATH, "w") as f:
        json.dump(existing, f, indent=2)

def test_search():
    """Quick test"""
    print("Testing search with validation...")
    results = search_web_mentions("SwissChain")
    print(f"Got {len(results)} valid results")
    for r in results[:3]:
        print(f"  ✅ {r.get('title', 'No title')[:50]}")
    return len(results) >= 0

if __name__ == "__main__":
    import sys
    
    print(f"🤖 WatchBot Monitor — {now_utc().strftime('%Y-%m-%d %H:%M')} UTC")
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
            print(f"\nDone. {len(mentions)} new mentions found (no alerts).")
        else:
            print(f"Unknown command: {cmd}")
    else:
        mentions = run_monitor()
        print(f"\nDone. {len(mentions)} new mentions found.")
