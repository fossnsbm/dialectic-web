import React from 'react'
import Containerf from '../common/containerf'
import Popular_ep from '@/components/common/popular_ep'
import bgImage1 from '/public/images/bgImg1.svg'
import bgImage2 from '/public/images/bgImg2.svg'
import bgImage3 from '/public/images/bgImg3.svg'
import bgImage4 from '/public/images/bgImg4.svg'
import '../../styles/fonts/fonts'

type Props = {}

const popular_ep_sec = (props: Props) => {
  const card1 = {
    backGround: bgImage1.src,
    speakerInfo: 'Speaker Name 3 | x minutes',
    episodeTitle: 'Episode 1',
    heading: 'Lorem ipsum dolor sit amet consectetur adipiscing',
  }
  const card2 = {
    backGround: bgImage2.src,
    speakerInfo: 'Speaker Name 3 | x minutes',
    episodeTitle: 'Episode 2',
    heading: 'Lorem ipsum dolor sit amet consectetur adipiscing',
  }

  const card3 = {
    backGround: bgImage3.src,
    speakerInfo: 'Speaker Name 3 | x minutes',
    episodeTitle: 'Episode 3',
    heading: 'Lorem ipsum dolor sit amet consectetur adipiscing',
  }

  const card4 = {
    backGround: bgImage4.src,
    speakerInfo: 'Speaker Name 4 | x minutes',
    episodeTitle: 'Episode 4',
    heading: 'Lorem ipsum dolor sit amet consectetur adipiscing',
  }

  return (
    <div className="bg-gray-900">
      <div className=" pt-32 ">
        <Containerf>
          <div className="flex flex-row justify-between ">
            <div className="text-gray-0 font-inter text-7xl text-left ">
              Most popular <br />
              Episodes On
              <span className="text-blue-200 font-medium"> Dialectic.</span>
            </div>
            <div className="sm:block hidden text-gray-0 font-quicksand text-lg text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Fusce eu arcu sit amet libero facilisis pulvinar ac sed dui.
              <br />
              Curabitur et vulputate lorem.
            </div>
          </div>
        </Containerf>
        <Containerf>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 py-32">
            <Popular_ep {...card1} />
            <Popular_ep {...card2} />
            <Popular_ep {...card3} />
            <Popular_ep {...card4} />
          </div>
        </Containerf>
      </div>
    </div>
  )
}

export default popular_ep_sec
