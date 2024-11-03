import { time, timeStamp } from 'console'
import { Speaker } from 'lucide-react'
import mongoose from 'mongoose'
import { describe } from 'node:test'
import { date } from 'zod'

const episodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  episodenumber: {
    type: Number,
    required: true, // auto genarate
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
  speakerprofilepic: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now, // Set default creation date
  },
})

// Create the Subscription model
const Subscription = mongoose.model('episodes', episodeSchema)

export default Subscription
