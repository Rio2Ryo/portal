'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Milestones() {
  const { t } = useLanguage()

  return (
    <section id="milestones" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper disabled={true}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {t({
                JP: 'Mazavege Ichizoku',
                EN: 'Mazavege Ichizoku'
              })}
            </h2>
            <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-6 opacity-80"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
                {t({
                  JP: 'Mazavege Partner（MP）',
                  EN: 'Mazavege Partner (MP)'
                })}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: '加入条件',
                      EN: 'Join Requirements'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: '暗号通貨で10,000 USD以上',
                      EN: '10,000 USD or more in cryptocurrency'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: '利益シェア',
                      EN: 'Profit Share'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: '年間2%（一族の利益ベース）',
                      EN: '2% annually (based on Ichizoku profits)'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: '販売利益',
                      EN: 'Wholesale Profit'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: '35%（在庫管理・販管費・営業ツール不要）',
                      EN: '35% (No inventory, sales expenses, or tools required)'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: '2nd Dealer販売時',
                      EN: 'Secondary Agent Sales'
                    })}
                  </h4>
                  <p className="text-gray-300">10%</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: '紹介手数料',
                      EN: 'Referral Fee'
                    })}
                  </h4>
                  <p className="text-gray-300">50 USD</p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
                {t({
                  JP: 'Team Mazavege（TM）',
                  EN: 'Team Mazavege (TM)'
                })}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: '加入条件',
                      EN: 'Join Requirements'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: '年間250 USD自動継続',
                      EN: 'Annual 250 USD Auto-renewal'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: '付与資産',
                      EN: 'Granted Assets'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: 'MVTを1個（6ヶ月ステイ・初回加入時のみ）',
                      EN: '1 MVT (6-month stay, first-time membership only)'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: '販売利益',
                      EN: 'Wholesale Profit'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: '25%（在庫管理・販管費・営業ツール不要）',
                      EN: '25% (No inventory, sales expenses, or tools required)'
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: '2nd Dealer販売時',
                      EN: 'Secondary Agent Sales'
                    })}
                  </h4>
                  <p className="text-gray-300">10%</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: '紹介手数料',
                      EN: 'Referral Fee'
                    })}
                  </h4>
                  <p className="text-gray-300">50 USD</p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}