import React from 'react'
import { Footer, Navigation, Savedbar } from 'components/common/layout/'

import EpisodeSection from '@/components/landing/Episode_section'
import Homepage from './(client)/(pages)/home/page'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Savedbar />
      <Navigation />
      <Homepage />
      <Footer />
    </div>
  )
}

export default Home
