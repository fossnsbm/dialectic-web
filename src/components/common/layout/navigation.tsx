'use client'
import React, { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Button from 'components/common/buttons/primary'
import Image from 'next/image'

import Container from '../container'
import NavLinks from '@/data/nav/nav'
import Link from 'next/link'

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [windowScrolled, setWindowScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setWindowScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Container>
        <nav
          className={
            windowScrolled
              ? 'fixed top-0 left-0 right-0 z-10 bg-gray-0/20 backdrop-blur-lg !py-3 px-4 xl:px-20 md:px-10 sm:px-10'
              : 'top-0 left-0 right-0 z-10 bg-gray-0 !my-3 md'
          }
        >
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center justify-center gap-6">
              <Image
                src={'/images/logo.png'}
                width={100}
                height={100}
                alt="Your Logo"
                className="transition-all duration-300 ease-in-out"
              />
              <Image
                src={'/images/x.png'}
                width={20}
                height={20}
                alt="Your Logo"
                className="transition-all duration-300 ease-in-out"
              />
              <Image
                src={'/images/FOSS_Logo.svg'}
                width={50}
                height={50}
                alt="Your Logo"
                className="transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="hidden menu md:block md:w-auto">
              <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8 font-semibold">
                {NavLinks.map((item) => (
                  <div key={item.name}>
                    <Link
                      className="block py-2 pl-3 pr-4 text-gray-600 sm:text-xl rounded md:p-0 hover:text-blue-400 hover:font-bold hover:animate-pulse"
                      href={item.link}
                    >
                      {item.name}{' '}
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
            <div>
              <Button
                className=" md:block hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300"
                variant={'black-outline'}
              >
                Check In
              </Button>
            </div>
            <div className="block mobile-menu md:hidden">
              {!navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen(true)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white-0"
                >
                  <Bars3Icon className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white-0"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {navbarOpen ? (
            <MenuOverlay
              links={NavLinks}
              closeMenu={() => setNavbarOpen(false)}
            />
          ) : null}
        </nav>
      </Container>
    </div>
  )
}

export default Navigation
