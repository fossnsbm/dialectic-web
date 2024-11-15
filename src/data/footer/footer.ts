import { github } from '@/constants'
import { IFooterlinks } from '@/types/footer'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react'

const footerlinks: IFooterlinks[] = [
  {
    id: 1,
    icon: LinkedinIcon,
    link: 'https://www.linkedin.com/groups/13780475/',
  },
  {
    id: 2,
    icon: InstagramIcon,
    link: 'https://www.instagram.com/fossnsbm/',
  },
  {
    id: 3,
    icon: FacebookIcon,
    link: 'https://www.facebook.com/foss.nsbm',
  },

  {
    id: 4,
    icon: YoutubeIcon,
    link: 'https://www.youtube.com/@fosscommunitynsbm8708',
  },
]
export default footerlinks
