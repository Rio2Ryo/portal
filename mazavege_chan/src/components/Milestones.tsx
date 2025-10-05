'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

const milestones = [
  {
    stage: 'Stage 1-3',
    period: '2025 Q4',
    items: [
      { date: '10/31', title: { JP: 'MTV保有者選定', EN: 'MTV Holder Selection' } },
      { date: '10/10', title: { JP: 'マーケティングシステム', EN: 'Marketing System' } },
      { date: '11/11', title: { JP: 'MTV上場', EN: 'MTV Listing' } }
    ],
    color: 'from-blue-400 to-cyan-500'
  },
  {
    stage: 'Stage 4-6',
    period: '2025 Q4',
    items: [
      { date: '11/01', title: { JP: 'MVT取得開始', EN: 'MVT Acquisition' } },
      { date: '12/15', title: { JP: 'MVT $10目標', EN: 'MVT $10 Target' } },
      { date: '12/15', title: { JP: '東大MVラボ', EN: 'Tokyo Univ MV Lab' } }
    ],
    color: 'from-purple-400 to-pink-500'
  },
  {
    stage: 'Stage 7-9',
    period: '2026 Q1',
    items: [
      { date: '12/15', title: { JP: 'IPO企業買収', EN: 'IPO Acquisition' } },
      { date: '02/01', title: { JP: '日本MV工場', EN: 'Japan MV Factory' } },
      { date: '03/01', title: { JP: '世界10工場', EN: '10 Global Factories' } }
    ],
    color: 'from-green-400 to-emerald-500'
  }
]

export default function Milestones() {
  const { t } = useLanguage()

  return (
    <section id="milestones" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {t({
                JP: 'プロジェクトロードマップ',
                EN: 'Project Roadmap'
              })}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimationWrapper>

        {/* Compact Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((group, index) => (
              <ScrollAnimationWrapper key={group.stage} delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-400/40 transition-all duration-300">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${group.color} text-white text-xs font-semibold mb-3`}>
                    {group.stage}
                  </div>
                  <div className="text-sm text-gray-400 mb-4">{group.period}</div>
                  <div className="space-y-3">
                    {group.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-1 h-full bg-gradient-to-b from-green-400/50 to-transparent"></div>
                        <div className="flex-1">
                          <div className="text-xs text-green-400 font-mono mb-1">{item.date}</div>
                          <div className="text-sm text-gray-300">{t(item.title)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        {/* Financial Goals - Compact */}
        <ScrollAnimationWrapper>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">
                    {t({ JP: 'MVT総資産目標', EN: 'MVT Total Assets Target' })}
                  </h4>
                  <p className="text-2xl font-bold text-green-400">$10B</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {t({ JP: '$0.1 → $10/コイン', EN: '$0.1 → $10/coin' })}
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">
                    {t({ JP: 'IPO東証上場目標', EN: 'IPO TSE Target' })}
                  </h4>
                  <p className="text-2xl font-bold text-green-400">$500M</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {t({ JP: '2026年達成予定', EN: 'By 2026' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}