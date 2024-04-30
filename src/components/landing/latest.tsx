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
        <div className="flex md:flex-row flex-col  gap-5 py-10  ">
          <div className="flex flex-1 md:w-auto  md:justify-start justify-center ">
            <Image
              alt={'latest image'}
              src={'/images/last_epi/Latest_Episode.png'}
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
              <div>Speaker Name | 33 mins</div>
            </div>

            <div className="flex flex-col gap-2 ">
              <div className=" text-4xl md:text-6xl font-medium ">
                Start career path as a Product Designer in Startup
              </div>
              <div className=" text-lg text-gray-400 text-balance">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et est leo. Nulla fermentum ultrices ullamcorper.
              </div>
            </div>

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
