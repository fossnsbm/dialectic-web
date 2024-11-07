import { connectToDatabase } from '@/utils/db'
import YourModel from '@/model/episode'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  await connectToDatabase()

  try {
    const {
      title,
      speakerposition,
      duration,
      describe,
      speakername,
      youtubecode,
      _id,
    } = await req.json()

    const updatedData = await YourModel.findByIdAndUpdate(_id, {
      title,
      speakerposition,
      duration,
      describe,
      speakername,
      youtubecode,
    })

    if (!updatedData) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    return NextResponse.json(updatedData, { status: 200 })
  } catch (error) {
    console.error('Error updating data:', error)
    return NextResponse.json(
      { error: 'Error updating data in the database' },
      { status: 500 },
    )
  }
}
