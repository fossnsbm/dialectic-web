import { youTube } from '@/constants'
import mongoose from 'mongoose'
import { string } from 'zod'

const cardSchema = new mongoose.Schema({
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
    default: Date.now,
  },
})

const Card = mongoose.models.Card || mongoose.model('Card', cardSchema)

export default Card
