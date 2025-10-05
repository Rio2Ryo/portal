'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

const productCategories = [
  {
    id: 'body',
    title: {
      JP: 'Achieve for Body',
      EN: 'Achieve for Body'
    },
    subtitle: {
      JP: '体への達成',
      EN: 'Achievement for Body'
    },
    products: [
      {
        code: 'MV FdBT',
        name: {
          JP: 'フードバレット',
          EN: 'Food Bullet'
        }
      },
      {
        code: 'MV FdPRO',
        name: {
          JP: 'フード、プロ向け（パウダーのみ）',
          EN: 'Food Pro (Powder Only)'
        }
      }
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'skin',
    title: {
      JP: 'Confidence for Skin & Wound',
      EN: 'Confidence for Skin & Wound'
    },
    subtitle: {
      JP: '肌と傷への自信、食品として',
      EN: 'Confidence for Skin & Wound, As Food'
    },
    products: [
      {
        code: 'MV CoBT',
        name: {
          JP: 'コスメティックバレット',
          EN: 'Cosmetic Bullet'
        }
      },
      {
        code: 'MV CoPF',
        name: {
          JP: 'コスメティック、パフケース',
          EN: 'Cosmetic, Puff Case'
        }
      },
      {
        code: 'MV CoPRO',
        name: {
          JP: 'コスメティック、プロ向け（パウダーのみ）',
          EN: 'Cosmetic Pro (Powder Only)'
        }
      }
    ],
    color: 'from-pink-400 to-purple-600'
  },
  {
    id: 'pet',
    title: {
      JP: 'Forever for Pet',
      EN: 'Forever for Pet'
    },
    subtitle: {
      JP: 'ペットへの永遠',
      EN: 'Forever for Pets'
    },
    products: [
      {
        code: 'MV PtBT',
        name: {
          JP: 'ペットバレット',
          EN: 'Pet Bullet'
        }
      }
    ],
    color: 'from-yellow-400 to-orange-600'
  },
  {
    id: 'hospital',
    title: {
      JP: 'Hospital Exclusive in KL',
      EN: 'Hospital Exclusive in KL'
    },
    subtitle: {
      JP: 'クアラルンプールの病院限定',
      EN: 'Kuala Lumpur Hospital Exclusive'
    },
    products: [
      {
        code: 'All 45 Essential',
        name: {
          JP: 'All 45 Essential',
          EN: 'All 45 Essential'
        }
      },
      {
        code: 'All 45 Rising Star',
        name: {
          JP: 'All 45 Rising Star',
          EN: 'All 45 Rising Star'
        }
      }
    ],
    color: 'from-emerald-400 to-teal-600'
  }
]

export default function ProductLineup() {
  const { t } = useLanguage()

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {t({
                JP: '製品ラインナップ',
                EN: 'Product Lineup'
              })}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {productCategories.map((category, index) => (
            <ScrollAnimationWrapper key={category.id} delay={index * 100}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105">
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold mb-4`}>
                  {t(category.title)}
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-6">
                  {t(category.subtitle)}
                </h3>
                <div className="space-y-4">
                  {category.products.map((product) => (
                    <div key={product.code} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-green-400 font-mono font-semibold">{product.code}:</span>
                        <span className="text-gray-300 ml-2">{t(product.name)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper>
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg">
              {t({
                JP: '全ての製品は35億年の地球の知恵を活かした革新的な技術で開発されています',
                EN: 'All products are developed with innovative technology that leverages 3.5 billion years of Earth\'s wisdom'
              })}
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}