'use client'
import React, { useState } from 'react'
import { Button } from 'components/common/buttons/'
import { Input } from '@/components/ui/input'
import { Container } from '../common'
import { set } from 'mongoose'
import { toast } from '../ui/use-toast'

const NewsLetter = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/auth/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const result = await response.json()

      if (response.ok) {
        toast({
          title: 'Subcribe Successful',
          description: 'You have successfully subscribed to our newsletter.',
        })

        setEmail('')
        setLoading(false)
      } else {
        toast({
          title: 'Failed',
          description: result.message || 'An error occurred during login.',
        })

        setLoading(false)
      }
    } catch (error) {
      toast({
        title: 'Login Failed',
        description:
          (error as Error).message || 'An error occurred during login.',
      })
      setEmail('')
      setLoading(false)
    }
  }

  return (
    <div id="bge">
      <Container>
        <div className="py-12">
          <div className="flex w-full md:flex-row flex-col justify-center my-20">
            <div className="flex flex-1 flex-col md:items-start items-center gap-2 py-2">
              <h2 className="md:text-5xl sm:text-4xl text-2xl font-semibold text-gray-900">
                Sign up for our newsletter!
              </h2>
              <p className="text-gray-700 text-sm">
                Get notified about updates and be the first to get early access
                to new episodes.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-1 flex-col md:flex-row items-center justify-center gap-2"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="flex border-0 rounded-lg h-12 w-full focus:shadow-lg focus:outline-blue-400 px-4"
                required
              />
              <Button variant={'black'} type="submit" className="flex">
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NewsLetter
