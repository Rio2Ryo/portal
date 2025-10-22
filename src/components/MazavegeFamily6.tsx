'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s1" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                Dark spots / Wrinkles
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u21.jpg"
                    alt="Dark spots and wrinkles treatment"
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
                    <p>Confidence - as needed</p>
                    <p className="mt-4">*Apply Confidence directly to affected areas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u2 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                Wounds / Acne
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u22.jpg"
                    alt="Wounds and acne treatment"
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
                    {/* 傷用のセクション */}
                    <div className="flex-1 text-white space-y-2">
                      <p className="font-semibold">【Recommended amount for wounds】</p>
                      <p>Confidence - as needed</p>
                    </div>

                    {/* ニキビ用のセクション */}
                    <div className="flex-1 text-white space-y-2">
                      <p className="font-semibold">【Recommended amount for acne】</p>
                      <p>Confidence - as needed</p>
                    </div>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2">
                    <p className="text-sm">*After gently rubbing it in with clean hands, cover the area with gauze or a bandage.</p>
                    <p className="text-sm"><span style={{ color: '#ff6b6b' }}>*If the wound is large, deep,</span> or shows signs of infection, do not apply Confidence alone. To help prevent essential wound fluids from drying out, mix Confidence with an ointment, cream, or water before use.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u23 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                Dark spots / Wrinkles
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u3.jpg"
                    alt="Dark spots and wrinkles treatment"
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
                    <p>Confidence - as needed</p>
                    <p className="mt-4">*Apply Confidence directly to affected areas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                Dark spots / Wrinkles
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u24.jpg"
                    alt="Dark spots and wrinkles treatment"
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