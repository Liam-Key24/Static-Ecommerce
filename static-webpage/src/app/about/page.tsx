
import Image from "next/image"
import React, { } from "react"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full p-6">
          <h2 className="text-white text-2xl md:text-3xl leading-relaxed">
            Passionate about art, and art is passionate to make. motto i just made filling this silly paragrah with words. 
          </h2>
        </div>
        <div className="w-full p-6 flex justify-center">
          <Image
            width={400}
            height={300}
            src="/img-content/stow-kelly-uDfmJ8tijCY-unsplash.jpg"
            alt="about"
            className="rounded-lg"
          />
        </div>
      </div>
      <Footer />
    </>

  )
}

