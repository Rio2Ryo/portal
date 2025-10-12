'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

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
                JP: '報酬ロジック',
                EN: 'Group Structure and Reward Logic'
              })}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">
              {t({
                JP: '2 Level dealership',
                EN: '2 Level dealership'
              })}
            </p>
            <div className="mt-8 flex justify-center">
              <Image
                src="/hyou.png"
                alt="Hierarchy Chart"
                width={600}
                height={450}
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ScrollAnimationWrapper>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
                {t({
                  JP: 'MP Group',
                  EN: 'MP Group'
                })}
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: 'MPが直接販売',
                      EN: 'MP Direct Sales'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: '販売価格の35%受取',
                      EN: 'Receive 35% of sales price'
                    })}
                  </p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: 'AまたはTMが販売',
                      EN: 'A or TM Sales'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: '販売価格の10%受取',
                      EN: 'Receive 10% of sales price'
                    })}
                  </p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: 'CまたはDが販売',
                      EN: 'C or D Sales'
                    })}
                   
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: 'MPには報酬なし',
                      EN: 'No reward for MP'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={200}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
                {t({
                  JP: 'TM Group',
                  EN: 'TM Group'
                })}
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: 'TMが直接販売',
                      EN: 'TM Direct Sales'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: '販売価格の25%受取',
                      EN: 'Receive 25% of sales price'
                    })}
                  </p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t({
                      JP: 'CまたはDが販売',
                      EN: 'C or D Sales'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: '販売価格の10%受取',
                      EN: 'Receive 10% of sales price'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}