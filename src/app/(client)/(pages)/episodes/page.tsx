'use client'
import React from 'react'
import Containerf from 'components/common/containerf'
import Searchq from 'components/common/layout/search'
// import Episodecard from 'components/common/Episode_card'
import { Button } from '@mui/material'
import { Container, Savedbar } from 'components/common'
import Navigation from 'components/common/layout/navigation'
import { useEffect, useState } from 'react'
import Episode_card from '@/components/common/Episode_card'
interface Episode {
  _id: string
  createdAt: string // Assuming you have a createdAt property in your episode object
}

const Allepisode = () => {
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
        const limitedEpisodes = sortedEpisodes.slice(0, 10)

        setEpisodes(limitedEpisodes)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching episodes:', error)
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [])

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <span className="loader"></span>
      </div>
    )
  }

  return (
    <div>
      <Navigation />
      <Container>
        <div className="w-full flex md:flex-row flex-col items-center justify-between ">
          <div className=" flex text-[64px]  ">All Episode</div>

          <div className="flex  ">
            <Searchq />
          </div>
        </div>
        <div>
          {episodes.map((episode) => (
            <Containerf key={episode._id}>
              <Episode_card id={episode._id} />
            </Containerf>
          ))}
        </div>

        <div className="w-full flex justify-center items-center py-40">
          <Button variant="outlined">View More</Button>
        </div>
      </Container>
    </div>
  )
}

export default Allepisode
