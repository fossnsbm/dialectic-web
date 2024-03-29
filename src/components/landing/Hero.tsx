import React from 'react'
import { Button, Container, Containerf } from '../common'
import '../../styles/fonts/fonts'

// images
import Image from 'next/image'
import spotify from '/public/images/Spotify.svg'
import apple_podcast from '/public/images/Apple_podcasts.svg'
import overcast from '/public/images/Overcast.svg'
import rss from '/public/images/RSS.svg'
import listners from '/public/images/listners.svg'

// hero images
import tl from '/public/images/tl.png'
import tr from '/public/images/tr.png'
import bl from '/public/images/bl.png'
import br from '/public/images/br.png'

const hero = () => {
  return (
    <Container>
      <div className="flex lg:flex-row flex-col gap-4 items-center justify-center mt-4 mb-4 text-gray-900 text-lg font-medium pt-4  py-10">
        <div className="sm:w-[60%] w-full flex flex-col gap-8 md:gap-10 md:items-start text-center items-center md:text-justify ">
          <div className="flex items-center justify-center gap-6 bg-gray-50 rounded-full pr-4">
            <div>
              <Button variant={'blue'} size={'rounded'}>
                New
              </Button>
            </div>
            <div className="font-medium text-gray-800 mb-[3px] text-base pr-3">
              Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className="text-4xl font-semibold md:text-6xl md:whitespace-pre-line font-inter md:font-medium md:text-justify md:leading-[4.5rem]">
            Exploring Tomorrow&apos;s{'\n'}
            Tech Innovations, {'\n'}
            One Byte at a Time.
          </div>
          <div className="text-md md:w-[80%] leading-7 font-quicksand ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
            est leo. Nulla fermentum ultrices ullamcorper. Nam eleifend mi sed
            sem convallis condimentum.
          </div>
          <div>
            <Button variant={'blue'} size={'lg'}>
              Browse Podcast &gt;
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center">
              <p>Listen on:</p>
            </div>
            <div className="flex items-center gap-4 justify-center animate">
              <a href="">
                <Image src={spotify} alt="icon"></Image>
              </a>
              <a href="">
                <Image src={apple_podcast} alt="icon"></Image>
              </a>
              <a href="">
                <Image src={overcast} alt="icon"></Image>
              </a>
              <a href="">
                <Image src={rss} alt="icon"></Image>
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-[40%] p-4  flex items-center flex-col justify-center gap-10">
          <div className="flex items-center justify-center">
            <div className=" w-full bg-center bg-cover relative grid grid-cols-2 grid-rows-2 gap-4">
              <div className="rounded-full bg-blue-800 h-24 w-24  absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-0 text-center z-2 whitespace-pre-line ">
                20+ {'\n'} Podcasts
              </div>
              <Image src={tl} alt="" className="col-1 row-1 p-0 m-0"></Image>
              <Image src={tr} alt="" className="col-2 row-1 p-0 m-0"></Image>
              <Image src={bl} alt="" className="col-1 row-2 p-0 m-0"></Image>
              <Image src={br} alt="" className="col-2 row-2 p-0 m-0"></Image>
            </div>
          </div>
          <div className="w-full flex text-sm items-center justify-center gap-6">
            <div className=" flex flex-1 h-full relative items-center justify-end">
              <Image
                src={listners}
                objectFit="contain"
                objectPosition="center"
                alt="icon"
              ></Image>
            </div>
            <div className="flex-1">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default hero
