import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env',
  )
}

let isConnected = false // Track the connection status

export async function connectToDatabase() {
  if (isConnected) {
    return // If already connected, skip
  }

  try {
    await mongoose.connect(MONGODB_URI)
    isConnected = true
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw new Error('Database connection failed')
  }
}
