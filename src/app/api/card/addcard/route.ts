import { connectToDatabase } from '@/utils/db'
import Card from '@/model/card'
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: `Method ${req.method} Not Allowed` },
      { status: 405 },
    )
  }

  const {
    title,
    duration,
    describe,
    speakername,
    speakerprofilepicurl,
    blobFilePath,
    youtubecode,
  } = await req.json()

  if (
    !title ||
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
    await connectToDatabase()

    const newCard = new Card({
      title,
      duration,
      describe,
      speakername,
      speakerprofilepicurl,
      youtubecode,
    })

    const savedCard = await newCard.save()
    return NextResponse.json(
      { message: 'Episode added successfully!', episode: savedCard },
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
