import { connectToDatabase } from '@/utils/db'
import EpisodeModel from '@/model/episode'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connectToDatabase()

  try {
    const ids = await EpisodeModel.find({}).select('_id createdAt')
    return NextResponse.json(ids, { status: 200 })
  } catch (error) {
    console.error('Error fetching IDs from the database:', error)
    return NextResponse.json(
      { error: 'Error fetching data from the database' },
      { status: 500 },
    )
  }
}
