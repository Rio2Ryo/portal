'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s2" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 flex justify-center mb-8">
        <img src="/htu.png" alt="HTU" className="w-full max-w-60 md:max-w-96 h-auto" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                Burn Scars
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u5.jpg"
                    alt="Burn Scars treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-lg md:text-2xl font-bold text-center">
                    MAZEKOMU Confidence into ointment
                  </h3>
                  <div className="text-white space-y-2">
                    <p className="font-semibold">【Recommended amount when using with lotion or cream】</p>
                    <p>①Ointment/Cream - as needed</p>
                    <p>②Confidence  1/10 stick</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u6 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                Hair Thinning
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u6.jpg"
                    alt="Hair Thinning treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-lg md:text-2xl font-bold text-center">
                    MAZEKOMU Confidence into shampoo or hair tonic
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 傷用のセクション */}
                    <div className="flex-1 text-white space-y-2">
                      <p className="font-semibold">【Recommended amount if adding to a shampoo bottle】</p>
                      <p>①Shampoo - 100ml</p>
                      <p>②Confidence  1 stick</p>
                    </div>

                    {/* ニキビ用のセクション */}
                    <div className="flex-1 text-white space-y-2">
                      <p className="font-semibold">【Recommended amount if mixing into a hair tonic】</p>
                      <p>①Hair tonic - 100ml</p>
                      <p>②Confidence  1 stick</p>
                    </div>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2">
                    <p className="text-sm">*Shake well before use, as Confidence may settle</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u7 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                Face Shine Control
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u7.jpg"
                    alt="Face Shine Control treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-lg md:text-2xl font-bold text-center">
                    SURIKOMU Confidence directly
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2">
                      <p className="font-semibold">【Recommended amount for direct application】</p>
                      <p>Confidence - as needed</p>
                    </div>

                    {/* フェイスパウダーと混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2">
                      <p className="font-semibold">【Recommended amount if mixing with face powder】</p>
                      <p>①Face powder - 100mg</p>
                      <p>②Confidence  1 stick</p>
                    </div>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2">
                    <p className="text-sm">*After finishing skincare and makeup, use a puff or brush to gently apply the product to areas where shine is a concern.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u8 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                Freckles and Redness
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u8.jpg"
                    alt="Freckles and Redness treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-lg md:text-2xl font-bold text-center">
                    SURIKOMU Confidence directly
                  </h3>
                  <div className="text-white space-y-2">
                    <p className="font-semibold">【Recommended amount】</p>
                    <p>①Confidence - as needed</p>
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