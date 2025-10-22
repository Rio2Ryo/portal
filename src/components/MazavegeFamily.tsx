'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  const drinks = [
    { topTitle: 'マザベジピュアウォーター', bottomTitle: 'Mazavege Pure Water', image: 'd1.jpg' },
    { topTitle: 'マザベジビール', bottomTitle: 'Mazavege Beer', image: 'd2.jpg' },
    { topTitle: 'マザベジサワー', bottomTitle: 'Mazavege Sour', image: 'd3.jpg' },
    { topTitle: 'マザベジ梅酒', bottomTitle: 'Mazavege Plum Wine', image: 'd4.jpg' },
    { topTitle: 'マザベジハイボール', bottomTitle: 'Mazavege Highball', image: 'd5.jpg' },
    { topTitle: 'マザベジ日本酒', bottomTitle: 'Mazavege Sake', image: 'd6.jpg' },
    { topTitle: 'マザベジワイン', bottomTitle: 'Mazavege Wine', image: 'd7.jpg' },
    { topTitle: 'マザベジジュース各種', bottomTitle: 'Mazavege Juice - Blend', image: 'd8.jpg' },
  ]

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s1" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-20 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 text-left">
                Dark spots / Wrinkles
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <img
                    src="/u1.jpg"
                    alt="Dark spots and wrinkles treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-3/5 space-y-4">
                  <h3 className="text-green-400 text-xl md:text-2xl font-bold text-center">
                    SURIKOMU Confidence directly
                  </h3>
                  <div className="text-white space-y-2">
                    <p className="font-semibold">【Recommended amount】</p>
                    <p>Confidence - as needed</p>
                    <p className="mt-4">*Apply Confidence directly to affected areas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-20 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 text-left">
                Dark spots / Wrinkles
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <img
                    src="/u1.jpg"
                    alt="Dark spots and wrinkles treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-3/5 space-y-4">
                  <h3 className="text-green-400 text-xl md:text-2xl font-bold text-center">
                    SURIKOMU Confidence directly
                  </h3>
                  <div className="text-white space-y-2">
                    <p className="font-semibold">【Recommended amount】</p>
                    <p>Confidence - as needed</p>
                    <p className="mt-4">*Apply Confidence directly to affected areas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-20 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 text-left">
                Dark spots / Wrinkles
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <img
                    src="/u1.jpg"
                    alt="Dark spots and wrinkles treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-3/5 space-y-4">
                  <h3 className="text-green-400 text-xl md:text-2xl font-bold text-center">
                    SURIKOMU Confidence directly
                  </h3>
                  <div className="text-white space-y-2">
                    <p className="font-semibold">【Recommended amount】</p>
                    <p>Confidence - as needed</p>
                    <p className="mt-4">*Apply Confidence directly to affected areas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-20 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 text-left">
                Dark spots / Wrinkles
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <img
                    src="/u1.jpg"
                    alt="Dark spots and wrinkles treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-3/5 space-y-4">
                  <h3 className="text-green-400 text-xl md:text-2xl font-bold text-center">
                    SURIKOMU Confidence directly
                  </h3>
                  <div className="text-white space-y-2">
                    <p className="font-semibold">【Recommended amount】</p>
                    <p>Confidence - as needed</p>
                    <p className="mt-4">*Apply Confidence directly to affected areas.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
          {/* ロゴ画像 */}
          <div className="flex justify-center mt-12">
            <img src="/mazavege_logo_midori.png" alt="Mazavege Logo" className="h-16 w-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}