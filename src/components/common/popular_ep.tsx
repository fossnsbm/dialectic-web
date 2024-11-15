import React from 'react'
import { Button } from '.'
import Image from 'next/image'

import playIcon from '/public/images/play.svg'
import saveIcon from '/public/images/save.svg'

import '../../styles/fonts/fonts'

interface PopularEpProps {
  duration: string
  describe?: string // Make this optional
  speakername: string
  speakerprofilepicurl?: string
  title: string
}

const Popular_ep: React.FC<PopularEpProps> = ({
  duration,
  describe,
  speakername,
  speakerprofilepicurl,
  title,
}) => {
  const fallbackImage = '/images/bgImg1.svg'
  const speakerImageSrc = speakerprofilepicurl || fallbackImage
  const isDataMissing = describe === '' || speakername === '' || title === ''

  return (
    <div className={`rounded-[20px] shadow-lg `}>
      <div className="relative rounded-[20px] overflow-hidden">
        <div
          className={`w-full h-[300px]  flex items-center justify-center rounded-[20px]`}
        >
          {!isDataMissing ? (
            <Image
              src={speakerImageSrc}
              alt={`${speakername}'s profile picture`}
              width={300}
              height={300}
              className="rounded-[20px] object-cover"
            />
          ) : (
            <Image
              src={speakerImageSrc}
              alt={`${speakername}'s profile picture`}
              width={300}
              height={300}
              className="rounded-[20px] object-cover blur-md"
            />
          )}
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
            <div className="text-gray-0 mt-auto font-quicksand">{describe}</div>
          ) : (
            <div className="text-gray-0 mt-auto font-quicksand text-3xl font-bold">
              Details Coming Soon...
            </div>
          )}

          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-0 font-inter text-lg">{title}</div>
            <div>
              <Button
                className="bg-gray"
                variant="black"
                size="icon"
                aria-label="Play Episode"
                disabled={isDataMissing}
              >
                {!isDataMissing ? (
                  <Image
                    src={playIcon}
                    alt="Play Icon"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src={saveIcon}
                    alt="Save Icon"
                    width={24}
                    height={24}
                  />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular_ep
