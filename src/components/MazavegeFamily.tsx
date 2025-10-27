'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t } = useLanguage()

  return (
    <section id="mazavege-family" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Products Container - 95% width, max-width 1200px, green border */}
        <div className="mx-auto border border-green-700 rounded-lg lg:p-4 bg-black/40" style={{ width: '95%', maxWidth: '1200px' }}>

          {/* Title */}
          <h2 className="text-center text-green-600 text-lg md:text-5xl font-bold mb-2 mt-5">
            Products
          </h2>
          <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-2 lg:mt-6 opacity-80 mb-4 lg:mb-12"></div>

          <ScrollAnimationWrapper disabled={true}>
            {/* Grid: 3 cards horizontal on PC, vertical on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">

              {/* Achieve Product Card */}
              <div className="border border-green-700 rounded-lg p-3 lg:p-6 bg-black/60 w-[95%] max-w-[290px] md:max-w-[95%] mx-auto lg:w-auto h-[140px] lg:h-auto">
                {/* Mobile: horizontal layout */}
                <div className="flex flex-row gap-2 h-full lg:hidden">
                  <div className="w-[75px] flex-shrink-0">
                    <video autoPlay loop muted playsInline className="w-[75px] lg:w-full h-full object-cover rounded">
                      <source src="/achieve_video.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex-1 flex flex-col gap-3 justify-center">
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
                        <p className="text-red-500 font-bold text-[8px] leading-tight">TORIKOMU</p>
                        <p className="text-white text-[7px] leading-[1.2]">{t({ JP: "48種類の栄養素を一度に", EN: "48 different nutrients at once." })}</p>
                      </div>
                      <div className="w-[55%]">
                        <h4 className="text-green-600 font-bold text-[8px] leading-tight">{t({ JP: "使い方", EN: "How to use" })}</h4>
                        <div className="text-white text-[7px] flex items-start leading-[1.2]">
                          <span className="text-green-600 mr-0.5 flex-shrink-0 text-[8px]">✓</span>
                          <span>{t({ JP: "1カプセルを飲み物や食事に’TORIKOMU’", EN: "Simply, TORIKOMU one capsule into your drink or meal." })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PC: vertical layout */}
                <div className="hidden lg:flex flex-col gap-4">
                  <div className="w-1/2 mx-auto">
                    <video autoPlay loop muted playsInline className="w-full h-auto">
                      <source src="/achieve_video.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-green-600 text-2xl font-bold text-center">Achieve</h3>
                    <p className="text-green-600 text-sm text-center">for Body</p>
                    <div className="block items-center pt-4">
                      <p className="text-red-500 font-bold mr-4">TORIKOMU</p>
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
                        <span>{t({ JP: "1カプセルを飲み物や食事に’TORIKOMU’", EN: "Simply, TORIKOMU one capsule into your drink or meal." })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forever Product Card */}
              <div className="border border-green-700 rounded-lg p-3 lg:p-6 bg-black/60 w-[95%] mx-auto max-w-[290px] md:max-w-[95%] lg:w-auto h-[140px] lg:h-auto">
                {/* Mobile: horizontal layout */}
                <div className="flex flex-row gap-2 h-full lg:hidden">
                  <div className="w-[75px] flex-shrink-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded">
                      <source src="/forever_video.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex-1 flex flex-col gap-3 justify-center">
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
                          <span>{t({ JP: "ペットフードに1ケース'MAZEKOMU'", EN: "Simply, MAZEKOMU one capsule into your pet's food." })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PC: vertical layout */}
                <div className="hidden lg:flex flex-col gap-4">
                  <div className="w-1/2 mx-auto">
                    <video autoPlay loop muted playsInline className="w-full h-auto">
                      <source src="/forever_video.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-green-600 text-2xl font-bold text-center">Forever</h3>
                    <p className="text-green-600 text-sm text-center">for Pet</p>
                    <div className="block items-center pt-4">
                      <p className="text-red-500 font-bold mr-4">MAZEKOMU</p>
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
                        <span>{t({ JP: "ペットフードに1ケース'MAZEKOMU'", EN: "Simply, MAZEKOMU one capsule into your pet's food." })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidence Product Card */}
              <div className="border border-green-700 rounded-lg p-3 lg:p-6 bg-black/60 w-[95%] max-w-[290px] md:max-w-[95%] mx-auto lg:w-auto h-[140px] lg:h-auto">
                {/* Mobile: horizontal layout */}
                <div className="flex flex-row gap-2 h-full lg:hidden">
                  <div className="w-[75px] flex-shrink-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded">
                      <source src="/confidence_v2.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex-1 flex flex-col gap-3 justify-center">
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
                          <span>{t({ JP: "直接'SURIKOMU'又はコスメに'MAZEKOMU'", EN: "SURIKOMU directly or MAZEKOMU into your current cosmetics." })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PC: vertical layout */}
                <div className="hidden lg:flex flex-col gap-4">
                  <div className="w-1/2 mx-auto">
                    <video autoPlay loop muted playsInline className="w-full h-auto">
                      <source src="/confidence_v2.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-green-600 text-2xl font-bold text-center">Confidence</h3>
                    <p className="text-green-600 text-sm text-center">For All Skin</p>
                    <div className="block items-center pt-4">
                      <p className="text-red-500 font-bold mr-4">SURIKOMU,MAZEKOMU</p>
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
                        <span>{t({ JP: "直接'SURIKOMU'又はコスメに'MAZEKOMU'", EN: "SURIKOMU directly or MAZEKOMU into your current cosmetics." })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </ScrollAnimationWrapper>

          {/* Bottom Definitions */}
          <div className="mt-5 lg:mt-12 mb-5 lg:mb-12 text-center space-y-2">
            <p className="text-white text-[9px] sm:text-xs lg:text-sm">
              <span className="text-red-500 font-bold">’TORIKOMU’</span>
              {t({ JP: " means of having in Japanese as ", EN: " means of having in Japanese as " })}
              <span className="text-white">{t({ JP: "「取り込む」", EN: "「取り込む」" })}</span>
            </p>
            <p className="text-white text-[9px] sm:text-xs lg:text-sm">
              <span className="text-red-500 font-bold">’MAZEKOMU’</span>
              {t({ JP: " means of mixing in Japanese as ", EN: " means of mixing in Japanese as " })}
              <span className="text-white">{t({ JP: "「混ぜ込む」", EN: "「混ぜ込む」" })}</span>
            </p>
            <p className="text-white text-[9px] sm:text-xs lg:text-sm">
              <span className="text-red-500 font-bold">’SURIKOMU’</span>
              {t({ JP: " means of rubbing in Japanese as ", EN: " means of rubbing in Japanese as " })}
              <span className="text-white">{t({ JP: "「擦り込む」", EN: "「擦り込む」" })}</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
