'use client'

import Image from "next/image"
import { useCart } from '../context/CartContext'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/footer'

export default function CartPage() {
  const { cartItems, updateQuantity, removeItem } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <Navbar />
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
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
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
              <div className="pt-4 border-t border-zinc-800">
                <div className="flex justify-between mb-4">
                  <span className="text-zinc-400">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <button 
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-300 py-3 rounded"
                  onClick={() => alert('Proceeding to checkout!')}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
