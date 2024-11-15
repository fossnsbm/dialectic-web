'use client'

import { useState, useEffect } from 'react'
import { Heading } from '@/components/ui/heading'
import AlertDialogDemocard from '@/components/common/aler-dialog-idit-card'
import Containerf from '@/components/common/containerf'
import Popular_ep from '@/components/common/popular_ep-admin'

interface PopularEpProps {
  _id: string
  duration: string
  describe?: string // Make this optional
  speakername: string
  speakerprofilepicurl?: string
  title: string
}

const UserClient = () => {
  const [episodes, setEpisodes] = useState<PopularEpProps[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch('/api/card/allcards', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch episodes')
        }

        const data: PopularEpProps[] = await response.json()
        setEpisodes(data)
      } catch (error) {
        console.error('Error fetching episodes:', error)
        setError('Failed to load episodes. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [])

  if (loading) {
    return (
      <div
        className="h-screen flex justify-center items-center"
        aria-busy="true"
      >
        <span className="loader" aria-label="Loading episodes"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Ensure need to keep maximum cards ${episodes.length}`}
          description=""
        />
      </div>
      <Containerf>
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 py-32">
          {episodes.map((episode) => (
            <Popular_ep key={episode._id} {...episode} />
          ))}
        </div>
      </Containerf>
    </>
  )
}

export default UserClient
