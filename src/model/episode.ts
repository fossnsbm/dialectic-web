import { youTube } from '@/constants'
import mongoose from 'mongoose'
import { string } from 'zod'

const episodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  describe: {
    type: String,
    required: true,
  },
  speakername: {
    type: String,
    required: true,
  },
  speakerposition: {
    type: String,
    required: true,
  },
  speakerprofilepicurl: {
    type: String,
    required: true,
  },
  youtubecode: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set default creation date
  },
})

// Check if the model already exists to prevent overwriting
const Episode =
  mongoose.models.Episode || mongoose.model('Episode', episodeSchema)

export default Episode
