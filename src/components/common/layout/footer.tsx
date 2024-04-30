import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLinks from '@/data/nav/nav'
import Container from '../container'
import footerlinks from '@/data/footer/footer'
import { Year } from '@/helpers'

export default function Footer() {
  return (
    <div>
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center py-10 font-inter gap-16">
          <div className="flex flex-col justify-center sm:items-start items-center gap-4 flex-1">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={'/images/logo.png'}
                width={200}
                height={200}
                alt="balck logo"
              ></Image>
            </div>
            <div className="sm:w-2/3 sm:text-left text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              est leo. Nulla fermentum ultrices ullamcorper.
            </div>
          </div>

          <div className="flex flex-col flex-1 items-center justify-center gap-4">
            {NavLinks.map((item) => (
              <div key={item.id}>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-600 sm:text-xl rounded md:p-0 hover:text-blue-400 hover:font-bold hover:animate-pulse"
                  href={item.link}
                >
                  {item.name}{' '}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col flex-1 sm:items-end items-center justify-center gap-4">
            <div>
              <Image
                src={'/images/logos/FOSSLogo.svg'}
                width={50}
                height={50}
                alt="foss_logo"
              ></Image>
            </div>
            <div>Follow us on</div>
            <div className="flex  gap-5 ">
              {footerlinks.map((item) => (
                <Link href={item.link} key={item.id}>
                  <button className="hover:animate-bounce  ">
                    <item.icon strokeWidth={1} />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full bg-gray-900 sm:h-11 ">
        <Container>
          <div className="flex sm:flex-row flex-col text-gray-200 text-sm py-2 sm:justify-between items-center gap-2 ">
            <div className=" flex "> &copy; {Year} FOSS COMMUNITY OF NSBM</div>
            <div className="flex ">Dialectic By FOSS COMMUNITY OF NSBM </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
