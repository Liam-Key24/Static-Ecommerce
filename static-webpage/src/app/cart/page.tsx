'use client'

import { SiteLayout } from "@/components/site-layout"
//import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

interface CartItem {
  id: number
  name: string
  price: number
  size: string
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Utility Jacket",
      price: 189.99,
      size: "M",
      quantity: 1,
      image: "/placeholder.svg?height=200&width=150"
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <SiteLayout>
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-zinc-400">Your cart is empty</p>
          ) : (
            <div className="space-y-8">
              {cartItems.map((item) => (
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
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8"
                        >
                          -
                        </button>
                        <span className="text-white w-8 text-center">{item.quantity}</span>
                        <button
                          //variant="outline"
                          //size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          +
                        </button>
                      </div>
                      <button
                        //variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-400 hover:text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-zinc-800">
                <div className="flex justify-between mb-4">
                  <span className="text-zinc-400">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <button 
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-300"
                  onClick={() => alert('Proceeding to checkout!')}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </SiteLayout>
  )
}

