'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper disabled={true}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {t({
                JP: 'Value of Ichizoku',
                EN: 'Value of Ichizoku'
              })}
            </h2>
            <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-6 opacity-80"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '信用力と誇り',
                  EN: 'Credibility and Pride'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: 'ASEAN、大学、大企業等と同じチームとしての信用性と誇りの向上。',
                  EN: 'Enhanced credibility through team activities with ASEAN, universities, and major corporations'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: 'Dance & Show Marketing',
                  EN: 'Dance & Show Marketing'
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

          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {language === 'JP' ? (
                  <>
                    5 minutes LP & <span className="text-red-500">TEBIKISHO</span>
                  </>
                ) : (
                  <>
                    5 Minutes LP & <span className="text-red-500">TEBIKISHO</span>
                  </>
                )}
              </h3>
              <p className="text-gray-300 text-lg">
                {language === 'JP' ? (
                  <>
                    5分で商品の説明が完結できるLPと<span className="text-red-500">手引書</span>。5分以内の説明は成約率の向上。
                  </>
                ) : (
                  'Complete product explanation in a short time. Explanations within 5 minutes increase conversion rates.'
                )}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '製品割引',
                  EN: 'Product Discount'
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

          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '販売利益',
                  EN: 'Sales Profit'
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

          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '各種ビジネスツール',
                  EN: 'Various Business Tools'
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
                  JP: '※Value of Business Tool: 2,000USD',
                  EN: '※Value of Business Tool: 2,000USD'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: 'Mother Vegetable Token (MVT)',
                  EN: 'Mother Vegetable Token (MVT)'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: '1 MVTを無料で受け取る。（初年度のみ）',
                  EN: 'Receive 1 MVT for free (First year only)'
                })}
              </p>
              <p className="text-gray-300 text-lg mt-2">
                {t({
                  JP: '※Condition：1 year stay with 4 QT reward',
                  EN: '※Condition: 1 year stay with 4 QT reward'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {t({
                  JP: '2nd Dealer Introduction',
                  EN: '2nd Dealer Introduction'
                })}
              </h3>
              <p className="text-gray-300 text-lg">
                {t({
                  JP: '50USDの紹介料を受け取る（更新時も対象）。',
                  EN: 'Receive 50 USD referral fee (including renewals)'
                })}
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    {t({
                      JP: '5 min Registration',
                      EN: '5 min Registration'
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