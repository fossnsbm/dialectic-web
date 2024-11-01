import dotenv from 'dotenv'
import { connectToDatabase } from '@/utils/db'
import mongoose, { Document, Model } from 'mongoose'

dotenv.config()

interface IEmail extends Document {
  email: string
}

const emailSchema = new mongoose.Schema<IEmail>({
  email: { type: String, required: true, unique: true },
})

const EmailModel: Model<IEmail> =
  mongoose.models.Subscriptionemails ||
  mongoose.model<IEmail>('Subscriptionemails', emailSchema)

export async function POST(req: Request): Promise<Response> {
  try {
    await connectToDatabase()
    const { email } = await req.json()

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
      const newEmail = new EmailModel({ email })
      await newEmail.save()
    }
    return new Response(
      JSON.stringify({ message: 'Subscribed to newsletter' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error saving email:', error)
    return new Response(JSON.stringify({ message: 'Failed to subscribe' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
