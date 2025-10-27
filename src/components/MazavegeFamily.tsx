'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Products Container - 95% width, max-width 1200px, green border */}
        <div className="mx-auto border border-green-700 rounded-lg p-3 bg-black/40" style={{ width: '95%', maxWidth: '1200px' }}>

          {/* Title */}
          <h2 className="text-center text-green-600 text-4xl md:text-5xl font-bold mb-2">
            Products
          </h2>
          <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-6 opacity-80 mb-12"></div>

          <ScrollAnimationWrapper disabled={true}>
            {/* Grid: 3 cards horizontal on PC, vertical on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Achieve Product Card */}
              <div className="border border-green-700 rounded-lg p-1 lg:p-4 bg-black/60 w-[95%] mx-auto lg:w-auto h-[140px] lg:h-auto">
                {/* Mobile: horizontal layout */}
                <div className="flex flex-row gap-2 h-full lg:hidden">
                  <div className="w-[70px] flex-shrink-0">
                    <img src="/achieve-product.jpg" alt="Achieve Product" className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-row gap-2">
                      <div className="w-[45%]">
                        <h3 className="text-green-600 text-[11px] font-bold leading-tight">Achieve</h3>
                        <p className="text-green-600 text-[8px] leading-tight">for Body</p>
                      </div>
                      <div className="w-[55%]">
                        <div className="text-white text-[7px] flex items-start leading-[1.2]">
                          <span className="text-green-600 mr-0.5 flex-shrink-0 text-[8px]">✓</span>
                          <span>{t({ JP: "健康な腸をサポート、全身の細胞再生", EN: "Supports a healthy gut, Regeneration of cells throughout the body." })}</span>
                        </div>
                        <div className="text-white text-[7px] flex items-start leading-[1.2] mt-0.5">
                          <span className="text-green-600 mr-0.5 flex-shrink-0 text-[8px]">✓</span>
                          <span>{t({ JP: "便秘を和らげ、睡眠を改善し、減量を補助", EN: "Helps relieve constipation, improve sleep, and aid weight management." })}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <div className="w-[45%]">
                        <p className="text-red-500 font-bold text-[8px] leading-tight">TORIUMO</p>
                        <p className="text-white text-[7px] leading-[1.2]">{t({ JP: "48種類の栄養素を一度に", EN: "48 different nutrients at once." })}</p>
                      </div>
                      <div className="w-[55%]">
                        <h4 className="text-green-600 font-bold text-[8px] leading-tight">{t({ JP: "使い方", EN: "How to use" })}</h4>
                        <div className="text-white text-[7px] flex items-start leading-[1.2]">
                          <span className="text-green-600 mr-0.5 flex-shrink-0 text-[8px]">✓</span>
                          <span>{t({ JP: "TORIUMO 1カプセルを飲み物または食事に混ぜて", EN: "Simply, TORIUMO one capsule into your drink or meal." })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PC: vertical layout */}
                <div className="hidden lg:flex flex-col gap-4">
                  <div className="w-full">
                    <img src="/achieve-product.jpg" alt="Achieve Product" className="w-full h-auto" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-green-600 text-2xl font-bold">Achieve</h3>
                    <p className="text-green-600 text-sm">for Body</p>
                    <div className="space-y-2">
                      <p className="text-red-500 font-bold">TORIUMO</p>
                      <p className="text-white text-sm">{t({ JP: "48種類の栄養素を一度に", EN: "48 different nutrients at once." })}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-white text-sm flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{t({ JP: "健康な腸をサポート、全身の細胞再生", EN: "Supports a healthy gut, Regeneration of cells throughout the body." })}</span>
                      </div>
                      <div className="text-white text-sm flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{t({ JP: "便秘を和らげ、睡眠を改善し、減量を補助", EN: "Helps relieve constipation, improve sleep, and aid weight management." })}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-green-600 font-bold mb-2">{t({ JP: "使い方", EN: "How to use" })}</h4>
                      <div className="text-white text-sm flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{t({ JP: "TORIUMO 1カプセルを飲み物または食事に混ぜて", EN: "Simply, TORIUMO one capsule into your drink or meal." })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forever Product Card */}
              <div className="border border-green-700 rounded-lg p-1 lg:p-4 bg-black/60 w-[95%] mx-auto lg:w-auto h-[140px] lg:h-auto">
                {/* Mobile: horizontal layout */}
                <div className="flex flex-row gap-2 h-full lg:hidden">
                  <div className="w-[70px] flex-shrink-0">
                    <img src="/forever-product.jpg" alt="Forever Product" className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-row gap-2">
                      <div className="w-[45%]">
                        <h3 className="text-green-600 text-[11px] font-bold leading-tight">Forever</h3>
                        <p className="text-green-600 text-[8px] leading-tight">for Pet</p>
                      </div>
                      <div className="w-[55%]">
                        <div className="text-white text-[7px] flex items-start leading-[1.2]">
                          <span className="text-green-600 mr-0.5 flex-shrink-0 text-[8px]">✓</span>
                          <span>{t({ JP: "涙やけの軽減と腸の健康をサポート", EN: "Supports tear-stain reduction and gut health." })}</span>
                        </div>
                        <div className="text-white text-[7px] flex items-start leading-[1.2] mt-0.5">
                          <span className="text-green-600 mr-0.5 flex-shrink-0 text-[8px]">✓</span>
                          <span>{t({ JP: "体臭を軽減し、無駄吠えや食欲減退を改善", EN: "Helps reduce body and waste odors; boosts appetite." })}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <div className="w-[45%]">
                        <p className="text-red-500 font-bold text-[8px] leading-tight">MAZEKOMU</p>
                        <p className="text-white text-[7px] leading-[1.2]">{t({ JP: "ペットの健康寿命を延ばす", EN: "to extend your pet's healthy life." })}</p>
                      </div>
                      <div className="w-[55%]">
                        <h4 className="text-green-600 font-bold text-[8px] leading-tight">{t({ JP: "使い方", EN: "How to use" })}</h4>
                        <div className="text-white text-[7px] flex items-start leading-[1.2]">
                          <span className="text-green-600 mr-0.5 flex-shrink-0 text-[8px]">✓</span>
                          <span>{t({ JP: "MAZEKOMU 1スティックをペットの食べ物に混ぜて", EN: "Simply, MAZEKOMU one capsule into your pet's food." })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PC: vertical layout */}
                <div className="hidden lg:flex flex-col gap-4">
                  <div className="w-full">
                    <img src="/forever-product.jpg" alt="Forever Product" className="w-full h-auto" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-green-600 text-2xl font-bold">Forever</h3>
                    <p className="text-green-600 text-sm">for Pet</p>
                    <div className="space-y-2">
                      <p className="text-red-500 font-bold">MAZEKOMU</p>
                      <p className="text-white text-sm">{t({ JP: "ペットの健康寿命を延ばす", EN: "to extend your pet's healthy life." })}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-white text-sm flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{t({ JP: "涙やけの軽減と腸の健康をサポート", EN: "Supports tear-stain reduction and gut health." })}</span>
                      </div>
                      <div className="text-white text-sm flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{t({ JP: "体臭を軽減し、無駄吠えや食欲減退を改善", EN: "Helps reduce body and waste odors; boosts appetite." })}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-green-600 font-bold mb-2">{t({ JP: "使い方", EN: "How to use" })}</h4>
                      <div className="text-white text-sm flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{t({ JP: "MAZEKOMU 1スティックをペットの食べ物に混ぜて", EN: "Simply, MAZEKOMU one capsule into your pet's food." })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidence Product Card */}
              <div className="border border-green-700 rounded-lg p-1 lg:p-4 bg-black/60 w-[95%] mx-auto lg:w-auto h-[140px] lg:h-auto">
                {/* Mobile: horizontal layout */}
                <div className="flex flex-row gap-2 h-full lg:hidden">
                  <div className="w-[70px] flex-shrink-0">
                    <img src="/confidence-product.jpg" alt="Confidence Product" className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-row gap-2">
                      <div className="w-[45%]">
                        <h3 className="text-green-600 text-[11px] font-bold leading-tight">Confidence</h3>
                        <p className="text-green-600 text-[8px] leading-tight">For All Skin</p>
                      </div>
                      <div className="w-[55%]">
                        <div className="text-white text-[7px] flex items-start leading-[1.2]">
                          <span className="text-green-600 mr-0.5 flex-shrink-0 text-[8px]">✓</span>
                          <span>{t({ JP: "強力な抗老化効果", EN: "Powerful anti-aging benefits." })}</span>
                        </div>
                        <div className="text-white text-[7px] flex items-start leading-[1.2] mt-0.5">
                          <span className="text-green-600 mr-0.5 flex-shrink-0 text-[8px]">✓</span>
                          <span>{t({ JP: "シミ、ニキビ、臭い、肌のダメージを改善", EN: "Helps improve dark spots, acne, odor, and skin damage." })}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <div className="w-[45%]">
                        <p className="text-red-500 font-bold text-[8px] leading-tight">SURIKOMU , MAZEKOMU</p>
                        <p className="text-white text-[7px] leading-[1.2]">{t({ JP: "肌の治癒効果", EN: "Skin Healing Effect" })}</p>
                      </div>
                      <div className="w-[55%]">
                        <h4 className="text-green-600 font-bold text-[8px] leading-tight">{t({ JP: "使い方", EN: "How to use" })}</h4>
                        <div className="text-white text-[7px] flex items-start leading-[1.2]">
                          <span className="text-green-600 mr-0.5 flex-shrink-0 text-[8px]">✓</span>
                          <span>{t({ JP: "SURIKOMUを直接、またはMAZEKOMUを現在の化粧品に混ぜて", EN: "SURIKOMU directly or MAZEKOMU into your current cosmetics." })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PC: vertical layout */}
                <div className="hidden lg:flex flex-col gap-4">
                  <div className="w-full">
                    <img src="/confidence-product.jpg" alt="Confidence Product" className="w-full h-auto" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-green-600 text-2xl font-bold">Confidence</h3>
                    <p className="text-green-600 text-sm">For All Skin</p>
                    <div className="space-y-2">
                      <p className="text-red-500 font-bold">SURIKOMU , MAZEKOMU</p>
                      <p className="text-white text-sm">{t({ JP: "肌の治癒効果", EN: "Skin Healing Effect" })}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-white text-sm flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{t({ JP: "強力な抗老化効果", EN: "Powerful anti-aging benefits." })}</span>
                      </div>
                      <div className="text-white text-sm flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{t({ JP: "シミ、ニキビ、臭い、肌のダメージを改善", EN: "Helps improve dark spots, acne, odor, and skin damage." })}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-green-600 font-bold mb-2">{t({ JP: "使い方", EN: "How to use" })}</h4>
                      <div className="text-white text-sm flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{t({ JP: "SURIKOMUを直接、またはMAZEKOMUを現在の化粧品に混ぜて", EN: "SURIKOMU directly or MAZEKOMU into your current cosmetics." })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </ScrollAnimationWrapper>

          {/* Bottom Definitions */}
          <div className="mt-12 text-center space-y-2">
            <p className="text-white text-sm">
              <span className="text-red-500 font-bold">TORIUMO</span>
              {t({ JP: " 日本語で「取り込む」を意味し、", EN: " means of having in Japanese as " })}
              <span className="text-white">{t({ JP: "「取り込む」", EN: "「取り込む」" })}</span>
            </p>
            <p className="text-white text-sm">
              <span className="text-red-500 font-bold">MAZEKOMU</span>
              {t({ JP: " 日本語で「混ぜ込む」を意味し、", EN: " means of mixing in Japanese as " })}
              <span className="text-white">{t({ JP: "「混ぜ込む」", EN: "「混ぜ込む」" })}</span>
            </p>
            <p className="text-white text-sm">
              <span className="text-red-500 font-bold">SURIKOMU</span>
              {t({ JP: " 日本語で「擦り込む」を意味し、", EN: " means of rubbing in Japanese as " })}
              <span className="text-white">{t({ JP: "「擦り込む」", EN: "「擦り込む」" })}</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
