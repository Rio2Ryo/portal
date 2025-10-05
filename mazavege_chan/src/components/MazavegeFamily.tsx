'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'
import { Icons } from '@/components/Icons'

const mainBenefits = [
  {
    icon: Icons.globe,
    title: {
      JP: 'ASEAN協働',
      EN: 'ASEAN Partnership'
    },
    description: {
      JP: '10カ国の政府・大学・企業と連携',
      EN: 'Partnering with 10 countries'
    }
  },
  {
    icon: Icons.leaf,
    title: {
      JP: '地球と健康',
      EN: 'Earth & Health'
    },
    description: {
      JP: '35億年の生命力で環境再生',
      EN: '3.5 billion years of life force'
    }
  },
  {
    icon: Icons.briefcase,
    title: {
      JP: 'ビジネス',
      EN: 'Business'
    },
    description: {
      JP: '共同販売で利益共有',
      EN: 'Share profits through co-selling'
    }
  }
]

const processFlow = [
  {
    phase: { JP: '参加', EN: 'Join' },
    icon: Icons.rocket
  },
  {
    phase: { JP: '学習', EN: 'Learn' },
    icon: Icons.book
  },
  {
    phase: { JP: '販売', EN: 'Sell' },
    icon: Icons.dollar
  },
  {
    phase: { JP: '成長', EN: 'Grow' },
    icon: Icons.chart
  }
]

const benefits = [
  { icon: Icons.discount, value: '25%', label: { JP: '製品割引', EN: 'Product Discount' } },
  { icon: Icons.dollar, value: '25%', label: { JP: '販売利益', EN: 'Sales Profit' } },
  { icon: Icons.tools, value: 'Full', label: { JP: 'ツール提供', EN: 'Tools Access' } },
  { icon: Icons.gift, value: '1 MVT', label: { JP: '無料付与', EN: 'Free Grant' } },
  { icon: Icons.referral, value: '$50', label: { JP: '紹介料', EN: 'Referral Fee' } }
]

export default function MazavegeFamily() {
  const { t } = useLanguage()

  return (
    <section id="mazavege-family" className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">

        {/* Header */}
        <ScrollAnimationWrapper>
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-extralight tracking-wider mb-6 text-white">
              {t({ JP: 'マザベジ一族', EN: 'Mazavege Family' })}
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
          </div>
        </ScrollAnimationWrapper>

        {/* Three Core Values */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {mainBenefits.map((benefit, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 100}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6 group hover:bg-white/10 transition-all duration-500">
                  <div className="text-white/80 group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-wider text-white mb-3">
                  {t(benefit.title)}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {t(benefit.description)}
                </p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Process Flow */}
        <ScrollAnimationWrapper>
          <div className="mb-32">
            <div className="flex justify-between items-center max-w-4xl mx-auto relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              {processFlow.map((step, index) => (
                <div key={index} className="text-center relative bg-black px-4">
                  <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center mb-4 text-white/60 hover:text-white hover:border-white/40 transition-all duration-500 mx-auto">
                    {step.icon}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-light">{t(step.phase)}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* 5 Benefits */}
        <ScrollAnimationWrapper>
          <div className="mb-32">
            <h3 className="text-3xl font-extralight text-center text-white mb-20 tracking-wider">
              {t({ JP: '５つの特典', EN: 'Five Benefits' })}
            </h3>
            <div className="grid grid-cols-5 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6 text-white/60 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <div className="text-2xl font-extralight text-white mb-2">{benefit.value}</div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">{t(benefit.label)}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Partner Types */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 max-w-5xl mx-auto">
          <ScrollAnimationWrapper>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
              <div className="relative p-12 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-white">{Icons.crown}</div>
                  <span className="text-xs uppercase tracking-widest text-white/30 font-light">Premium</span>
                </div>
                <h4 className="text-2xl font-extralight text-white mb-2 tracking-wide">
                  {t({ JP: 'パートナー', EN: 'Partner' })}
                </h4>
                <div className="text-5xl font-extralight text-white mb-8">$10,000</div>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-light">{t({ JP: '年間利益', EN: 'Annual Return' })}</span>
                    <span className="text-white font-light">2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-light">{t({ JP: '卸売利益', EN: 'Wholesale' })}</span>
                    <span className="text-white font-light">35%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-light">{t({ JP: '二次販売', EN: 'Secondary' })}</span>
                    <span className="text-white font-light">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={100}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
              <div className="relative p-12 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-white">{Icons.sparkle}</div>
                  <span className="text-xs uppercase tracking-widest text-white/30 font-light">Starter</span>
                </div>
                <h4 className="text-2xl font-extralight text-white mb-2 tracking-wide">
                  {t({ JP: 'チーム', EN: 'Team' })}
                </h4>
                <div className="text-5xl font-extralight text-white mb-8">$250</div>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-light">{t({ JP: 'MVT付与', EN: 'MVT Grant' })}</span>
                    <span className="text-white font-light">1 MVT</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-light">{t({ JP: '卸売利益', EN: 'Wholesale' })}</span>
                    <span className="text-white font-light">25%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-light">{t({ JP: '紹介料', EN: 'Referral' })}</span>
                    <span className="text-white font-light">$50</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* Stats */}
        <ScrollAnimationWrapper>
          <div className="grid grid-cols-4 gap-8 mb-32 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-extralight text-white mb-3">10+</div>
              <div className="text-xs uppercase tracking-widest text-white/30 font-light">
                {t({ JP: 'ASEAN', EN: 'ASEAN' })}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-white mb-3">50+</div>
              <div className="text-xs uppercase tracking-widest text-white/30 font-light">
                {t({ JP: '大学', EN: 'Universities' })}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-white mb-3">$10B</div>
              <div className="text-xs uppercase tracking-widest text-white/30 font-light">
                {t({ JP: '目標', EN: 'Target' })}
              </div>
            </div>
            <div className="text-center">
              <div className="text-white/60">{Icons.infinity}</div>
              <div className="text-xs uppercase tracking-widest text-white/30 font-light mt-3">
                {t({ JP: '可能性', EN: 'Potential' })}
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA */}
        <ScrollAnimationWrapper>
          <div className="text-center">
            <button className="group relative px-16 py-5 overflow-hidden">
              <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-white/40 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-full transition-all duration-500"></div>
              <span className="relative text-white/80 group-hover:text-white font-light tracking-widest uppercase text-sm transition-all duration-500">
                {t({ JP: '参加する', EN: 'Join Now' })}
              </span>
            </button>
          </div>
        </ScrollAnimationWrapper>

      </div>
    </section>
  )
}