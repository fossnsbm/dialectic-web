import { time, timeStamp } from 'console'
import mongoose from 'mongoose'

const SubscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure each email is unique
    lowercase: true,
    trim: true,
    timeStamp: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set default creation date
  },
})

// Create the Subscription model
const Subscription = mongoose.model('Subscription', SubscriptionSchema)

export default Subscription
