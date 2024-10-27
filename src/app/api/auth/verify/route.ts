import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export async function GET(req: Request) {
  const authHeader = req.headers.get('Authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new Response(
      JSON.stringify({ message: 'Token missing or malformed' }),
      { status: 401 },
    )
  }

  const token = authHeader.split(' ')[1]

  if (!process.env.JWT_SECRET) {
    return new Response(
      JSON.stringify({ message: 'JWT_SECRET is not defined' }),
      { status: 500 },
    )
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return new Response(JSON.stringify({ user: decoded }), { status: 200 })
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Invalid or expired token' }),
      { status: 401 },
    )
  }
}
