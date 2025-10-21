'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const products = [
  {
    title: {
      JP: 'Achieve',
      EN: 'Achieve'
    },
    subtitle: {
      JP: 'for Body',
      EN: 'for Body'
    },
    retailPrice: {
      JP: '$33.00',
      EN: '$33.00'
    },
    rewardMP: {
      JP: '$11.55',
      EN: '$11.55'
    },
    rewardTM: {
      JP: '$8.25',
      EN: '$8.25'
    },
    secondaryAgent: {
      JP: '$3.30',
      EN: '$3.30'
    }
  },
  {
    title: {
      JP: 'Forever',
      EN: 'Forever'
    },
    subtitle: {
      JP: 'for Pet',
      EN: 'for Pet'
    },
    retailPrice: {
      JP: '$33.00',
      EN: '$33.00'
    },
    rewardMP: {
      JP: '$11.55',
      EN: '$11.55'
    },
    rewardTM: {
      JP: '$8.25',
      EN: '$8.25'
    },
    secondaryAgent: {
      JP: '$3.30',
      EN: '$3.30'
    }
  },
  {
    title: {
      JP: 'Confidence',
      EN: 'Confidence'
    },
    subtitle: {
      JP: 'for All Skin',
      EN: 'for All Skin'
    },
    retailPrice: {
      JP: '$33.00',
      EN: '$33.00'
    },
    rewardMP: {
      JP: '$11.55',
      EN: '$11.55'
    },
    rewardTM: {
      JP: '$8.25',
      EN: '$8.25'
    },
    secondaryAgent: {
      JP: '$3.30',
      EN: '$3.30'
    }
  }
]

export default function ProjectOverview() {
  const { t } = useLanguage()
  return (
    <section id="project-overview" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-8">
            {t({ JP: 'Mother Vegetable Products', EN: 'Mother Vegetable Products' })}
          </h2>
          <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-6 opacity-80"></div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="mb-6 text-center">
                <h3 className="text-4xl font-bold text-green-400">
                  {t(product.title)}
                </h3>
                <p className="text-xl text-green-400 font-bold">
                  {t(product.subtitle)}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300 font-medium">
                    {t({ JP: '上代価格', EN: 'Retail Price' })}
                  </span>
                  <span className="text-white font-bold text-lg">{t(product.retailPrice)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300 font-medium">
                    {t({ JP: '報酬（MP）', EN: 'Reward (MP)' })}
                  </span>
                  <span className="text-green-400 font-bold text-lg">{t(product.rewardMP)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300 font-medium">
                    {t({ JP: '報酬（TM）', EN: 'Reward (TM)' })}
                  </span>
                  <span className="text-green-400 font-bold text-lg">{t(product.rewardTM)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300 font-medium">
                    {t({ JP: '2nd Dealer販売時', EN: '2nd Dealer Sales' })}
                  </span>
                  <span className="text-blue-400 font-bold text-lg">{t(product.secondaryAgent)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}