'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToDetails = () => {
    const element = document.getElementById('project-overview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToToken = () => {
    const element = document.getElementById('token')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadWhitepaper = () => {
    const link = document.createElement('a')
    link.href = '/0912_whitepaper_ja.pdf'
    link.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Earth Regeneration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 transition-all duration-1500 pt-40 md:pt-48 lg:pt-56">
        {/* Title Section - Single Component */}
        <div className="mb-12">
          <div
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 2px 4px rgba(34, 197, 94, 0.2))',
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <div style={{ letterSpacing: '0.02em', marginBottom: '-0.1em' }}>MOTHER VEGETABLES</div>
              <div style={{ letterSpacing: '0.15em' }}>PROJECT</div>
            </h1>
          </div>
          <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-6 opacity-80"></div>
        </div>

        {/* Subtitle */}
        <div className="mt-6 mb-12">
          <p className="text-lg md:text-xl text-white mb-2 font-light">
            地球最初の生命体による
          </p>
          <p className="text-xl md:text-2xl text-green-400 font-semibold">
            地球再生プロジェクト
          </p>
        </div>

        {/* Description - Not in Box */}
        <div className="max-w-4xl mx-auto mb-12 mt-16 space-y-4">
          <p className="text-lg md:text-xl text-white leading-relaxed">
            35億年前の地球最初の生命体
          </p>
          <p className="text-xl md:text-2xl text-green-400 leading-relaxed font-semibold">
            「マザーベジタブル」
          </p>
          <p className="text-lg md:text-xl text-white leading-relaxed mt-8">
            を全世界に供給する
          </p>
          <p className="text-lg md:text-xl text-white leading-relaxed mt-12">
            それを生成する
          </p>
          <p className="text-xl md:text-2xl text-green-400 leading-relaxed font-semibold">
            「マザーベジタブルファクトリー」
          </p>
          <p className="text-lg md:text-xl text-white leading-relaxed mt-4">
            はCO2を削減しながら<br />
            地球と生命の生きる環境を<br />
            改善していくことを目的とする
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 max-w-xl mx-auto mb-16">
          {/* Token Info Button */}
          <button
            onClick={scrollToToken}
            className="group relative overflow-hidden bg-gradient-to-r from-green-500 via-green-600 to-green-500 p-[2px] rounded-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/30"
          >
            <div className="relative bg-black/90 rounded-lg px-8 py-4 transition-all duration-300 group-hover:bg-black/70">
              <div className="flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <span className="text-white font-bold text-lg tracking-wide">トークン情報</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
          </button>

          {/* Whitepaper Button */}
          <button
            onClick={downloadWhitepaper}
            className="group relative overflow-hidden bg-gradient-to-r from-green-500 via-green-600 to-green-500 p-[2px] rounded-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/30"
          >
            <div className="relative bg-black/90 rounded-lg px-8 py-4 transition-all duration-300 group-hover:bg-black/70">
              <div className="flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                <span className="text-white font-bold text-lg tracking-wide">ホワイトペーパー</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
          </button>
        </div>

      </div>
    </section>
  )
}