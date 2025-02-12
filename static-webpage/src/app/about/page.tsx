import { SiteLayout } from "@/components/site-layout"
import Image from "next/image"

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">About Static</h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Static is a contemporary fashion brand that combines minimalist design with functional elements. 
              Our pieces are crafted for those who appreciate both form and function in their wardrobe.
            </p>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="About Static"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              <p className="text-zinc-400">
                We believe in creating timeless pieces that last, both in style and durability. 
                Our commitment to sustainable practices and ethical manufacturing sets us apart.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Our Process</h2>
              <p className="text-zinc-400">
                Each piece is thoughtfully designed and rigorously tested to ensure it meets our high standards 
                of quality and functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

