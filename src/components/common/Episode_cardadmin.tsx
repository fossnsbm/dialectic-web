'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Containerf from 'components/common/containerf'
import Man from '/images/man.png'
import { Button } from 'components/common/buttons'
import {
  BluetoothConnected,
  PlaneIcon,
  PlayCircle,
  PlayIcon,
  Share,
} from 'lucide-react'

interface EpisodeData {
  speakerImage: string
  speakerName: string
  speakerPosition: string
  episodeTitle: string
  episodeDate: string
  episodeDuration: string
  episodeDescription: string
}
interface CardsProps {
  id: string
}

const Episode_card: React.FC<CardsProps> = ({ id }) => {
  const [episodeData, setEpisodeData] = useState<EpisodeData | null>(null)
  const _id = id

  useEffect(() => {
    const fetchEpisodeData = async () => {
      try {
        const response = await fetch('/api/episode/fetchepisode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ _id }),
        })

        const data = await response.json()

        setEpisodeData({
          speakerImage: data.speakerprofilepicurl || '/images/man.png', // Use the default image
          speakerName: data.speakerName || 'John Doe', // Use the default name
          speakerPosition: data.speakerposition || 'Software Engineer', // Use the default position
          episodeTitle: data.title || 'Episode Title', // Use the default title
          episodeDate: data.episodeDate || '2022-01-01',
          episodeDuration: data.duration || '1:00:00',
          episodeDescription:
            data.describe || 'This is a description of the episode.', // Use the default description
        })
      } catch (error) {
        console.error('Failed to fetch episode data:', error)
      }
    }

    fetchEpisodeData()
  }, [_id])

  if (!episodeData) {
    return
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 p-8 border-2 rounded-xl bg-blue-200 border-white-0 text-white-0 max-w-auto">
      <div className="flex flex-col items-center justify-between gap-2 sm:w-[40%]">
        <div>
          <Image
            src={episodeData.speakerImage} // Use the fetched image
            alt="cff"
            className="border rounded-lg"
            width={200}
            height={200}
          />
        </div>
        <div>{episodeData.speakerName}</div>{' '}
        {/* Render the actual speaker name */}
        <div>{episodeData.speakerPosition}</div>{' '}
        {/* Render the actual position */}
      </div>
      <div className="flex flex-col sm:items-start justify-center sm:gap-4 gap-4 max-w-auto text-justify">
        <div className="font-semibold text-xl">
          {episodeData.episodeTitle} {/* Render the actual episode title */}
        </div>
        <div className="text-gray-900">
          Episode | {episodeData.episodeDate} | {episodeData.episodeDuration}{' '}
          {/* Render actual data */}
        </div>
        <div className="sm:block hidden">
          {episodeData.episodeDescription} {/* Render the actual description */}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-10 gap-4">
          <Button className="gap-2">
            <div>Listen Now</div>
            <div>
              <PlayCircle />
            </div>
          </Button>
          <Button variant={'white-outline-2'} className="gap-2">
            <div>Share</div>
            <div>
              <Share />
            </div>
          </Button>
          <Button variant={'white-outline-2'} className="gap-2">
            <div>Save</div>
            <div>
              <PlayIcon />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Episode_card
