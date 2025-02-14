
'use client'
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/footer"
import { products } from "../data/products"

export default function ShopPage() {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredProducts = products.filter(product => {
    return (!selectedSize || product.size.includes(selectedSize)) &&
           (!selectedColor || product.color === selectedColor) &&
           (!selectedMaterial || product.material === selectedMaterial) &&
           (!selectedCategory || product.category === selectedCategory)
  })

  const uniqueColors = [...new Set(products.map(p => p.color))]
  const uniqueMaterials = [...new Set(products.map(p => p.material))]
  const uniqueCategories = [...new Set(products.map(p => p.category))]
  const sizes = ["S", "M", "L", "XL"]

  return (
    <>
      <Navbar />
      <div className="my-10">
        <div className="max-w-7xl mx-auto px-4">
          <section className="w-full h-80 flex flex-col justify-center">
            <h1 className="md:text-8xl font-bold text-white mb-8">Shop Collection</h1>
            <div className="inline-flex gap-4 flex-wrap">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="bg-black text-white border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
              >
                <option value="">Size</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>

              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="bg-black text-white border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
              >
                <option value="">Color</option>
                {uniqueColors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>

              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="bg-black text-white border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
              >
                <option value="">Material</option>
                {uniqueMaterials.map(material => (
                  <option key={material} value={material}>{material}</option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-black text-white border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
              >
                <option value="">Category</option>
                {uniqueCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

            <button
              onClick={() => {
                setSelectedSize('')
                setSelectedColor('')
                setSelectedMaterial('')
                setSelectedCategory('')
              }}
              className="bg-yellow-400 text-black border border-zinc-700 rounded-md px-4 py-2 hover:border-yellow-400 transition-colors"
            >
              Reset Filters
            </button>
            </div>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/shop/${product.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-medium">{product.name}</h3>
                  <p className="text-zinc-400">{product.category}</p>
                  <p className="text-white">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

