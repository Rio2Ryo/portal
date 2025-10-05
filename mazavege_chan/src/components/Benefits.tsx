'use client'

import { motion } from 'framer-motion'
import {
  ChartBarIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  GiftIcon,
  PercentBadgeIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

const benefitsData = {
  JP: [
    {
      category: 'グローバルインパクト',
      items: [
        {
          icon: <GlobeAltIcon className="h-6 w-6" />,
          title: '社会貢献の拡大',
          description: 'ASEAN、大学、フォーチュン500企業と協力してグローバルな影響力を拡大'
        },
        {
          icon: <BuildingOfficeIcon className="h-6 w-6" />,
          title: '地球と人類を守る',
          description: '私たちのミッションを通じて持続可能な開発と環境保護に貢献'
        }
      ]
    },
    {
      category: 'ビジネスチャンス',
      items: [
        {
          icon: <PercentBadgeIcon className="h-6 w-6" />,
          title: 'メンバー25%割引',
          description: '個人使用の全商品がいつでも25%オフ'
        },
        {
          icon: <ChartBarIcon className="h-6 w-6" />,
          title: '販売利益25%',
          description: '直接販売で25%の利益＋二次紹介で10%の利益'
        },
        {
          icon: <ShoppingCartIcon className="h-6 w-6" />,
          title: '完全なビジネスプラットフォーム',
          description: '公式価格から10%オフの独自LP、ECプラットフォーム、販売追跡、物流、CRMシステム'
        },
        {
          icon: <GiftIcon className="h-6 w-6" />,
          title: '無料MVTトークン',
          description: '加入時にMVTトークンを1つ無料プレゼント'
        },
        {
          icon: <CurrencyDollarIcon className="h-6 w-6" />,
          title: '$50紹介ボーナス',
          description: '新規メンバー紹介成功ごとに$50 USDを獲得'
        }
      ]
    }
  ],
  EN: [
    {
      category: 'Global Impact',
      items: [
        {
          icon: <GlobeAltIcon className="h-6 w-6" />,
          title: 'Increase Society Working',
          description: 'Collaborate with ASEAN, Universities, and Fortune 500 companies to expand global reach'
        },
        {
          icon: <BuildingOfficeIcon className="h-6 w-6" />,
          title: 'Save Earth & Humanity',
          description: 'Contribute to sustainable development and environmental protection through our mission'
        }
      ]
    },
    {
      category: 'Business Opportunities',
      items: [
        {
          icon: <PercentBadgeIcon className="h-6 w-6" />,
          title: '25% Member Discount',
          description: 'Get 25% off on all products anytime for personal use'
        },
        {
          icon: <ChartBarIcon className="h-6 w-6" />,
          title: '25% Sales Profit',
          description: 'Earn 25% profit from direct sales + 10% from second-level referrals'
        },
        {
          icon: <ShoppingCartIcon className="h-6 w-6" />,
          title: 'Complete Business Platform',
          description: 'Your own LP with 10% off official prices, EC platform, sales tracking, logistics, and CRM system'
        },
        {
          icon: <GiftIcon className="h-6 w-6" />,
          title: 'Free MVT Token',
          description: 'Receive one complimentary MVT token upon joining'
        },
        {
          icon: <CurrencyDollarIcon className="h-6 w-6" />,
          title: '$50 Referral Bonus',
          description: 'Earn $50 USD for each successful member introduction'
        }
      ]
    }
  ]
}

export default function Benefits() {
  const { language, t } = useLanguage()
  const benefits = benefitsData[language]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            {t({
              JP: 'マザベジ一族になるメリットとは',
              EN: 'What is the benefit to become Mazavege Ichizoku'
            })}
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            {t({
              JP: '私たちの家族に参加して、ビジネスの成長、社会的影響、持続可能な開発のための限定的な機会を解放しましょう',
              EN: 'Join our family and unlock exclusive opportunities for business growth, social impact, and sustainable development'
            })}
          </p>
        </motion.div>

        {benefits.map((section, sectionIndex) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-lg rounded-xl p-6 border border-green-500/20"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg text-white mr-4">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {t({
              JP: '参加方法は簡単',
              EN: 'Easy to Join'
            })}
          </h3>
          <p className="text-white/90 mb-2 text-lg">
            {t({
              JP: 'スターターパックを購入するだけ',
              EN: 'Just purchase a starter pack'
            })}
          </p>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto text-sm">
            {t({
              JP: 'あなた自身がすぐに実感できる商品と紹介しやすいツールたちをご用意しています',
              EN: 'We provide products you can experience immediately and tools that are easy to introduce to others'
            })}
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            {t({ JP: '今すぐ始める', EN: 'Get Started Today' })}
          </button>
        </motion.div>
      </div>
    </section>
  )
}