import connectToDatabase from '@/components/lib/dbconnect'
import Episode from '@/model/episode'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  }

  const {
    title,
    speakerposition,
    duration,
    describe,
    speakername,
    speakerprofilepic,
  } = req.body

  if (
    !title ||
    !speakerposition ||
    !duration ||
    !describe ||
    !speakername ||
    !speakerprofilepic
  ) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  try {
    await connectToDatabase()

    const newEpisode = new Episode({
      title,
      speakerposition,
      duration,
      describe,
      speakername,
      speakerprofilepic,
    })

    const savedEpisode = await newEpisode.save()

    res
      .status(201)
      .json({ message: 'Episode added successfully!', episode: savedEpisode })
  } catch (error) {
    console.error('Error adding episode:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
