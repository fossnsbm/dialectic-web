import React from 'react'
import Containerf from 'components/common/containerf'
import Searchq from 'components/common/layout/search'
// import Episodecard from 'components/common/Episode_card'
import { Button } from '@mui/material'
import { Container, Savedbar } from 'components/common'
import Navigation from 'components/common/layout/navigation'

type Props = {}

const Allepisode = (props: Props) => {
  return (
    <div>
      <Container>
        <div className="w-full flex md:flex-row flex-col items-center justify-between ">
          <div className=" flex text-[64px]  ">All Episode</div>

          <div className="flex  ">
            <Searchq />
          </div>
        </div>

        <div className="w-full flex justify-center items-center py-40">
          <Button variant="outlined">View More</Button>
        </div>
      </Container>
    </div>
  )
}

export default Allepisode
