'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function IndustryApproach() {
  const { t } = useLanguage()
  const industries = [
    {
      id: 1,
      title: t({ JP: "食品分野", EN: "Food Sector" }),
      subtitle: t({ JP: "生命力の向上", EN: "Enhancing Vitality" }),
      description: t({
        JP: "人間の必須栄養素を多く含んだ高栄養スーパーフードにより人類の栄養状態を根本から改善します。",
        EN: "Fundamentally improving human nutrition through nutrient-dense superfoods rich in essential nutrients."
      }),
      details: t({
        JP: "機能性食品原材料は病気予防と健康寿命の延伸に貢献します。",
        EN: "Functional food ingredients contribute to disease prevention and extending healthy life expectancy."
      }),
      icon: "🌱",
      color: "emerald"
    },
    {
      id: 2,
      title: t({ JP: "医薬品分野", EN: "Pharmaceutical Sector" }),
      subtitle: t({ JP: "自然治癒力の支援", EN: "Supporting Natural Healing" }),
      description: t({
        JP: "フィコシアニン、フコイダン、アスタキサンチン、EPA・DHAなどの天然由来の治療成分を生産します。",
        EN: "Producing naturally-derived therapeutic compounds such as phycocyanin, fucoidan, astaxanthin, EPA and DHA."
      }),
      details: t({
        JP: "副作用の少ない治療薬により、身体に負担をかけない医療の実現を目指します。",
        EN: "Aiming to realize medicine that doesn't burden the body through treatments with minimal side effects."
      }),
      icon: "🛡️",
      color: "blue"
    },
    {
      id: 3,
      title: t({ JP: "工業品分野", EN: "Industrial Products" }),
      subtitle: t({ JP: "地球に優しい製造", EN: "Earth-Friendly Manufacturing" }),
      description: t({
        JP: "バイオプラスチックや新素材の開発により石油依存からの脱却を実現します。",
        EN: "Achieving independence from petroleum through development of bioplastics and new materials."
      }),
      details: t({
        JP: "持続可能な化学原料により環境負荷ゼロの工業製品を生産します。",
        EN: "Producing zero environmental impact industrial products using sustainable chemical raw materials."
      }),
      icon: "🔧",
      color: "purple"
    },
    {
      id: 4,
      title: t({ JP: "養殖分野", EN: "Aquaculture Sector" }),
      subtitle: t({ JP: "海洋環境の回復", EN: "Ocean Environment Recovery" }),
      description: t({
        JP: "水質浄化システムにより汚染された水域の自然回復を促進します。",
        EN: "Promoting natural recovery of polluted waters through water purification systems."
      }),
      details: t({
        JP: "天然飼料により化学飼料に依存しない健康的な養殖を実現します。",
        EN: "Achieving healthy aquaculture independent of chemical feeds through natural feed."
      }),
      icon: "🌊",
      color: "cyan"
    },
    {
      id: 5,
      title: t({ JP: "農業分野", EN: "Agriculture Sector" }),
      subtitle: t({ JP: "土壌の再生", EN: "Soil Regeneration" }),
      description: t({
        JP: "バイオスティミュラントにより化学肥料を使わない豊かな土壌作りを推進します。",
        EN: "Promoting rich soil creation without chemical fertilizers through biostimulants."
      }),
      details: t({
        JP: "土壌改良剤により疲弊した大地の自然回復力を向上させます。",
        EN: "Enhancing natural recovery of exhausted land through soil improvement agents."
      }),
      icon: "🌾",
      color: "yellow"
    },
    {
      id: 6,
      title: t({ JP: "バイオマス分野", EN: "Biomass Sector" }),
      subtitle: t({ JP: "クリーンエネルギー", EN: "Clean Energy" }),
      description: t({
        JP: "バイオディーゼル、バイオエタノール、バイオガスの生産により化石燃料からの完全脱却を目指します。",
        EN: "Aiming for complete independence from fossil fuels through production of biodiesel, bioethanol, and biogas."
      }),
      details: t({
        JP: "カーボンニュートラルによりCO₂排出量実質ゼロを実現します。",
        EN: "Achieving net-zero CO₂ emissions through carbon neutrality."
      }),
      icon: "♻️",
      color: "green"
    },
    {
      id: 7,
      title: t({ JP: "エネルギー分野", EN: "Energy Sector" }),
      subtitle: t({ JP: "持続可能な未来", EN: "Sustainable Future" }),
      description: t({
        JP: "液体・気体燃料、電力生成により再生可能エネルギーの安定供給を実現します。",
        EN: "Achieving stable supply of renewable energy through liquid/gas fuels and power generation."
      }),
      details: t({
        JP: "エネルギー自給により各地域でのエネルギー独立を支援します。",
        EN: "Supporting energy independence in each region through energy self-sufficiency."
      }),
      icon: "⚡",
      color: "orange"
    },
    {
      id: 8,
      title: t({ JP: "FMCG分野", EN: "FMCG Sector" }),
      subtitle: t({ JP: "日常生活の革新", EN: "Innovation in Daily Life" }),
      description: t({
        JP: "洗剤、シャンプー、化粧品、衛生用品において環境負荷を最小限に抑えた生分解性の高い日用品を提供。",
        EN: "Providing highly biodegradable daily products with minimal environmental impact in detergents, shampoos, cosmetics, and hygiene products."
      }),
      details: t({
        JP: "持続可能な原材料により、人と地球に優しい毎日を実現します。",
        EN: "Realizing a daily life that is kind to people and the Earth through sustainable raw materials."
      }),
      icon: "📦",
      color: "pink"
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      emerald: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
      green: "bg-green-500/10 border-green-500/30 text-green-400",
      orange: "bg-orange-500/10 border-orange-500/30 text-orange-400",
      pink: "bg-pink-500/10 border-pink-500/30 text-pink-400"
    }
    return colorMap[color] || "bg-gray-500/10 border-gray-500/30 text-gray-400"
  }

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            {t({ JP: '8つの産業アプローチ', EN: '8 Industry Approaches' })}
          </h3>
          <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto">
            {t({
              JP: '「マザーベジタブル」は多様な産業応用が期待されており、以下の8つの分野にて展開が始まっています。',
              EN: 'Mother Vegetable are expected to have diverse industrial applications, with deployment beginning in the following 8 sectors.'
            })}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${getColorClasses(industry.color)}`}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-2">{industry.id}. {industry.title}</h3>
                <p className="font-semibold text-sm opacity-80">{industry.subtitle}</p>
              </div>
              
              <div className="space-y-3 text-sm text-gray-300">
                <p>{industry.description}</p>
                <p className="text-xs opacity-75">{industry.details}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

