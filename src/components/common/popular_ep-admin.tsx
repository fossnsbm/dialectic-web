'use client'
import React, { useState } from 'react'
import { Button } from '.'
import Image from 'next/image'
import playIcon from '/public/images/play.svg'
import saveIcon from '/public/images/save.svg'

import '../../styles/fonts/fonts'
import { Dialog } from '@headlessui/react'
import AlertDialog from '@/components/common/alert-dialog-idit'

interface PopularEpProps {
  _id: string
  duration: string
  describe?: string // Make this optional
  speakername: string
  speakerprofilepicurl?: string
  title: string
}

const Popular_ep: React.FC<PopularEpProps> = ({
  _id,
  duration,
  describe,
  speakername,
  speakerprofilepicurl,
  title,
}) => {
  const fallbackImage = '/images/bgImg1.svg'
  const speakerImageSrc = speakerprofilepicurl || fallbackImage
  const isDataMissing = describe === '' || speakername === '' || title === ''
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false) // State to toggle editing mode

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const youtubeLinkplay = `https://www.youtube.com/embed/Wfm_5ahpbR4`

  const id = { _id }

  return (
    <>
      <div className="rounded-[20px] shadow-lg">
        <div className="relative rounded-[20px] overflow-hidden group z-0">
          <div
            className={`w-full h-[300px] flex items-center justify-center rounded-[20px]`}
          >
            {!isDataMissing ? (
              <Image
                src={speakerImageSrc}
                alt={`${speakername}'s profile picture`}
                width={300}
                height={300}
                className="rounded-[20px] group-hover:blur-md transition-all duration-300"
              />
            ) : (
              <Image
                src={speakerImageSrc}
                alt={`${speakername}'s profile picture`}
                width={300}
                height={300}
                className="rounded-[20px] object-cover blur-md  transition-all duration-300"
              />
            )}
            {/* Play Button - appears on hover */}
            <div className="absolute inset-0  items-center justify-center group-hover:block hidden z-50">
              {!isDataMissing ? (
                <div className="flex w-full h-full justify-center items-center">
                  <Image
                    src={playIcon}
                    alt="Play Icon"
                    width={50}
                    height={50}
                    className="text-white cursor-pointer"
                    onClick={openModal}
                  />
                </div>
              ) : null}
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black to-transparent rounded-[20px]">
            <div className="flex justify-end">
              <Button
                variant="black"
                size="rounded"
                className="bg-gray outline outline-1 text-gray-0 backdrop-blur-lg h-7 px-2 font-inter linear"
              >
                {speakername} | {duration} minutes
              </Button>
            </div>

            {!isDataMissing ? (
              <div className="text-gray-0 mt-auto font-quicksand">
                {describe}
              </div>
            ) : (
              <div className="text-gray-0 mt-auto font-quicksand text-3xl font-bold">
                Details Coming Soon...
              </div>
            )}

            <div className="flex justify-between items-center mt-4">
              <div className="text-gray-0 font-inter text-lg">{title}</div>
            </div>

            {/* AlertDialog component with id passed */}
            <div className="z-50">
              <AlertDialog id={_id} /> {/* Passing the _id to AlertDialog */}
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Modal */}
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-65"
      >
        <Dialog.Panel className="relative w-full max-w-4xl p-4">
          <Button
            className="absolute top-2 right-2 text-gray-500 z-10"
            onClick={closeModal}
          >
            ✖
          </Button>

          <div className="relative w-full" style={{ paddingTop: '86.25%' }}>
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
    </>
  )
}

export default Popular_ep
