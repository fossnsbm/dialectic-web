'use client'
import React, { useState, useEffect } from 'react'
import Containerf from '../common/containerf'
import Popular_ep from '@/components/common/popular_ep'
import '../../styles/fonts/fonts'

interface PopularEpProps {
  _id: string
  duration: string
  describe?: string
  speakername: string
  speakerprofilepicurl?: string
  title: string
}

const PopularEpSection = () => {
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
          throw new Error('Failed to fetch ')
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
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="bg-gray-900 pt-32">
      <Containerf>
        <div className="flex flex-row justify-between">
          <div className="text-gray-0 font-inter text-7xl text-left">
            Most popular <br />
            Episodes On
            <span className="text-blue-200 font-medium"> Dialectic.</span>
          </div>
          <div className="sm:block hidden text-gray-0 font-quicksand text-lg text-right w-2/5">
            &quot;Explore our most popular episodes on Dialectic, where we dive
            into the hottest debates on open-source innovations, from the ethics
            of software freedom to the future of community-driven
            development.&quot;
          </div>
        </div>
      </Containerf>
      <Containerf>
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 py-32">
          {episodes.map((episode) => (
            <Popular_ep key={episode._id} {...episode} />
          ))}
        </div>
      </Containerf>
    </div>
  )
}

export default PopularEpSection
