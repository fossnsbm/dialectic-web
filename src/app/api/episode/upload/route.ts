import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<NextResponse> {
  const formData = await request.formData()

  const file = formData.get('file')

  if (!file || !(file instanceof Blob)) {
    return NextResponse.json({ error: 'File is required' }, { status: 400 })
  }

  const filename = file.name

  const blob = await put(filename, file.stream(), {
    access: 'public',
  })

  return NextResponse.json({ url: blob.url }, { status: 200 })
}

export async function GET(request: Request): Promise<NextResponse> {
  return NextResponse.json({ message: 'GET method not implemented' })
}
