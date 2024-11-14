import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import Admin from '@/model/admin'
import { connectToDatabase } from '@/utils/db'
dotenv.config()

// POST handler with enhanced security
export async function POST(req: Request) {
  try {
    await connectToDatabase()
    const { email, password } = await req.json()

    const user = await Admin.findOne({ email: email })
    if (!user) {
      return new Response(
        JSON.stringify({ message: 'Invalid email credentials' }),
        {
          status: 401,
        },
      )
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return new Response(
        JSON.stringify({ message: 'Invalid password credentials' }),
        {
          status: 401,
        },
      )
    }

    if (!process.env.JWT_SECRET) {
      return new Response(
        JSON.stringify({ message: 'JWT_SECRET is not defined' }),
        { status: 500 },
      )
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    })

    return new Response(
      JSON.stringify({ token, redirectUrl: '/admin/addepisode' }),
      { status: 200 },
    )
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ message: 'An error occurred', error: errorMessage }),
      { status: 500 },
    )
  }
}
