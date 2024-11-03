'use client'
import { useState, useEffect } from 'react'
import { Heading } from '@/components/ui/heading'
import AlertDialogDemo from '@/components/common/alert-dialog-but'
import { Containerf } from '@/components/common'
import Cards from '@/components/common/Episode_cardadmin'

interface Episode {
  _id: string
}

const UserClient = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([])

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
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
        setEpisodes(data)
      } catch (error) {
        console.error('Error fetching episodes:', error)
      }
    }

    fetchEpisodes()
  }, [])

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`Total Episodes`} description={''} />
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
