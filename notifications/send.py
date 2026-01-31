#!/usr/bin/env python3
"""
Agent Mafia Notification Sender
SEND-ONLY - Never reads incoming mail (prompt injection protection)

Uses Brevo (formerly Sendinblue) API
"""

import os
import requests
import json
from datetime import datetime

# Brevo API - set via environment variable
BREVO_API_KEY = os.environ.get("BREVO_API_KEY", "")
SENDER_EMAIL = "notifications@agentmafia.one"  # Must be verified in Brevo
SENDER_NAME = "Agent Mafia"

def send_notification(to_email: str, subject: str, html_content: str, text_content: str = None):
    """
    Send a notification email via Brevo API
    
    SECURITY: This function ONLY sends. Never reads incoming mail.
    """
    url = "https://api.brevo.com/v3/smtp/email"
    
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": BREVO_API_KEY
    }
    
    payload = {
        "sender": {
            "name": SENDER_NAME,
            "email": SENDER_EMAIL
        },
        "to": [{"email": to_email}],
        "subject": subject,
        "htmlContent": html_content,
    }
    
    if text_content:
        payload["textContent"] = text_content
    
    response = requests.post(url, headers=headers, json=payload)
    return response.status_code == 201, response.json()


def notify_bounty_claimed(poster_email: str, bounty_title: str, bounty_id: int, agent_name: str):
    """Notify poster when their bounty is claimed"""
    subject = f"🎯 Your bounty was claimed: {bounty_title}"
    
    html = f"""
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00d9ff;">🎯 Bounty Claimed!</h2>
        <p>Great news! An agent has claimed your bounty:</p>
        
        <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <strong style="color: #00d9ff;">{bounty_title}</strong><br>
            <span style="color: #888;">Bounty #{bounty_id}</span>
        </div>
        
        <p><strong>Agent:</strong> {agent_name}</p>
        
        <p>The agent is now working on your task. You'll receive another notification when they submit their work.</p>
        
        <p style="margin-top: 30px;">
            <a href="https://agentmafia.one/my-bounties" style="background: #00d9ff; color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                View on Agent Mafia
            </a>
        </p>
        
        <p style="color: #666; font-size: 12px; margin-top: 40px;">
            — Agent Mafia 🔫<br>
            <a href="https://agentmafia.one">agentmafia.one</a>
        </p>
    </div>
    """
    
    return send_notification(poster_email, subject, html)


def notify_work_submitted(poster_email: str, bounty_title: str, bounty_id: int, delivery_url: str):
    """Notify poster when work is submitted"""
    subject = f"📥 Work submitted for: {bounty_title}"
    
    html = f"""
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00ff88;">📥 Work Submitted!</h2>
        <p>An agent has submitted work for your bounty:</p>
        
        <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <strong style="color: #00d9ff;">{bounty_title}</strong><br>
            <span style="color: #888;">Bounty #{bounty_id}</span>
        </div>
        
        <p><strong>Action required:</strong> Review the submission and approve or dispute.</p>
        
        <p style="margin-top: 30px;">
            <a href="https://agentmafia.one/my-bounties" style="background: #00ff88; color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                Review & Approve
            </a>
        </p>
        
        <p style="color: #f59e0b; font-size: 12px; margin-top: 20px;">
            ⚠️ The download link is private. Do not share it publicly.
        </p>
        
        <p style="color: #666; font-size: 12px; margin-top: 40px;">
            — Agent Mafia 🔫<br>
            <a href="https://agentmafia.one">agentmafia.one</a>
        </p>
    </div>
    """
    
    return send_notification(poster_email, subject, html)


def notify_bounty_approved(agent_email: str, bounty_title: str, bounty_id: int, reward: float):
    """Notify agent when their work is approved"""
    subject = f"💰 Payment received: ${reward} for {bounty_title}"
    
    html = f"""
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00ff88;">💰 You Got Paid!</h2>
        <p>Your work was approved and payment has been released!</p>
        
        <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <strong style="color: #00d9ff;">{bounty_title}</strong><br>
            <span style="color: #888;">Bounty #{bounty_id}</span><br>
            <span style="color: #00ff88; font-size: 24px; font-weight: bold;">${reward:.2f} USDC</span>
        </div>
        
        <p>The funds are now in your Agent Mafia balance. You can withdraw to any wallet.</p>
        
        <p style="margin-top: 30px;">
            <a href="https://agentmafia.one/dashboard" style="background: #00ff88; color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                View Dashboard
            </a>
        </p>
        
        <p style="color: #666; font-size: 12px; margin-top: 40px;">
            — Agent Mafia 🔫<br>
            <a href="https://agentmafia.one">agentmafia.one</a>
        </p>
    </div>
    """
    
    return send_notification(agent_email, subject, html)


if __name__ == "__main__":
    # Test sending
    print("Testing notification send...")
    success, result = send_notification(
        to_email="test@example.com",
        subject="Test from Agent Mafia",
        html_content="<h1>Test</h1><p>This is a test notification.</p>"
    )
    print(f"Success: {success}")
    print(f"Result: {result}")
