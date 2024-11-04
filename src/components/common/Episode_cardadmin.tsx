'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Containerf from 'components/common/containerf'
import Man from '/images/man.png'
import { Button } from 'components/common/buttons'
import { Dialog } from '@headlessui/react'
import {
  BluetoothConnected,
  PlaneIcon,
  PlayCircle,
  PlayIcon,
  Share,
} from 'lucide-react'
import { Alert } from '@mui/material'
import AlertDialog from '@/components/common/alert-dialog-idit'
interface EpisodeData {
  speakerImage: string
  speakerName: string
  speakerPosition: string
  episodeTitle: string
  episodeDate: string
  episodeDuration: string
  episodeDescription: string
  youtubecode: string
}
interface CardsProps {
  id: string
}

const Episode_card: React.FC<CardsProps> = ({ id }) => {
  const [episodeData, setEpisodeData] = useState<EpisodeData | null>(null)
  const _id = id
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const youtubeLinkplay = `https://www.youtube.com/embed/${episodeData?.youtubecode}`
  const shareEpisode = async () => {
    const youtubeLink = `https://www.youtube.com/watch?v=${episodeData?.youtubecode}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this YouTube video!',
          url: youtubeLink,
        })
        console.log('Successfully shared!')
      } catch (error) {
        console.error('Error sharing:', error)
      }
    } else {
      const fallbackMessage = `Check out this YouTube video: ${youtubeLink}`
      navigator.clipboard.writeText(fallbackMessage).then(() => {
        alert('Link copied to clipboard! You can paste it to share.')
      })
    }
  }

  const haddledelete = async () => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this item?',
    )

    if (!isConfirmed) {
      return
    }

    const response = await fetch('/api/episode/crud/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    })

    const data = await response.json()
    if (data) {
      window.location.reload()
    }

    console.log(data)
  }

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
          speakerImage: data.speakerprofilepicurl || '/images/man.png',
          speakerName: data.speakername || 'John Doe',
          speakerPosition: data.speakerposition || 'Software Engineer',
          episodeTitle: data.title || 'Episode Title',
          episodeDate: data.createdAt || '2022-01-01',
          episodeDuration: data.duration || '1:00:00',
          episodeDescription:
            data.describe || 'This is a description of the episode.',
          youtubecode: data.youtubecode,
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
            src={episodeData.speakerImage}
            alt="cff"
            className="border rounded-lg"
            width={200}
            height={200}
          />
        </div>
        <div>{episodeData.speakerName}</div>{' '}
        <div>{episodeData.speakerPosition}</div>{' '}
      </div>
      <div className="flex flex-col sm:items-start justify-center sm:gap-4 gap-4 max-w-auto text-justify">
        <div className="font-semibold text-xl">{episodeData.episodeTitle}</div>
        <div className="text-gray-900">
          Episode | {episodeData.episodeDate} | {episodeData.episodeDuration}min{' '}
        </div>
        <div className="sm:block hidden">{episodeData.episodeDescription}</div>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-10 gap-4">
          <Button className="gap-2" onClick={openModal}>
            <div>Listen Now</div>
            <div>
              <PlayCircle />
            </div>
          </Button>
          <Button
            onClick={shareEpisode}
            variant="white-outline-2"
            className="gap-2"
          >
            <div>Share</div>
            <Share />
          </Button>

          <AlertDialog id={id} />

          <Button
            variant={'secondary'}
            className="gap-2"
            onClick={haddledelete}
          >
            <div>Delete</div>
          </Button>
        </div>
      </div>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-65 "
      >
        <Dialog.Panel className="relative w-full max-w-4xl p-4 ">
          <Button
            className="absolute top-2 right-2 text-gray-500 z-10"
            onClick={closeModal}
          >
            ✖
          </Button>

          <div className="relative w-full " style={{ paddingTop: '86.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={youtubeLinkplay}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

export default Episode_card
