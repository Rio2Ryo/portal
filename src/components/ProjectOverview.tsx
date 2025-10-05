'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const products = [
  {
    name: {
      JP: 'Achieve for Body 30 pcs',
      EN: 'Achieve for Body 30 pcs'
    },
    retailPrice: '¥4,950',
    rewardMP: '¥1,733',
    rewardTM: '¥1,238',
    secondaryAgent: '¥495'
  },
  {
    name: {
      JP: 'Forever for Pet 30 pcs',
      EN: 'Forever for Pet 30 pcs'
    },
    retailPrice: '¥4,950',
    rewardMP: '¥1,733',
    rewardTM: '¥1,238',
    secondaryAgent: '¥495'
  },
  {
    name: {
      JP: 'Heal for All Skin 30 pcs',
      EN: 'Heal for All Skin 30 pcs'
    },
    retailPrice: '¥4,950',
    rewardMP: '¥1,733',
    rewardTM: '¥1,238',
    secondaryAgent: '¥495'
  },
  {
    name: {
      JP: 'Confidence for Man',
      EN: 'Confidence for Man'
    },
    retailPrice: '¥3,750',
    rewardMP: '¥1,313',
    rewardTM: '¥938',
    secondaryAgent: '¥375'
  }
]

export default function ProjectOverview() {
  const { t } = useLanguage()
  return (
    <section id="project-overview" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t({ JP: 'Mother Vegetable Products', EN: 'Mother Vegetable Products' })}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
                {t(product.name)}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300 font-medium">
                    {t({ JP: '上代価格', EN: 'Retail Price' })}
                  </span>
                  <span className="text-white font-bold text-lg">{product.retailPrice}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300 font-medium">
                    {t({ JP: '報酬（MP）', EN: 'Reward (MP)' })}
                  </span>
                  <span className="text-green-400 font-bold text-lg">{product.rewardMP}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300 font-medium">
                    {t({ JP: '報酬（TM）', EN: 'Reward (TM)' })}
                  </span>
                  <span className="text-green-400 font-bold text-lg">{product.rewardTM}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300 font-medium">
                    {t({ JP: '2次代理店販売時', EN: 'Secondary Agent Sales' })}
                  </span>
                  <span className="text-blue-400 font-bold text-lg">{product.secondaryAgent}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}