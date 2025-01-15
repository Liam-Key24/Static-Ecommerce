import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center">
        <h2 className="text-[12rem] font-bold leading-none tracking-tighter">'22</h2>
        <button className="bg-yellow-400 text-black hover:bg-yellow-300">
          <Link href="/shop">Shop Now</Link>
        </button>
      </div>
    </section>
  )
}

