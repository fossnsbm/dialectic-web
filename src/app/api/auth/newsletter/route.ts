import dotenv from 'dotenv'
import { connectToDatabase } from '@/utils/db'
import mongoose, { Document, Model } from 'mongoose'

dotenv.config()

// Define the interface for the email document
interface IEmail extends Document {
  email: string
}

// Define the email schema
const emailSchema = new mongoose.Schema<IEmail>({
  email: { type: String, required: true, unique: true },
})

// Create the email model
const EmailModel: Model<IEmail> =
  mongoose.models.Subscriptionemails ||
  mongoose.model<IEmail>('Subscriptionemails', emailSchema)

// POST request handler to subscribe an email
export async function POST(req: Request): Promise<Response> {
  try {
    // Connect to the database
    await connectToDatabase()

    // Parse the incoming JSON body
    const { email } = await req.json()

    // Check if the email already exists in the database
    const existingEmail = await EmailModel.findOne({ email })
    if (existingEmail) {
      return new Response(
        JSON.stringify({ message: 'Email is already subscribed' }),
        {
          status: 409,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    } else {
      // If email doesn't exist, create a new subscription
      const newEmail = new EmailModel({ email })
      await newEmail.save()
      return new Response(
        JSON.stringify({ message: 'Subscribed to the newsletter' }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }
  } catch (error) {
    // Handle any errors
    console.error('Error saving email:', error)
    return new Response(JSON.stringify({ message: 'Failed to subscribe' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

// GET request handler to retrieve all subscribed emails
export async function GET(req: Request): Promise<Response> {
  try {
    // Connect to the database
    await connectToDatabase()

    // Retrieve all subscribed emails from the database
    const emails = await EmailModel.find({})

    return new Response(JSON.stringify(emails), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    // Handle any errors
    console.error('Error retrieving emails:', error)
    return new Response(
      JSON.stringify({ message: 'Failed to retrieve emails' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}

// DELETE request handler to unsubscribe an email
export async function DELETE(req: Request): Promise<Response> {
  try {
    // Connect to the database
    await connectToDatabase()

    // Parse the incoming JSON body
    const { email } = await req.json()

    // Check if the email exists in the database
    const existingEmail = await EmailModel.findOne({ email })
    if (!existingEmail) {
      return new Response(JSON.stringify({ message: 'Email not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Remove the email from the database
    await EmailModel.deleteOne({ email })

    return new Response(
      JSON.stringify({ message: 'Successfully unsubscribed' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    // Handle any errors
    console.error('Error unsubscribing email:', error)
    return new Response(JSON.stringify({ message: 'Failed to unsubscribe' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
