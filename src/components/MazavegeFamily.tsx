'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

const partnerTypes = [
  {
    id: 'partner',
    title: {
      JP: 'マザベジパートナー',
      EN: 'Mazavege Partner'
    },
    features: [
      {
        label: {
          JP: '投資額',
          EN: 'Investment'
        },
        value: {
          JP: '10,000米ドル相当の暗号資産',
          EN: '$10,000 USD in crypto assets'
        }
      },
      {
        label: {
          JP: '利益分配',
          EN: 'Profit Distribution'
        },
        value: {
          JP: '暗号資産価値に基づき年間2％',
          EN: '2% annually based on crypto asset value'
        }
      },
      {
        label: {
          JP: '卸売価格',
          EN: 'Wholesale Price'
        },
        value: {
          JP: '35％の利益率',
          EN: '35% profit margin'
        }
      },
      {
        label: {
          JP: '二次代理店販売',
          EN: 'Secondary Distributor Sales'
        },
        value: {
          JP: '10％の手数料',
          EN: '10% commission'
        }
      }
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'team',
    title: {
      JP: 'チームマザベジ',
      EN: 'Team Mazavege'
    },
    features: [
      {
        label: {
          JP: '投資額',
          EN: 'Investment'
        },
        value: {
          JP: '250米ドル相当の暗号資産',
          EN: '$250 USD in crypto assets'
        }
      },
      {
        label: {
          JP: '特典',
          EN: 'Bonus'
        },
        value: {
          JP: '1 MVT（6ヶ月間ロック）',
          EN: '1 MVT (6-month lock)'
        }
      },
      {
        label: {
          JP: '卸売価格',
          EN: 'Wholesale Price'
        },
        value: {
          JP: '25％の利益率',
          EN: '25% profit margin'
        }
      },
      {
        label: {
          JP: '二次代理店販売',
          EN: 'Secondary Distributor Sales'
        },
        value: {
          JP: '価格に対して10％の手数料',
          EN: '10% commission on price'
        }
      },
      {
        label: {
          JP: '紹介料',
          EN: 'Referral Fee'
        },
        value: {
          JP: '50米ドル',
          EN: '$50 USD'
        }
      }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  }
]

const teamBenefits = [
  {
    title: {
      JP: '簡単な説明',
      EN: 'Simple Explanation'
    },
    description: {
      JP: '一族が提供するランディングページに基づいた簡単な説明',
      EN: 'Simple explanation based on landing page provided by the family'
    }
  },
  {
    title: {
      JP: '簡単な登録',
      EN: 'Easy Registration'
    },
    description: {
      JP: '一族メンバーへの簡単な登録（パスワード付きの登録ウェブページ）',
      EN: 'Easy registration to family members (password-protected registration webpage)'
    }
  },
  {
    title: {
      JP: '簡単な販売と利益共有',
      EN: 'Easy Sales & Profit Sharing'
    },
    description: {
      JP: '新しいエンターテイメント販売構造により、製品を共同で販売し、将来の利益を共有',
      EN: 'Co-sell products and share future profits with new entertainment sales structure'
    }
  },
  {
    title: {
      JP: '信頼性の向上',
      EN: 'Enhanced Credibility'
    },
    description: {
      JP: 'ASEAN、大学、大企業との連携によるチームメンバーの信頼性向上',
      EN: 'Improved team member credibility through partnerships with ASEAN, universities, and major corporations'
    }
  },
  {
    title: {
      JP: '製品割引',
      EN: 'Product Discount'
    },
    description: {
      JP: '個人使用の製品がいつでも25％割引',
      EN: '25% discount on products for personal use anytime'
    }
  },
  {
    title: {
      JP: '販売利益',
      EN: 'Sales Profit'
    },
    description: {
      JP: '製品販売による25％の利益（二次販売による10％の利益）',
      EN: '25% profit from product sales (10% profit from secondary sales)'
    }
  },
  {
    title: {
      JP: 'ツールとサポート',
      EN: 'Tools & Support'
    },
    description: {
      JP: 'LP（公式ウェブページ価格から10％割引）、EC、グループ販売計算、物流、CRMなどへのアクセス',
      EN: 'Access to LP (10% off official webpage price), EC, group sales calculations, logistics, CRM, etc.'
    }
  },
  {
    title: {
      JP: '無料のMVT',
      EN: 'Free MVT'
    },
    description: {
      JP: '1 MVTを無料で受け取る',
      EN: 'Receive 1 MVT for free'
    }
  },
  {
    title: {
      JP: '紹介料',
      EN: 'Referral Fee'
    },
    description: {
      JP: '50米ドルの紹介料を受け取る',
      EN: 'Receive $50 USD referral fee'
    }
  }
]

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
                JP: 'マザベジ一族',
                EN: 'Mazavege Family'
              })}
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              {t({
                JP: 'マーケティングメンバープロジェクト',
                EN: 'Marketing Member Project'
              })}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {partnerTypes.map((partner, index) => (
            <ScrollAnimationWrapper key={partner.id} delay={index * 100}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-400/40 transition-all duration-300">
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${partner.gradient} text-white text-sm font-semibold mb-6`}>
                  {t(partner.title)}
                </div>
                <div className="space-y-4">
                  {partner.features.map((feature, idx) => (
                    <div key={idx} className="flex justify-between items-start">
                      <span className="text-gray-400 font-medium">{t(feature.label)}:</span>
                      <span className="text-green-400 text-right ml-4 font-semibold">{t(feature.value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper>
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-center text-green-400 mb-8">
              {t({
                JP: 'チームマザベジのマーケティング手順と利点',
                EN: 'Team Mazavege Marketing Process & Benefits'
              })}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {teamBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{t(benefit.title)}</h4>
                  <p className="text-sm text-gray-300">{t(benefit.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}