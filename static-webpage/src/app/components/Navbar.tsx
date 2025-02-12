'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (  
    <nav className='relative w-full'>
      <div className='flex justify-between px-6 py-4 w-full'>
        <div className='inline-flex'>
        <h1 className='text-xl font-bold mr-4'>STATIC</h1>

        <div className='hidden md:flex items-center space-x-6'>
          <Link href='/shop' className='hover:text-gray-600 transition-colors'>
            <p>Shop</p>
          </Link>
          <Link href='/about' className='hover:text-gray-600 transition-colors'>
            <p>About</p>
          </Link>
          <Link href='/contact' className='hover:text-gray-600 transition-colors'>
            <p>Contact</p>
          </Link>
          <Link href='/contact' className='hover:text-gray-600 transition-colors'>
          {/*add logo*/}
            <p>Lemonade</p>
          </Link>
        </div>
        </div>

        <div className='flex items-center space-x-4'>
          <Link href='/cart'>
            <ShoppingCart className='w-6 h-6 cursor-pointer hover:text-gray-600 transition-colors'/>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden'
          >
            <Menu className='w-6 h-6 cursor-pointer hover:text-gray-600 transition-colors'/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full md:hidden bg-black z-50 overflow-hidden transition-[max-height] duration-700 ease-linear ${isMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className='flex flex-col py-4'>
          <Link href='/shop' className='px-6 py-2'>
            <p>Shop</p>
          </Link>
          <Link href='/about' className='px-6 py-2'>
            <p>About</p>
          </Link>
          <Link href='/contact' className='px-6 py-2'>
            <p>Contact</p>
          </Link>
          <Link href='/contact' className='px-6 py-2'>
          {/*add logo*/}
            <p>Lemonade</p>
          </Link>
        </div>
      </div>
    </nav>
  )   
}
