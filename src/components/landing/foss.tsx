import React from 'react'
import Image from 'next/image'
import FOSS_Pictures from '/public/images/FOSS pictures.png'
import { Button } from 'components/common/buttons'
import { Containerf } from 'components/common/'
import Link from 'next/link'
const foss = () => {
  return (
    <Containerf>
      <div className="flex items-center justify-between md:flex-row flex-col lg:gap-40 gap-8 py-10">
        <div className="flex flex-1 flex-col md:items-start items-center whitespace-pre-line justify-evenly gap-10">
          <div className="flex items-center justify-center sm:text-base text-xs gap-6 bg-gray-200 rounded-full pr-4">
            <div>
              <Button variant={'blue'} size={'rounded'}>
                Who are we ?
              </Button>
            </div>
            <div className="">We are the FOSS Community of NSBM</div>
          </div>
          <div className="sm:text-6xl text-3xl font-semibold">
            Sri Lanka&apos;s first ever {'\n'} University based {'\n'} FOSS
            Community
          </div>
          <div>
          Welcome to Sri Lanka's first university-based FOSS Community! This initiative empowers students to explore Free and Open Source Software, develop skills, and collaborate on projects, fostering innovation and a vibrant open-source culture on campus.
          </div>
          <div>
            <Link href="https://www.fossnsbm.org/" target="_blank" rel="noopener noreferrer">
              <Button>Keep in Touch with us</Button>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src={'/images/foss/fosspictures.png'}
            width={500}
            height={500}
            alt="image"
          ></Image>
        </div>
      </div>
    </Containerf>
  )
}

export default foss
