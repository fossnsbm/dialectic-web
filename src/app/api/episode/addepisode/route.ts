import { connectToDatabase } from '@/utils/db'
import Episode from '@/model/episode'
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'

export async function POST(req: NextRequest) {
  // Check if the request method is POST
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
    blobFilePath, // Assume you have a blob file path included in the request
  } = await req.json()

  if (
    !title ||
    !speakerposition ||
    !duration ||
    !describe ||
    !speakername ||
    !speakerprofilepicurl
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
    })

    // Save the new episode
    const savedEpisode = await newEpisode.save()

    // Respond with success
    return NextResponse.json(
      { message: 'Episode added successfully!', episode: savedEpisode },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error adding episode:', error)

    // Attempt to remove the blob file if it exists
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
