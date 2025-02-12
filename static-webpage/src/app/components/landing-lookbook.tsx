'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function LandingLookbooklayout() {
return (
<section className="container mx-auto p-4 md:p-6 min-h-screen">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        <div className='col-span-2 md:col-span-1 flex flex-col justify-center items-center p-6'>
            <h1 className="text-7xl font-bold mb-4">'22</h1>
            <Link href="/shop">
                <button className="bg-yellow-300 text-black px-6 py-2 rounded hover:bg-yellow-400 transition-colors">
                    Shop Now
                </button>
            </Link>
        </div>
        <Image src="/img-content/brian-lundquist-kIdngZOEnnQ-unsplash.jpg" 
        alt="Landing lookbook image" 
        width={600} 
        height={800}
        className="object-cover rounded aspect-[3/4] w-full h-full" 
        />
        <Image src="/img-content/jay-argame-N-t9hvcMTK0-unsplash.jpg" 
        alt="Landing lookbook image" 
        width={600} 
        height={800}
        className="object-cover rounded aspect-[3/4] w-full h-full" 
        />
        <Image src="/img-content/philip-martin-D6MmPV6SHqg-unsplash.jpg" 
        alt="Landing lookbook image" 
        width={600} 
        height={800}
        className="object-cover rounded aspect-[3/4] w-full h-full" 
        />
        <Image src="/img-content/stow-kelly-h8MOrKq3dQw-unsplash.jpg" 
        alt="Landing lookbook image" 
        width={600} 
        height={800}
        className="object-cover rounded aspect-[3/4] w-full h-full" 
        />
        <Image src="/img-content/stow-kelly-uDfmJ8tijCY-unsplash.jpg" 
        alt="Landing lookbook image" 
        width={600} 
        height={800}
        className="object-cover rounded aspect-[3/4] w-full h-full" 
        />
    </div>
</section>
)
}