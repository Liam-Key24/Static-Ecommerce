'use client'

import React from 'react'
import Link from 'next/link'

export function Footer () {
  return (
    <footer className="w-full text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center text-center">
          {/* Company Info */}
          <div>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <ul className="space-y-2">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} STATIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}