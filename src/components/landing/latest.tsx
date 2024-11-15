'use client'
import React, { useEffect, useState } from 'react'
import { Button, Container } from '../common'
import '../../styles/fonts/fonts'
import Image from 'next/image'
import latest_img from '/public/images/Latest Episode Section Image.png'
import { FaRegCirclePlay } from 'react-icons/fa6'

import {
  BluetoothConnected,
  PlaneIcon,
  PlayCircle,
  PlayIcon,
  Share,
} from 'lucide-react'
import { Dialog } from '@headlessui/react'
const Latest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const youtubeLinkplay = `https://www.youtube.com/embed/Wfm_5ahpbR4`
  return (
    <div>
      <Container>
        <div className="flex md:flex-row flex-col  gap-5 py-10  ">
          <div className="flex flex-1 md:w-auto  md:justify-start justify-center ">
            <Image
              alt={'latest image'}
              src={'/images/ruwn.jpg'}
              width={400}
              height={400}
            />
          </div>

          <div className="flex md:flex-1 flex-col gap-5 md:items-start items-center md:text-start text-center w-auto ">
            <div className="flex items-center gap-5 bg-gray-50 rounded-full w-80 ">
              <div>
                <Button variant={'blue'} size={'rounded'}>
                  Episode 1
                </Button>
              </div>
              <div>Ruwan Ranganath | 58 mins</div>
            </div>

            <div className="flex flex-col gap-2 ">
              <div className=" text-4xl md:text-6xl font-medium ">
                Dive into FOSS
              </div>
              <div className=" text-lg text-gray-400 text-balance">
                &quot;In this episode of Dive into FOSS, we explore the impact
                of open-source software, the history of FOSS NSBM, and feature
                insights from developers on how FOSS drives innovation and
                community. Tune in to learn how you can start
                contributing!&quot;{' '}
              </div>
            </div>

            <div className="flex items-center sm:justify-start justify-center">
              <Button className="gap-2" onClick={openModal}>
                <div>Listen Now</div>
                <div>
                  <PlayCircle />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Container>
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

export default Latest
