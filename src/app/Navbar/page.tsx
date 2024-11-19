"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className="bg-transparent p-4">
        <div className="flex justify-between items-start">
        
          <br />
          <br />

          {/* Hamburger Icon (Mobile) */}
          <button
            className="lg:hidden text-white"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} space-x-6 mt-4 lg:mt-0`}>
          <Link
            className="text-white font-serif rounded-lg hover:bg-black hover:text-white shadow-md shadow-black px-4 py-2"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white font-serif rounded-lg hover:bg-black hover:text-white shadow-md shadow-black px-4 py-2"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="text-white font-serif rounded-lg hover:bg-black hover:text-white shadow-md shadow-black px-4 py-2"
            href="/reviews"
          >
            Reviews
          </Link>
          <Link
            className="text-white font-serif rounded-lg hover:bg-black hover:text-white shadow-md shadow-black px-4 py-2"
            href="/placeorder"
          >
            Check out
          </Link>
        </div>
      </nav>
    </div>
  )
}

