'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

const milestones = [
  {
    stage: 1,
    date: '2025/10/31',
    title: {
      JP: 'MTV保有者の選定',
      EN: 'MTV Holder Selection'
    },
    description: {
      JP: 'メインクリプトン（MTV）保有者の選定と初期の暗号資産割り当て',
      EN: 'Selection of Main Crypton (MTV) holders and initial crypto asset allocation'
    }
  },
  {
    stage: 2,
    date: '2025/10/10',
    title: {
      JP: 'マーケティングシステム立ち上げ',
      EN: 'Marketing System Launch'
    },
    description: {
      JP: 'アジア全域で製品を販売するための新しいマーケティングシステムの立ち上げ',
      EN: 'Launch of new marketing system for selling products across Asia'
    }
  },
  {
    stage: 3,
    date: '2025/11/11',
    title: {
      JP: 'MTV上場企業として公開',
      EN: 'MTV Public Listing'
    },
    description: {
      JP: 'MTVを上場企業として公開',
      EN: 'Public listing of MTV as a listed company'
    }
  },
  {
    stage: 4,
    date: '2025/11/01',
    title: {
      JP: 'MVT取得開始',
      EN: 'MVT Acquisition Start'
    },
    description: {
      JP: 'ANGKASA政府機関およびコアメンバーによるMVTの取得開始',
      EN: 'Start of MVT acquisition by ANGKASA government agencies and core members'
    }
  },
  {
    stage: 5,
    date: '2025/12/15',
    title: {
      JP: 'MVT価格目標設定',
      EN: 'MVT Price Target'
    },
    description: {
      JP: 'MVTの推定価格目標を10米ドル以上に設定',
      EN: 'Set MVT estimated price target to $10 USD or higher'
    }
  },
  {
    stage: 6,
    date: '2025/12/15',
    title: {
      JP: 'MVラボオフィス設立',
      EN: 'MV Lab Office Establishment'
    },
    description: {
      JP: '東京大学内にMVラボオフィスを設立',
      EN: 'Establish MV Lab office at the University of Tokyo'
    }
  },
  {
    stage: 7,
    date: '2025/12/15',
    title: {
      JP: 'IPO企業買収',
      EN: 'IPO Company Acquisition'
    },
    description: {
      JP: '東京証券取引所からIPO企業を200万〜300万米ドルの予算で買収',
      EN: 'Acquire IPO company from Tokyo Stock Exchange with $2-3 million USD budget'
    }
  },
  {
    stage: 8,
    date: '2026/02/01',
    title: {
      JP: 'MV工場建設開始',
      EN: 'MV Factory Construction'
    },
    description: {
      JP: '日本政府所有地で初のMV工場の建設を開始',
      EN: 'Begin construction of first MV factory on Japanese government-owned land'
    }
  },
  {
    stage: 9,
    date: '2026/03/01',
    title: {
      JP: '世界10工場建設開始',
      EN: '10 Global Factories'
    },
    description: {
      JP: '選定された国々でさらに10のMV工場の建設を開始',
      EN: 'Begin construction of 10 more MV factories in selected countries'
    }
  }
]

export default function Milestones() {
  const { t } = useLanguage()

  return (
    <section id="milestones" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {t({
                JP: 'プロジェクトマイルストーン',
                EN: 'Project Milestones'
              })}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-emerald-500 to-green-400 opacity-30"></div>

          {milestones.map((milestone, index) => (
            <ScrollAnimationWrapper key={milestone.stage} delay={index * 100}>
              <div className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-5/12">
                  {index % 2 === 0 && (
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-bold text-green-400 mb-2">
                        Stage {milestone.stage} - {milestone.date}
                      </h3>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {t(milestone.title)}
                      </h4>
                      <p className="text-gray-300">
                        {t(milestone.description)}
                      </p>
                    </div>
                  )}
                </div>

                <div className="w-2/12 flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-green-500/50">
                    {milestone.stage}
                  </div>
                </div>

                <div className="w-5/12">
                  {index % 2 === 1 && (
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-xl font-bold text-green-400 mb-2">
                        Stage {milestone.stage} - {milestone.date}
                      </h3>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {t(milestone.title)}
                      </h4>
                      <p className="text-gray-300">
                        {t(milestone.description)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper>
          <div className="mt-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-center text-green-400 mb-6">
              {t({
                JP: '財務目標',
                EN: 'Financial Goals'
              })}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t({
                    JP: '総資産（MVT）',
                    EN: 'Total Assets (MVT)'
                  })}
                </h4>
                <p className="text-3xl font-bold text-green-400 mb-2">10億米ドル</p>
                <p className="text-sm text-gray-300">
                  {t({
                    JP: '2026年までに（1コインあたり0.1米ドル→10米ドル）',
                    EN: 'By 2026 ($0.1 → $10 per coin)'
                  })}
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t({
                    JP: '総資産（IPO東京証券取引所上場企業）',
                    EN: 'Total Assets (IPO Tokyo Stock Exchange)'
                  })}
                </h4>
                <p className="text-3xl font-bold text-green-400 mb-2">5億米ドル</p>
                <p className="text-sm text-gray-300">
                  {t({
                    JP: '2026年までに',
                    EN: 'By 2026'
                  })}
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}