import Image from "next/image"

export function LookbookGrid() {
  return (
    <section id="lookbook" className="bg-black text-white px-4 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="row-span-2">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Model wearing khaki outfit"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1000"
              alt="Action shot on rocks"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>

        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Detail shot of clothing"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>

        <div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Lifestyle fashion shot"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            "We're in a moment where sustainable fashion that believes in blending simple styling with a focus on function that works in real life. As well as staying true to the brand's roots, while introducing pieces and fits that tell a story."
          </p>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1000"
              alt="Outdoor fashion shot"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

