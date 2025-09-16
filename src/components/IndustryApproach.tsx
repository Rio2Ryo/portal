export default function IndustryApproach() {
  const industries = [
    {
      id: 1,
      title: "食品分野",
      subtitle: "生命力の向上",
      description: "スピルリナ等の高栄養スーパーフードにより人類の栄養状態を根本から改善します。",
      details: "機能性食品原材料は病気予防と健康寿命の延伸に貢献します。",
      icon: "🌱",
      color: "emerald"
    },
    {
      id: 2,
      title: "医薬品分野",
      subtitle: "自然治癒力の支援",
      description: "フィコシアニン、フコイダン、アスタキサンチン、EPA・DHAなどの天然由来の治療成分を生産します。",
      details: "副作用の少ない治療薬により、身体に負担をかけない医療の実現を目指します。",
      icon: "🛡️",
      color: "blue"
    },
    {
      id: 3,
      title: "工業品分野",
      subtitle: "地球に優しい製造",
      description: "バイオプラスチックや新素材の開発により石油依存からの脱却を実現します。",
      details: "持続可能な化学原料により環境負荷ゼロの工業製品を生産します。",
      icon: "🔧",
      color: "purple"
    },
    {
      id: 4,
      title: "養殖分野",
      subtitle: "海洋環境の回復",
      description: "水質浄化システムにより汚染された水域の自然回復を促進します。",
      details: "天然飼料により化学飼料に依存しない健康的な養殖を実現します。",
      icon: "🌊",
      color: "cyan"
    },
    {
      id: 5,
      title: "農業分野",
      subtitle: "土壌の再生",
      description: "バイオスティミュラントにより化学肥料を使わない豊かな土壌作りを推進します。",
      details: "土壌改良剤により疲弊した大地の自然回復力を向上させます。",
      icon: "🌾",
      color: "yellow"
    },
    {
      id: 6,
      title: "バイオマス分野",
      subtitle: "クリーンエネルギー",
      description: "バイオディーゼル、バイオエタノール、バイオガスの生産により化石燃料からの完全脱却を目指します。",
      details: "カーボンニュートラルによりCO₂排出量実質ゼロを実現します。",
      icon: "⚡",
      color: "green"
    },
    {
      id: 7,
      title: "エネルギー分野",
      subtitle: "持続可能な未来",
      description: "液体・気体燃料、電力生成により再生可能エネルギーの安定供給を実現します。",
      details: "エネルギー自給により各地域でのエネルギー独立を支援します。",
      icon: "⚡",
      color: "orange"
    },
    {
      id: 8,
      title: "FMCG分野",
      subtitle: "日常生活の革新",
      description: "洗剤、シャンプー、化粧品、衛生用品において環境負荷を最小限に抑えた生分解性の高い日用品を提供。",
      details: "持続可能な原材料により、人と地球に優しい毎日を実現します。",
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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-full text-sm mb-4">
            産業展開
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            地球再生の8つの産業アプローチ
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            AIB社の「マザーベジタブル」は多様な産業応用が期待されており、以下の8つの分野にて展開が始まっています。
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

        {/* 施設数と環境改善効果の関係 */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-emerald-500/20 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">施設数と環境改善効果の関係</h3>
          
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
            <p className="text-lg">
              藻類培養技術を用いた均一化生産システムの施設は太陽光発電および蓄電システムを有しており、自社エネルギーにて24時間365日稼働し、
              CO₂の安定的かつ効率的な吸収を実証済みであり、技術の商業化に向けた確固たるエビデンスを有しています。
            </p>
            
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <p className="text-lg font-semibold text-emerald-400 mb-4">
                MOTHER VEGETABLES施設の建設数と地球の健康改善効果は完全に比例関係にあります。
              </p>
              <p>
                1つの施設が年間X トンのCO₂削減を実現する場合、10の施設では10倍、100の施設では100倍、1000の施設では1000倍の効果が得られます。
                この数学的な比例関係により、施設を建設すればするほど大気中CO₂濃度が低下し、酸素濃度が向上します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

