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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div id="s1" className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-20 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 md:gap-6 my-6">
                <img src="/mark.png" alt="Mother Vegetable Icon" className="w-12 md:w-20 h-auto" />
                <div>
                  <h2 className="text-base md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    {t({
                      JP: 'Mother Vegetable Drinks',
                      EN: 'Mother Vegetable Drinks'
                    })}
                  </h2>
                  <div className="w-32 md:w-40 lg:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-3 md:mt-6 opacity-80"></div>
                </div>
              </div>

            {/* 画像グリッド */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-9 mt-12">
              {drinks.map((drink, index) => (
                <div key={index} className="flex flex-col">
                  <p className="text-white text-left text-base md:text-lg font-semibold">{drink.topTitle}</p>
                  <p className="text-white text-left text-base md:text-lg font-semibold mb-3">{drink.bottomTitle}</p>
                  <img
                    src={`/${drink.image}`}
                    alt={`${drink.topTitle} - ${drink.bottomTitle}`}
                    className="w-full h-auto shadow-lg"
                  />
                </div>
              ))}
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