'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {t({
                JP: 'Ichizoku 紹介方法',
                EN: 'How to introduce Ichizoku'
              })}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '1. LPを使って簡単に説明できます',
                  EN: '1. Easy Explanation Using LP'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: '地球・人間・ペットへのメリットをLPの内容に基づいて説明',
                  EN: 'Explain benefits for Earth, humans, and pets based on LP content'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={100}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-6">
                {t({
                  JP: '2. 「Ichizoku（一族）」になるメリット',
                  EN: '2. Benefits of Becoming "Ichizoku (Family)"'
                })}
              </h3>
              <p className="text-gray-300 mb-6">
                {t({
                  JP: 'パスワード付きディーラー専用ページでご案内',
                  EN: 'Available on password-protected dealer-exclusive page'
                })}
              </p>

              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {t({
                      JP: 'a) 社会的活動への参加',
                      EN: 'a) Participation in Social Activities'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: 'ASEAN、大学、大企業などと連携し、社会的活動を拡散',
                      EN: 'Collaborate with ASEAN, universities, major corporations to spread social activities'
                    })}
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {t({
                      JP: 'b) 地球と人類を守る取り組みに参加',
                      EN: 'b) Participate in Protecting Earth and Humanity'
                    })}
                  </h4>
                  <p className="text-gray-300">
                    {t({
                      JP: '地球と人類を守る取り組みに参加可能（上記No.1参照）',
                      EN: 'Participate in initiatives to protect Earth and humanity (refer to No.1 above)'
                    })}
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {t({
                      JP: 'c) ビジネスチャンス：一緒に商品販売、将来の利益シェア',
                      EN: 'c) Business Opportunities: Co-sell Products, Share Future Profits'
                    })}
                  </h4>
                  <div className="space-y-3 ml-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        {t({
                          JP: 'c-1. 自分用の購入時は常に25％割引で商品を入手可能',
                          EN: 'c-1. Always get 25% discount on products for personal use'
                        })}
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        {t({
                          JP: 'c-2. 商品販売によって25％の利益を獲得可能（さらに2次代理店から10％の利益を得られます）',
                          EN: 'c-2. Earn 25% profit from product sales (plus 10% profit from secondary agents)'
                        })}
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        {t({
                          JP: 'c-3. 専用LP（公式価格より10％オフ）・EC・売上集計・物流・CRMなどの仕組みが利用可能',
                          EN: 'c-3. Access to dedicated LP (10% off official price), EC, sales tracking, logistics, CRM systems'
                        })}
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        {t({
                          JP: 'c-4. 無料で1MVTを取得可能',
                          EN: 'c-4. Receive 1 MVT for free'
                        })}
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        {t({
                          JP: 'c-5. 紹介手数料として50USDを獲得可能',
                          EN: 'c-5. Earn 50 USD as referral fee'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={200}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '3. 「Ichizoku」への登録方法',
                  EN: '3. How to Register for "Ichizoku"'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: 'ウェブページから簡単に登録が可能',
                  EN: 'Easy registration from webpage'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}