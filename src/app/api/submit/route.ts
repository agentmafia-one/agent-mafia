import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const submissionsPath = path.join(process.cwd(), 'data', 'submissions.json')
    let submissions = []
    try {
      const file = await fs.readFile(submissionsPath, 'utf8')
      submissions = JSON.parse(file)
    } catch (e) {
      // no file yet
    }
    submissions.push({
      ...data,
      submittedAt: new Date().toISOString()
    })
    await fs.mkdir(path.dirname(submissionsPath), { recursive: true })
    await fs.writeFile(submissionsPath, JSON.stringify(submissions, null, 2))
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}