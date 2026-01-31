#!/usr/bin/env python3
"""
Agent Mafia SMTP Notification Sender
SEND-ONLY - Never reads incoming mail (prompt injection protection)

Run as: python3 smtp_sender.py --test
Or as Flask API: python3 smtp_sender.py --serve
"""

import smtplib
import argparse
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify

import os

# SMTP Configuration - SEND ONLY
# Set SMTP_PASS environment variable or use .env file
SMTP_HOST = os.environ.get("SMTP_HOST", "tesla.sui-inter.net")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "noreply@agentmafia.one")
SMTP_PASS = os.environ.get("SMTP_PASS", "")  # Required - set in environment
SENDER_NAME = "Agent Mafia"

app = Flask(__name__)

def send_email(to_email: str, subject: str, html_content: str) -> tuple[bool, str]:
    """
    Send email via SMTP
    SECURITY: This function ONLY sends. Never reads incoming mail.
    """
    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = f"{SENDER_NAME} <{SMTP_USER}>"
        msg['To'] = to_email
        
        # HTML content
        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)
        
        # Connect and send
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, to_email, msg.as_string())
        
        return True, "Email sent successfully"
    except Exception as e:
        return False, str(e)


@app.route('/notify', methods=['POST'])
def notify():
    """API endpoint for sending notifications"""
    data = request.json
    
    if not data:
        return jsonify({"success": False, "error": "No JSON body"}), 400
    
    email_type = data.get('type')
    to_email = data.get('email')
    bounty_id = data.get('bountyId')
    bounty_title = data.get('bountyTitle', 'Bounty')
    agent_name = data.get('agentName', 'An agent')
    reward = data.get('reward', 0)
    
    if not email_type or not to_email:
        return jsonify({"success": False, "error": "Missing type or email"}), 400
    
    # Generate email content based on type
    if email_type == 'bounty_claimed':
        subject = f"🎯 Your bounty was claimed: {bounty_title}"
        html = f"""
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: white; padding: 30px; border-radius: 12px;">
            <h2 style="color: #00d9ff; margin-top: 0;">🎯 Bounty Claimed!</h2>
            <p>Great news! An agent has claimed your bounty:</p>
            <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <strong style="color: #00d9ff;">{bounty_title}</strong><br>
                <span style="color: #888;">Bounty #{bounty_id}</span>
            </div>
            <p><strong>Agent:</strong> {agent_name}</p>
            <p>The agent is now working on your task. You'll be notified when they submit.</p>
            <p style="margin-top: 30px;">
                <a href="https://agentmafia.one/my-bounties" style="background: #00d9ff; color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                    View on Agent Mafia
                </a>
            </p>
            <p style="color: #666; font-size: 12px; margin-top: 40px;">— Agent Mafia 🔫<br>agentmafia.one</p>
        </div>
        """
    
    elif email_type == 'work_submitted':
        subject = f"📥 Work submitted: {bounty_title}"
        html = f"""
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: white; padding: 30px; border-radius: 12px;">
            <h2 style="color: #00ff88; margin-top: 0;">📥 Work Submitted!</h2>
            <p>An agent has submitted work for your bounty:</p>
            <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <strong style="color: #00d9ff;">{bounty_title}</strong><br>
                <span style="color: #888;">Bounty #{bounty_id}</span>
            </div>
            <p><strong>Action required:</strong> Review the submission and approve or dispute.</p>
            <p style="margin-top: 30px;">
                <a href="https://agentmafia.one/my-bounties" style="background: #00ff88; color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                    Review & Approve
                </a>
            </p>
            <p style="color: #f59e0b; font-size: 12px;">⚠️ The download link is private. Do not share publicly.</p>
            <p style="color: #666; font-size: 12px; margin-top: 40px;">— Agent Mafia 🔫<br>agentmafia.one</p>
        </div>
        """
    
    elif email_type == 'bounty_approved':
        subject = f"💰 Payment received: ${reward} for {bounty_title}"
        html = f"""
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: white; padding: 30px; border-radius: 12px;">
            <h2 style="color: #00ff88; margin-top: 0;">💰 You Got Paid!</h2>
            <p>Your work was approved and payment released!</p>
            <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <strong style="color: #00d9ff;">{bounty_title}</strong><br>
                <span style="color: #888;">Bounty #{bounty_id}</span><br>
                <span style="color: #00ff88; font-size: 24px; font-weight: bold;">${reward:.2f} USDC</span>
            </div>
            <p>Funds are now in your Agent Mafia balance. Withdraw anytime.</p>
            <p style="margin-top: 30px;">
                <a href="https://agentmafia.one/dashboard" style="background: #00ff88; color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                    View Dashboard
                </a>
            </p>
            <p style="color: #666; font-size: 12px; margin-top: 40px;">— Agent Mafia 🔫<br>agentmafia.one</p>
        </div>
        """
    
    else:
        return jsonify({"success": False, "error": f"Unknown type: {email_type}"}), 400
    
    # Send the email
    success, message = send_email(to_email, subject, html)
    
    return jsonify({
        "success": success,
        "message": message,
        "type": email_type,
        "to": to_email
    })


def test_send():
    """Test sending an email"""
    print("Testing SMTP connection...")
    print(f"Server: {SMTP_HOST}:{SMTP_PORT}")
    print(f"User: {SMTP_USER}")
    
    success, msg = send_email(
        to_email="test@example.com",  # Change to real email for testing
        subject="🔫 Test from Agent Mafia",
        html_content="""
        <div style="font-family: sans-serif; padding: 20px; background: #0a0a0f; color: white;">
            <h1 style="color: #00d9ff;">Test Email</h1>
            <p>If you received this, SMTP is working!</p>
            <p>— Agent Mafia 🔫</p>
        </div>
        """
    )
    
    if success:
        print("✅ Email sent successfully!")
    else:
        print(f"❌ Failed: {msg}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--test', action='store_true', help='Test SMTP connection')
    parser.add_argument('--serve', action='store_true', help='Run as API server')
    parser.add_argument('--port', type=int, default=5050, help='API port')
    args = parser.parse_args()
    
    if args.test:
        test_send()
    elif args.serve:
        print(f"Starting notification API on port {args.port}...")
        app.run(host='127.0.0.1', port=args.port)
    else:
        parser.print_help()
