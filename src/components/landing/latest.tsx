import React from 'react'
import { Button, Container } from '../common'
import '../../styles/fonts/fonts'
import Image from 'next/image'
import latest_img from '/public/images/Latest Episode Section Image.png'
import { FaRegCirclePlay } from 'react-icons/fa6'

const latest = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-40 gap-10 m-5 sm:my-20">
          <Image
            alt={'latest image'}
            src={latest_img}
            width={450}
            height={500}
          />
          <div className="felx flex-col justify-between items-center">
            <div className="flex items-center gap-5 bg-gray-50 rounded-full w-80 ">
              <div>
                <Button variant={'blue'} size={'rounded'}>
                  Episode 1
                </Button>
              </div>
              <div>Speaker Name | 33 mins</div>
            </div>
            <br />
            <h1 className="text-5xl md:text-6xl font-medium tracking-wide">
              Start career path as
              <br /> a Product Designer <br />
              in Startup
            </h1>
            <br />
            <h1 className="text-4l text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              est leo. Nulla fermentum ultrices ullamcorper. Nam eleifend mi sed
              sem convallis condimentum.
            </h1>
            <br />
            <div className="flex items-center sm:justify-start justify-center">
              <Button className="flex items-center gap-3 justify-center">
                <div>Listen Now</div>
                <FaRegCirclePlay className="" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default latest
