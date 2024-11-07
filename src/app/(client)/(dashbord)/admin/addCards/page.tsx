'use client'
import { useState, useEffect } from 'react'
import { Heading } from '@/components/ui/heading'
import AlertDialogDemo from '@/components/common/alert-dialog-but-most-epiosode'
import { Containerf } from '@/components/common'
import Cards from '@/components/common/Episode_cardadmin'

interface Episode {
  _id: string
  createdAt: string
}

const UserClient = () => {
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

        setEpisodes(sortedEpisodes)
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
    <>
      <div className="flex items-start justify-between">
        <Heading title={`Total Cards: 0${episodes.length}`} description={''} />
        <AlertDialogDemo />
      </div>
      <div className="pt-7">
        {episodes.map((episode) => (
          <Containerf key={episode._id}>
            <Cards id={episode._id} />
          </Containerf>
        ))}
      </div>
    </>
  )
}

export default UserClient
