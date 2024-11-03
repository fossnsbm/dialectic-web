import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

// Ensure passwords in the database are hashed
const usersDB = [
  {
    email: 'admin@gmail.com',
    password: await bcrypt.hash('yohanmano', 10), // Hash the password
    id: 10909,
  },
]

// POST handler with enhanced security
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    const user = usersDB.find((user) => user.email === email)
    if (!user) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
      })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
      })
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
