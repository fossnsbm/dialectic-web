import React from 'react'
import { Button, Container } from '.'
import Image from 'next/image'

import bg from '/public/images/bgimg1.svg'

import playIcon from '/public/images/play.svg'
import saveIcon from '/public/images/save.png'

import '../../styles/fonts/fonts'

const Popular_ep = (props: any) => {
  const { backGround, speakerInfo, episodeTitle, heading } = props

  return (
    <div className="">
      <div className="rounded-[20px] ">
        <div className="relative ">
          <img src={backGround} alt="Background" />
          <div className="absolute w-full h-full  flex flex-col justify-between -bottom-0 rounded-[20px] border !border-gray-0 to-transparent p-4">
            <div className="flex justify-end">
              <Button
                variant={'black'}
                size={'rounded'}
                className="bg-gray outline outline-1 text-gray-0 backdrop-blur-lg h-7 px-2 font-inter linear"
              >
                {speakerInfo}
              </Button>
            </div>
            <div className="text-gray-0  mt-auto font-quicksand">{heading}</div>
            <div className="flex flex-row justify-between ">
              <div className="text-gray-0 mt-2 font-inter">{episodeTitle}</div>
              <div className="">
                <Button className="bg-gray" variant={'black'} size={'icon'}>
                  <Image src={playIcon} alt="icon"></Image>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular_ep
