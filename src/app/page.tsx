import React from 'react'
import { Footer, Navigation, Savedbar } from 'components/common/layout/'
import {
  Hero,
  Popular_ep_sec,
  Latest_ep,
  // Episode_section,
  FOSS_section,
  Logos,
  Newsletter_section,
} from 'components/landing'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      {/* <Savedbar /> */}
      <Navigation />
      <Hero />
      <Popular_ep_sec />
      <Latest_ep />
      {/* <Episode_section /> */}
      <FOSS_section />
      <Logos />
      <Newsletter_section />
      <Footer />
    </div>
  )
}

export default Home
