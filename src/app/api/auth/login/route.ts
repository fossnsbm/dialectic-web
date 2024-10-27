import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const usersDB = [
  { email: 'admin@gmail.com', password: 'yohanmano', id: 10909 }, // Ensure the password is hashed
]

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = usersDB.find((user) => user.email === email)
  const pass = usersDB.find((pass) => pass.password === password)
  if (!user) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
    })
  }

  if (!pass) {
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

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    },
  )

  console.log('JWT_SECRET:', process.env.JWT_SECRET)

  return new Response(
    JSON.stringify({ token, redirectUrl: '/admin/overview' }),
    { status: 200 },
  )
}
