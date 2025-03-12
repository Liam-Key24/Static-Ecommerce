'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu } from "lucide-react"
import { useCartStore } from '../context/cartCount'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const totalQuantity = useCartStore((state) =>
    state.items && state.items.length > 0
      ? state.items.reduce((acc, item) => acc + (item.quantity || 0), 0)
      : 0
  );

  return (  
    <nav className='relative w-full'>
      <div className='flex px-6 py-4 w-full items-center'>
        <div className='w-1/3 hidden md:flex items-center justify-center space-x-6'>
          <Link href='/shop' className='hover:text-yellow-400 hover:-translate-y-1 transition-all duration-300 ease-in-out'>
            <p>Shop</p>
          </Link>
          <Link href='/about' className='hover:text-yellow-400 hover:-translate-y-1 transition-all duration-300 ease-in-out'>
            <p>About</p>
          </Link>
          <Link href='/shop' className='hover:text-yellow-400 hover:-translate-y-1 transition-all duration-300 ease-in-out'>
            <p>Contact</p>
          </Link>
          <Link href='/shop' className='hover:text-pink-500 hover:-translate-y-1 hover:rotate-6 transition-all duration-300 ease-in-out'>
            <p>Lemonade</p>
          </Link>
        </div>
        <div className='w-1/3 flex justify-center'>
          <h1 className='text-4xl font-bold font-serif'>STATIC</h1>
        </div>
        
        <div className='flex items-center justify-center space-x-4 w-1/3'>
          <Link href='/cart'>
          <div className="relative inline-block">
      <ShoppingCart className="w-8 h-8 text-gray-800" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {totalQuantity}
        </span>
      )}
    </div>
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
      <div className={`absolute top-full left-0 w-full md:hidden bg-[#0a0a0a]  z-50 overflow-hidden transition-[max-height] duration-700 ease-linear ${isMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
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
