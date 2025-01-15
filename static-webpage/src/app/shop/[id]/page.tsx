import { SiteLayout } from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    name: "Utility Jacket",
    price: 189.99,
    image: "/placeholder.svg?height=800&width=600",
    description: "A versatile jacket designed for both style and function. Features multiple pockets and durable construction.",
    sizes: ["S", "M", "L", "XL"]
  },
  // ... other products
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))
  
  if (!product) {
    notFound()
  }

  return (
    <SiteLayout>
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
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white">{product.name}</h1>
                <p className="text-2xl text-white">${product.price}</p>
                <p className="text-zinc-400">{product.description}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-zinc-400 block mb-2">Size</label>
                  <div className="grid grid-cols-4 gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant="outline"
                        className="text-white hover:text-black hover:bg-white"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button 
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-300"
                  onClick={() => alert('Added to cart!')}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

