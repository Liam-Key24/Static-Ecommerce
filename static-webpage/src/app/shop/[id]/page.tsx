
'use client'

import Image from "next/image"
import { notFound } from "next/navigation"
import { useState } from "react"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/footer"

import { products } from "../../data/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  if (!product) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8 flex flex-col justify-evenly">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white">{product.name}</h1>
                <p className="text-2xl text-white">${product.price}</p>
                <p className="text-zinc-400">{product.description}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-zinc-400 block mb-2">Size</label>
                  <div className="grid grid-cols-4 gap-2">
                    {product.size.map((size) => (
                      <button
                        key={size}
                        //variant="outline"
                        className={`text-white border border-zinc-700 rounded px-4 py-2 ${selectedSize === size ? 'bg-gray-100 text-black' : 'hover:text-black hover:bg-gray-100'}`}
                        onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex w-full justify-center">
<div className="flex items-center space-x-4 mb-4">
  <div className="flex items-center border border-zinc-700 rounded">
    <button 
      className="px-3 py-1 text-white hover:bg-zinc-700"
      onClick={() => setQuantity(Math.max(1, quantity - 1))}
    >
      -
    </button>
    <span className="px-3 text-white">{quantity}</span>
    <button 
      className="px-3 py-1 text-white hover:bg-zinc-700"
      onClick={() => setQuantity(quantity + 1)}
    >
      +
    </button>
  </div>
                <button 
                  className="w-1/2 rounded p-4 bg-yellow-400 text-black hover:bg-yellow-300 "
                  onClick={() => alert('Added to cart!')}
                >
                  Add to Cart
                </button>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

