import React from 'react'
import Containerf from 'components/common/containerf'
import Searchq from 'components/common/layout/search'
// import Episodecard from 'components/common/Episode_card'
import { Button } from '@mui/material'
import Navigation from 'components/common/layout/navigation'
type Props = {}

const Favorites = (props: Props) => {
  return (
    <div>
      <Containerf>
        <Navigation />
      </Containerf>
      <Containerf>
        <div className="w-full pb-36">
          <div className=" text-[64px] float-left ">Favorites</div>

          <div className=" float-right p-9 justify-center">
            <Searchq />
          </div>
        </div>
      </Containerf>

      {/* <Containerf> */}
      {/* <Episodecard />
        <Episodecard />
        <Episodecard />
        <Episodecard /> */}
      {/* </Containerf> */}

      <Containerf>
        <div className="w-full flex justify-center items-center  pt-24 pb-20">
          <Button variant="outlined">View More</Button>
        </div>
      </Containerf>
    </div>
  )
}

export default Favorites
