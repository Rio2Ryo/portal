'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  const drinks = [
    { topTitle: 'Caprese', bottomTitle: 'Use as a topping', image: 'e1.jpg' },
    { topTitle: 'Salad', bottomTitle: 'Sprinkle on salad', image: 'e2.jpg' },
    { topTitle: 'Bruschetta', bottomTitle: 'Mix into paste', image: 'e3.jpg' },
    { topTitle: 'Lasagna', bottomTitle: 'Knead Achieve into dough', image: 'e4.jpg' },
    { topTitle: 'Genovese', bottomTitle: 'Mix into basil sauce', image: 'e5.jpg' },
    { topTitle: 'Peperoncino', bottomTitle: 'Mix into oil- based sauce', image: 'e6.jpg' },
    { topTitle: 'Margherita', bottomTitle: 'Use as a topping', image: 'e7.jpg' },
    { topTitle: 'Risotto', bottomTitle: 'Mix as a finishing touch', image: 'e8.jpg' },
  ]

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s4" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-20 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 md:gap-6 my-6">
                <img src="/mark.png" alt="Mother Vegetable Icon" className="w-12 md:w-20 h-auto" />
                <div>
                  <h2 className="text-base md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    {t({
                      JP: 'Italian menu × Achieve',
                      EN: 'Italian menu × Achieve'
                    })}
                  </h2>
                  <div className="w-32 md:w-40 lg:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-3 md:mt-6 opacity-80"></div>
                </div>
              </div>

            {/* 画像グリッド */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-9 mt-12">
              {drinks.map((drink, index) => (
                <div key={index} className="flex flex-col">
                  <div className="items-baseline gap-2 mb-3">
                    <p className="text-white text-left text-base md:text-lg font-semibold">{drink.topTitle}</p>
                    <p className="text-green-400 text-left text-xs md:text-sm font-semibold">{drink.bottomTitle}</p>
                  </div>
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