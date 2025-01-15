import Link from "next/link"
import { ShoppingCart } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-black/95 backdrop-blur-sm">
      <nav className="flex items-center space-x-6 text-sm">
        <Link 
          href="/shop" 
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Shop Static
        </Link>
        <Link 
          href="/#lookbook" 
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Lookbook
        </Link>
        <Link 
          href="/about" 
          className="text-zinc-400 hover:text-white transition-colors"
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </nav>
      
      <Link href="/" className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl font-bold tracking-tighter text-white">STATIC</h1>
      </Link>

      <Link 
        href="/cart"
        className="text-zinc-400 hover:text-white transition-colors"
      >
        <ShoppingCart className="h-6 w-6" />
        <span className="sr-only">Cart</span>
      </Link>
    </header>
  )
}

