import {
  FOSS_section,
  Hero,
  Latest_ep,
  Logos,
  Newsletter_section,
  // Popular_ep_sec,
} from '@/components/landing'
import EpisodeSection from '@/components/landing/Episode_section'

export default function Homepage() {
  return (
    <div>
      <Hero />
      {/* <Popular_ep_sec /> */}
      <Latest_ep />
      <EpisodeSection />
      <FOSS_section />
      <Logos />
      <Newsletter_section />
    </div>
  )
}
