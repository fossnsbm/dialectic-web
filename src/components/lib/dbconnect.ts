import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  )
}

declare global {
  var mongoose: {
    conn: Mongoose | null
    promise: Promise<Mongoose> | null
  }
}

global.mongoose = global.mongoose || { conn: null, promise: null }

async function dbConnect(): Promise<Mongoose> {
  if (global.mongoose.conn) {
    console.log('Using cached MongoDB connection')
    return global.mongoose.conn
  }

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('New MongoDB connection established')
      return mongoose
    })
  }

  global.mongoose.conn = await global.mongoose.promise
  return global.mongoose.conn
}

export default dbConnect
