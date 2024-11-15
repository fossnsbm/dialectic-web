import { connectToDatabase } from '@/utils/db'
import Episode from '@/model/episode'
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import nodemailer from 'nodemailer'
import EmailModel from '@/model/EmailModel'

async function sendEmailToSubscribers(
  subject: string,
  body: string,
  youtubeLink: string,
  title: string,
) {
  try {
    // Fetch all subscribers' emails from the database
    const subscribers = await EmailModel.find({})

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Send email to each subscriber
    for (let subscriber of subscribers) {
      const htmlBody = `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #333;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
              }
              .container {
                background-color: #ffffff;
                padding: 30px;
                border-radius: 8px;
                max-width: 600px;
                margin: 0 auto;
              }
              h1 {
                color: #0073e6;
              }
              .cta-button {
                background-color: #0073e6;
                color: #ffffff;
                text-decoration: none;
                padding: 12px 24px;
                border-radius: 5px;
                display: inline-block;
                font-size: 16px;
                margin-top: 20px;
              }
              .cta-button:hover {
                background-color: #005bb5;
              }
              .episode-info {
                margin-bottom: 20px;
              }
              .footer {
                font-size: 12px;
                color: #777;
                text-align: center;
                margin-top: 30px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>${body}</h1>
              <div class="episode-info">
                <p>We have just released a brand new episode! Check it out now on YouTube:</p>
              </div>
              <a href="${youtubeLink}" class="cta-button">Watch on YouTube</a>
              <div class="footer">
                <p>If you don't want to receive updates from us, you can <a href="#">unsubscribe here</a>.</p>
              </div>
            </div>
          </body>
        </html>
      `

      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: subscriber.email, // recipient address
        subject, // subject line
        html: htmlBody, // HTML body
      })

      console.log(`Email sent to: ${subscriber.email}`)
    }
  } catch (error) {
    console.error('Error sending email to subscribers:', error)
  }
}

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: `Method ${req.method} Not Allowed` },
      { status: 405 },
    )
  }

  const {
    title,
    speakerposition,
    duration,
    describe,
    speakername,
    speakerprofilepicurl,
    blobFilePath,
    youtubecode,
  } = await req.json()

  if (
    !title ||
    !speakerposition ||
    !duration ||
    !describe ||
    !speakername ||
    !speakerprofilepicurl ||
    !youtubecode
  ) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 },
    )
  }

  try {
    // Connect to the database
    await connectToDatabase()

    // Create a new Episode instance
    const newEpisode = new Episode({
      title,
      speakerposition,
      duration,
      describe,
      speakername,
      speakerprofilepicurl,
      youtubecode,
    })

    const savedEpisode = await newEpisode.save()

    // Send email to all subscribers about the new episode
    const subject = 'New Episode Released!'
    const body = `A new episode titled "${title}" has been released. Don't miss it!`
    const youtubeLink = `https://www.youtube.com/watch?v=${youtubecode}` // YouTube link for the new episode
    await sendEmailToSubscribers(subject, body, title, youtubeLink)

    return NextResponse.json(
      { message: 'Episode added successfully!', episode: savedEpisode },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error adding episode:', error)

    if (blobFilePath) {
      try {
        await fs.unlink(blobFilePath)
        console.log(`Removed blob file at: ${blobFilePath}`)
      } catch (fileError) {
        console.error('Error removing blob file:', fileError)
      }
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
