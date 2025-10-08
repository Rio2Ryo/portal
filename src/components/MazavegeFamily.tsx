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
                JP: 'Value of Ichizoku',
                EN: 'Value of Ichizoku'
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
                  JP: '1. 信用力と誇り',
                  EN: '1. Credibility and Pride'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: 'ASEAN、大学、大企業等と同じチームの活動による信用性の向上。',
                  EN: 'Enhanced credibility through team activities with ASEAN, universities, and major corporations'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={100}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '2. Dance & Show Marketing',
                  EN: '2. Dance & Show Marketing'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: '使うだけで商品の魅力が伝わり、見た人が自然に欲しくなる。',
                  EN: 'Simply by using it, the product\'s appeal is conveyed and viewers naturally want it.'
                })}
              </p>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: '※一般的な営業トークは不要。',
                  EN: '※No traditional sales talk needed'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={200}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '3. 5 minutes LP & TEBIKISHO',
                  EN: '3. 5 Minutes LP & TEBIKISHO'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: '5分で商品の説明が完結できるLPと手引書。5分以内の説明は成約率の向上。',
                  EN: 'Complete product explanation in a short time. Explanations within 5 minutes increase conversion rates.'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={300}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '4. 製品割引',
                  EN: '4. Product Discount'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: '個人使用の製品がいつでも25％割引。',
                  EN: 'Always 25% discount on products for personal use'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={400}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '5. 販売利益',
                  EN: '5. Sales Profit'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: '製品販売による25％の利益（2nd dealer販売による10％の利益）。',
                  EN: '25% profit from product sales (10% profit from 2nd dealer sales)'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={500}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '6. 各種ビジネスツール',
                  EN: '6. Various Business Tools'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: 'LP（公式価格から10％割引）、EC、グループ販売集計、物流、CRM等の使用。',
                  EN: 'Access to LP (10% off official price), EC, group sales tracking, logistics, CRM, etc.'
                })}
              </p>
              <p className="text-gray-300 text-lg mt-2">
                {t({
                  JP: 'Value of Business Tool: 1万ドル以上。',
                  EN: 'Value of Business Tool: Over $10,000'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={600}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '7. Mother Vegetable Token (MVT)',
                  EN: '7. Mother Vegetable Token (MVT)'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: '1 MVTを無料で受け取る（条件付き）。',
                  EN: 'Receive 1 MVT for free'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={700}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '8. 2nd dealer 紹介料',
                  EN: '8. 2nd Dealer Referral Fee'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: '50米ドルの紹介料を受け取る。',
                  EN: 'Receive 50 USD referral fee'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={800}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    {t({
                      JP: '9. 簡単な登録',
                      EN: '9. Easy Registration'
                    })}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {t({
                      JP: '一族メンバーへの簡単な登録（パスワード付きの登録ウェブページ）。',
                      EN: 'Easy registration as Ichizoku member (password-protected registration webpage)'
                    })}
                  </p>
                </div>
                <div className="md:flex-shrink-0">
                  <button className="w-full md:w-auto px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-300 font-semibold">
                    {t({
                      JP: 'Apply',
                      EN: 'Apply'
                    })}
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}