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
    link: 'https://www.linkedin.com/',
  },
  {
    id: 2,
    icon: InstagramIcon,
    link: 'https://www.linkedin.com/',
  },
  {
    id: 3,
    icon: FacebookIcon,
    link: 'https://www.linkedin.com/',
  },
  {
    id: 4,
    icon: TwitterIcon,
    link: 'https://www.linkedin.com/',
  },
  { id: 5, icon: YoutubeIcon, link: 'https://www.linkedin.com/' },
]
export default footerlinks
