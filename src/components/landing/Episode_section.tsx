import React from 'react'
import Containerf from '@/components/common/containerf'
import { Button } from '../common'
// import Episodecard from '@/components/common/Episode_card'

type Props = {}

const EpisodeSection = (props: Props) => {
  // const episodeCards = Array.from({ length: 6 }, (_, index) => (
  //   <Episodecard key={index}></Episodecard>
  // ))

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 gap-10 p-4">
      <Containerf>
        <div className="flex flex-col gap-8 items-center justify-center sm:">
          <div className="flex flex-col sm:flex-row items-center  sm:justify-between gap-8">
            <div className="flex text-7xl font-semibold text-gray-0">
              All Episodes
            </div>
            <div className="flex">
              <Button variant={'white-outline'}>Show all Episodes</Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            {/* {episodeCards} */}
          </div>
        </div>
      </Containerf>
    </div>
  )
}

export default EpisodeSection
