import React from 'react'
import Containerf from 'components/common/containerf'

import DevLab from '/public/images/logos/DevLab.svg'
import OWASP from '/public/images/logos/OWASP.svg'
import DevOps from '/public/images/logos/DevOps.svg'
import Mozilla from '/public/images/logos/Mozilla.svg'
import FOSS_Logo_4 from '/public/images/logos/FOSSLogo.svg'
import WIF from '/public/images/logos/WIF.svg'
import Devoke from '/public/images/logos/Devoke.svg'
import Crowdsource from '/public/images/logos/Crowdsource.svg'
import Image from 'next/image'
import { Container } from '../common'

const Brand = () => {
  const images = [
    DevLab,
    OWASP,
    DevOps,
    Mozilla,
    FOSS_Logo_4,
    WIF,
    Devoke,
    Crowdsource,
  ]
  return (
    <Container>
      <div className="flex justify-between  items-center lg:flex-row flex-col py-10  gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="hover:grayscale transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Image src={image} alt={`Image ${index}`}></Image>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Brand
