'use client'
import React from 'react'
import Containerf from '@/components/common/containerf'
import { Button } from '../common'
import Episode_card from '../common/Episode_card'
import { useState, useEffect } from 'react'

interface Episode {
  _id: string
  createdAt: string // Assuming you have a createdAt property in your episode object
}

const EpisodeSection = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/episode/allepisodes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data: Episode[] = await response.json()

        const sortedEpisodes = data.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )

        // Limit the episodes to the first 5
        const limitedEpisodes = sortedEpisodes.slice(0, 5)

        setEpisodes(limitedEpisodes)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching episodes:', error)
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 gap-10 p-4">
      <Containerf>
        <div className="flex flex-col gap-8 items-center justify-center sm:">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8">
            <div className="flex text-7xl font-semibold text-gray-0">
              All Episodes
            </div>
            <div className="flex">
              <Button variant={'white-outline'}>Show all Episodes</Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            {episodes.map((episode) => (
              <Containerf key={episode._id}>
                <Episode_card id={episode._id} />
              </Containerf>
            ))}
          </div>
        </div>
      </Containerf>
    </div>
  )
}

export default EpisodeSection
