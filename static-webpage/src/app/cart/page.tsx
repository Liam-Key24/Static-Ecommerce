'use client'

import Image from "next/image"
import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/footer'
import { useCartStore } from '../context/CartStore'

export default function CartPage() {
  const { items, updateQuantity, removeItem, addToCart } = useCartStore()
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <Navbar />
      <div className="pt-24 px-4 pb-12 w-full grid grid-cols-2">
        <div className="w-1/2 min-h-[40em] md:min-h-[100em] mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>
          {items.length === 0 ? (
            <p className="text-zinc-400">Your cart is empty <a href="/shop" className="italic underline hover:opacity-85">Keep Shopping</a></p>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.id} className="grid md:grid-cols-[150px,1fr] gap-6 p-4 bg-zinc-900 rounded-lg">
                  <div className="relative aspect-[3/4] rounded overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-white font-medium">{item.name}</h3>
                        <p className="text-zinc-400">Size: {item.size}</p>
                      </div>
                      <p className="text-white">${item.price}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          }}
                          className="h-8 w-8 text-white hover:bg-zinc-700 rounded"
                        >
                          -
                        </button>
                        <span className="text-white w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 text-white hover:bg-zinc-700 rounded"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-400 hover:text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          )}
        </div>
        <div id="order-summary" className="bg-gray-300 text-black w-full h-[30em] p-3 rounded-md relative">
            <h2 className="text-3xl font-serif mb-4">Order Summary</h2>
            <div className="space-y-2 py-4 px-10 bg-gray-200 w-full min-h-[70%] h-auto ">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <p>{item.name}</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="flex justify-between mt-4 border-t-2 border-black/30">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="w-full border-zinc-800 h-20 flex justify-center items-center">
                <button 
                  className="w-1/2 bg-black text-yellow-400 hover:bg-yellow-300 py-3 rounded"
                  onClick={() => alert('Proceeding to checkout!')}
                >
                  Proceed to Checkout
                </button>
              </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
