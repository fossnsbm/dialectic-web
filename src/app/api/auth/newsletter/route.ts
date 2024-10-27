import dotenv from 'dotenv'

dotenv.config()

export async function POST(req: Request) {
  const { email } = await req.json()

  return new Response(JSON.stringify({ message: 'Subscribed to newsletter' }), {
    status: 200,
  })
}
