import React from 'react'
import Containerf from 'components/common/containerf'
import Searchq from 'components/common/layout/search'
// import Episodecard from 'components/common/Episode_card'
import { Button } from '@mui/material'
import Navigation from 'components/common/layout/navigation'
import { Container } from '@/components/common'
type Props = {}

const Favorites = (props: Props) => {
  return (
    <div>
      <Container>
        <div className="w-full flex md:flex-row flex-col items-center justify-between ">
          <div className=" flex text-[64px]  ">Favorites</div>

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

export default Favorites
