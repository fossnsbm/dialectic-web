'use client'
import React from 'react'
import NavLinks from '@/data/nav/nav'
import Link from 'next/link'

interface NavLinks {
  link: string
  name: string
}

interface MenuOverlayProps {
  links: NavLinks[]
  closeMenu: () => void
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, closeMenu }) => {
  return (
    <div className="flex flex-col py-4 items-center">
      {NavLinks.map((item) => (
        <div key={item.id}>
          <Link
            className="block py-2 pl-3 pr-4 text-gray-600 sm:text-xl rounded md:p-0 hover:text-blue-400 hover:font-bold hover:animate-pulse"
            href={item.link}
            onClick={closeMenu}
          >
            {item.name}{' '}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MenuOverlay
