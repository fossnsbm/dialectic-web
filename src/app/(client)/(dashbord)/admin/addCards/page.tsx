'use client'
import { useState, useEffect } from 'react'
import { Heading } from '@/components/ui/heading'
import AlertDialogDemo from '@/components/common/alert-dialog-but-most-epiosode'
import Cards from '@/components/common/Episode_cardadmin'
import Containerf from '@/components/common/containerf'
import Popular_ep from '@/components/common/popular_ep-admin'
import bgImage1 from '/public/images/bgImg1.svg'
import bgImage2 from '/public/images/bgImg2.svg'
import bgImage3 from '/public/images/bgImg3.svg'
import bgImage4 from '/public/images/bgImg4.svg'
interface Episode {
  _id: string
  createdAt: string
}
const card1 = {
  backGround: bgImage1.src,
  speakerInfo: 'Speaker Name 3 | x minutes',
  episodeTitle: 'Episode 1',
  heading: 'Lorem ipsum dolor sit amet consectetur adipiscing',
}
const card2 = {
  backGround: bgImage2.src,
  speakerInfo: 'Speaker Name 3 | x minutes',
  episodeTitle: 'Episode 2',
  heading: 'Lorem ipsum dolor sit amet consectetur adipiscing',
}

const card3 = {
  backGround: bgImage3.src,
  speakerInfo: 'Speaker Name 3 | x minutes',
  episodeTitle: 'Episode 3',
  heading: 'Lorem ipsum dolor sit amet consectetur adipiscing',
}

const card4 = {
  backGround: bgImage4.src,
  speakerInfo: 'Speaker Name 4 | x minutes',
  episodeTitle: 'Episode 4',
  heading: 'Lorem ipsum dolor sit amet consectetur adipiscing',
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
        <Heading
          title={`Ensure need to keep maximum cards 0${4}`}
          description={''}
        />
        <AlertDialogDemo />
      </div>
      <Containerf>
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 py-32">
          <Popular_ep {...card1} />
          <Popular_ep {...card2} />
          <Popular_ep {...card3} />
          <Popular_ep {...card4} />
        </div>
      </Containerf>
    </>
  )
}

export default UserClient
