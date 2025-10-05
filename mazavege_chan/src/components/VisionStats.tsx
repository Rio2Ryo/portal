'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { Icons } from '@/components/Icons'

export default function VisionStats() {
  const { t } = useLanguage()

  const visionCards = [
    {
      icon: Icons.globe,
      title: { JP: '地球の恵み', EN: "Earth's Blessing" },
      description: { JP: '原始地球から受け継いだ生命の源', EN: 'Source of life inherited from primordial Earth' }
    },
    {
      icon: Icons.leaf,
      title: { JP: '革新的技術', EN: 'Innovative Technology' },
      description: { JP: '最先端の科学で解き明かす生命力', EN: 'Life force unveiled by cutting-edge science' }
    },
    {
      icon: Icons.sparkle,
      title: { JP: '持続可能な未来', EN: 'Sustainable Future' },
      description: { JP: '人類と地球の共生を実現', EN: 'Achieving coexistence between humanity and Earth' }
    }
  ]

  const stats = [
    { value: '2025', label: { JP: 'プロジェクト開始', EN: 'Project Launch' } },
    { value: '10+', label: { JP: '世界工場展開', EN: 'Global Factories' } },
    { value: '$10B', label: { JP: 'MVT目標価値', EN: 'MVT Target Value' } },
    { value: '∞', label: { JP: '可能性', EN: 'Possibilities' } }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Vision Cards */}
        <ScrollAnimationWrapper>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {visionCards.map((card, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-green-400/30 transition-all duration-500 h-full">
                  <div className="flex justify-center mb-6 text-white/60 group-hover:text-white transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-light text-green-400 mb-4 text-center">
                    {t(card.title)}
                  </h3>
                  <p className="text-sm text-gray-400 text-center leading-relaxed">
                    {t(card.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Stats */}
        <ScrollAnimationWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-extralight text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-light">
                  {t(stat.label)}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}