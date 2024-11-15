import { connectToDatabase } from '@/utils/db'
import Card from '@/model/card'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connectToDatabase()

  try {
    // Fetch necessary fields from the database
    const cards = await Card.find(
      {},
      '_id createdAt duration describe speakername speakerprofilepicurl title',
    )

    // Respond with the fetched data
    return NextResponse.json(cards, { status: 200 })
  } catch (error) {
    console.error('Error fetching data from the database:', error)
    return NextResponse.json(
      { error: 'Error fetching data from the database' },
      { status: 500 },
    )
  }
}
