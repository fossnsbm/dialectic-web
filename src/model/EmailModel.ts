import mongoose from 'mongoose'

// Define the schema for the email document
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
})

// Check if the model already exists to prevent overwriting
const EmailModel =
  mongoose.models.Subscription || mongoose.model('Subscription', emailSchema)

export default EmailModel
