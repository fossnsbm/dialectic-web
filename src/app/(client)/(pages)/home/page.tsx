import Episode_card from '@/components/common/Episode_card'
import {
  FOSS_section,
  Hero,
  Latest_ep,
  Logos,
  Newsletter_section,
  // Popular_ep_sec,
} from '@/components/landing'
import EpisodeSection from '@/components/landing/Episode_section'
import Popular_ep_sec from '@/components/landing/popular_epi_sec'

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Popular_ep_sec />
      <Latest_ep />
      <EpisodeSection />
      <FOSS_section />
      <Episode_card />
      <Logos />
      <Newsletter_section />
    </div>
  )
}
