import Link from "next/link"
import { Instagram } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-black text-white px-4 py-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <nav className="flex flex-wrap gap-4 text-sm text-zinc-400">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Shipping
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Returns
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Static. All rights reserved.
          </p>
          <Link 
            href="https://instagram.com" 
            className="text-zinc-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

