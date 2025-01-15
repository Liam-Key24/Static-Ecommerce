'use client'

import { SiteLayout } from "@/components/site-layout"
//import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"
//import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

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
    <SiteLayout>
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            <p className="text-zinc-400">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-zinc-400">
                Name
              </label>
              <input
                id="name"
                value={formState.name}
                onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                required
                className="bg-zinc-900 border-zinc-800 text-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-zinc-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                required
                className="bg-zinc-900 border-zinc-800 text-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                required
                className="bg-zinc-900 border-zinc-800 text-white min-h-[150px]"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-yellow-400 text-black hover:bg-yellow-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SiteLayout>
  )
}

