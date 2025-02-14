'use client'


//import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"
//import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import {Navbar} from "../components/Navbar"
import {Footer} from "../components/footer"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! We\'ll get back to you soon.')
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <>
    <Navbar/>
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-xl mx-auto p-4 md:p-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-zinc-400 text-center">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: 'name', label: 'Name', type: 'text' },
              { id: 'email', label: 'Email', type: 'email' }
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm text-zinc-400 mb-2">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  value={formState[id as keyof typeof formState]}
                  onChange={e => setFormState(s => ({ ...s, [id]: e.target.value }))}
                  required
                  className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                required
                className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white min-h-[150px] focus:outline-none focus:border-yellow-400 transition-colors resize-y"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition-colors mt-6"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

