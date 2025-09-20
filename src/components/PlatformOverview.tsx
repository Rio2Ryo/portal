'use client'

import Image from 'next/image'

export default function PlatformOverview() {
  return (
    <section id="platform-overview" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-green-900/20 to-black rounded-2xl p-8">
          <Image
            src="/platform-overview.png"
            alt="Mother Vegetables Project Overview"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}