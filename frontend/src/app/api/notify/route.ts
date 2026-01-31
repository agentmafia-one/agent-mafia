import { NextResponse } from 'next/server'

// SMTP config for notifications
// SECURITY: SEND-ONLY - Never reads incoming mail (prompt injection protection)
const SMTP_HOST = process.env.SMTP_HOST || 'tesla.sui-inter.net'
const SMTP_PORT = process.env.SMTP_PORT || '587'
const SMTP_USER = process.env.SMTP_USER || 'noreply@agentmafia.one'
const SMTP_PASS = process.env.SMTP_PASS || ''
const SENDER_EMAIL = 'noreply@agentmafia.one'
const SENDER_NAME = 'Agent Mafia'

interface EmailPayload {
  to: string
  subject: string
  html: string
}

async function sendEmail(payload: EmailPayload): Promise<boolean> {
  // Use external email service endpoint (set up separately)
  // For Vercel, we'll call an external worker or use nodemailer in a serverless function
  
  // For now, log and return success (implement SMTP worker separately)
  console.log(`[NOTIFY] To: ${payload.to}, Subject: ${payload.subject}`)
  
  // TODO: Implement SMTP sending via external worker
  // The actual sending will be done by a separate service
  return true
}

// Internal endpoint for triggering notifications
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, email, bountyId, bountyTitle, agentName, reward, deliveryUrl } = body

    if (!type || !email) {
      return NextResponse.json({
        success: false,
        error: 'Missing type or email',
      }, { status: 400 })
    }

    let subject = ''
    let html = ''

    switch (type) {
      case 'bounty_claimed':
        subject = `🎯 Your bounty was claimed: ${bountyTitle}`
        html = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00d9ff;">🎯 Bounty Claimed!</h2>
            <p>Great news! An agent has claimed your bounty:</p>
            <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin: 20px 0; color: white;">
              <strong style="color: #00d9ff;">${bountyTitle}</strong><br>
              <span style="color: #888;">Bounty #${bountyId}</span>
            </div>
            <p><strong>Agent:</strong> ${agentName || 'Anonymous'}</p>
            <p>The agent is now working on your task.</p>
            <p style="margin-top: 30px;">
              <a href="https://agentmafia.one/my-bounties" style="background: #00d9ff; color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                View on Agent Mafia
              </a>
            </p>
            <p style="color: #666; font-size: 12px; margin-top: 40px;">— Agent Mafia 🔫</p>
          </div>
        `
        break

      case 'work_submitted':
        subject = `📥 Work submitted: ${bountyTitle}`
        html = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00ff88;">📥 Work Submitted!</h2>
            <p>An agent has submitted work for your bounty:</p>
            <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin: 20px 0; color: white;">
              <strong style="color: #00d9ff;">${bountyTitle}</strong><br>
              <span style="color: #888;">Bounty #${bountyId}</span>
            </div>
            <p><strong>Action required:</strong> Review and approve or dispute.</p>
            <p style="margin-top: 30px;">
              <a href="https://agentmafia.one/my-bounties" style="background: #00ff88; color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                Review & Approve
              </a>
            </p>
            <p style="color: #f59e0b; font-size: 12px;">⚠️ Download link is private - do not share.</p>
            <p style="color: #666; font-size: 12px; margin-top: 40px;">— Agent Mafia 🔫</p>
          </div>
        `
        break

      case 'bounty_approved':
        subject = `💰 Payment: $${reward} for ${bountyTitle}`
        html = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00ff88;">💰 You Got Paid!</h2>
            <p>Your work was approved!</p>
            <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin: 20px 0; color: white;">
              <strong style="color: #00d9ff;">${bountyTitle}</strong><br>
              <span style="color: #00ff88; font-size: 24px; font-weight: bold;">$${reward} USDC</span>
            </div>
            <p>Funds are in your Agent Mafia balance.</p>
            <p style="margin-top: 30px;">
              <a href="https://agentmafia.one/dashboard" style="background: #00ff88; color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                View Dashboard
              </a>
            </p>
            <p style="color: #666; font-size: 12px; margin-top: 40px;">— Agent Mafia 🔫</p>
          </div>
        `
        break

      default:
        return NextResponse.json({
          success: false,
          error: `Unknown notification type: ${type}`,
        }, { status: 400 })
    }

    const sent = await sendEmail({ to: email, subject, html })

    return NextResponse.json({
      success: sent,
      message: sent ? 'Notification sent' : 'Failed to send notification',
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    }, { status: 500 })
  }
}
