import Image from 'next/image'

export default function Partners() {
  const governmentPartners = [
    {
      name: "BioNexus ステータス企業",
      subtitle: "マレーシア政府認可",
      description: "マレーシア政府の特別クラス・バイオテクノロジー企業として認定されており、バイオテクノロジー商業化の進歩のための実質的な財政的インセンティブ、税制優遇、制度的サポートへのアクセスを享受しています。",
      image: "/bionexus-DbMz1jYi.jpeg"
    },
    {
      name: "ASEAN",
      subtitle: "東南アジア諸国連合",
      description: "持続可能な水産養殖および農業セクターにおけるパートナーシップからの公式支援により、東南アジア全10カ国にわたる地域に責任を有し、実際的に実行可能な政策とシステムというASEANの共通ビジョンに貢献しています。",
      image: "/ASEAN-uoWrwKNH.jpeg"
    },
    {
      name: "ANGKASA",
      subtitle: "マレーシア政府機関",
      description: "16,000以上の協同組合と730万人の組合員を代表する協同組合開発庁の組合員として、1,596億収益455億を超える価値を有しており、マレーシアの中核経済活動における第一セクターとして重要な技術革新を果たしています。",
      image: "/ANGKASA-BAUWowhT.jpeg"
    }
  ]

  const academicPartners = [
    {
      name: "インベスト・セランゴール",
      subtitle: "政府機関",
      image: "/Invest_selangor-BU24U3lB.jpeg"
    },
    {
      name: "NEGERI PAHANG",
      subtitle: "パハン州政府",
      image: "/Negeri-dJn5D2--.jpeg"
    },
    {
      name: "YTAA",
      subtitle: "Yayasan Tengku Abdul Aziz Sultan Abu Bakar",
      description: "YTAAは社会影響のチャネルとして機能し、サブスクリプションの負担軽減、教育イニシアチブ、ヘルスケア用プログラムやマイクロファイナンスプロジェクトに直接資金を提供することを保証し、地域的な教育全体保健とサステナビリティにおけるエンジニアリングプロジェクトで協力しています。",
      image: "/YTAA.jpeg"
    }
  ]

  const corporatePartners = [
    {
      name: "九州電工",
      subtitle: "日本の大手電力会社",
      description: "日本の大手電力会社で実績（海藻の栽培）を造成することで、各目的の仕事として、この技術は高効率で実証済みであり、MOTHER VEGETABLESを活用した新しい産業の創出に向けて協力しています。",
      image: "/Kyushudenko.jpeg"
    },
    {
      name: "黒井漁業協同組合",
      subtitle: "日本の下関市に位置する漁業協同組合",
      description: "磯焼けによるダウンの大量発生と青潮に対して深刻な被害を受けており、MOTHER VEGETABLESの活用により、海洋環境の改善と持続可能な漁業の実現を目指しています。",
      image: "/kuroi-fishery-DSW6ddl8.jpeg"
    }
  ]

  const universityPartners = [
    {
      name: "ノッティンガム大学マレーシア校",
      image: "/Nottingham-DFhtfkra.jpeg"
    },
    {
      name: "マラヤ大学",
      image: "/UM-CuopK3W1.jpeg"
    },
    {
      name: "サインズ大学マレーシア",
      image: "/USM-DHEGJzFX.jpeg"
    },
    {
      name: "シンガポール国立大学",
      image: "/NUS-BabuExyP.jpeg"
    },
    {
      name: "明治大学",
      image: "/Meiji-C7G7ovOM.jpeg"
    },
    {
      name: "マヒドン大学",
      image: "/Mahidol-7ODll9ol.jpeg"
    }
  ]

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-500/20 border border-purple-500/50 text-purple-400 px-4 py-2 rounded-full text-sm mb-4">
            3. パートナー・提携組織
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            包括的なパートナーシップ
          </h2>
        </div>

        {/* Government Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-400 text-center mb-8">政府・公的機関</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governmentPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden bg-white/10">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{partner.name}</h4>
                <p className="text-blue-400 text-sm font-semibold mb-3">{partner.subtitle}</p>
                <p className="text-gray-300 text-xs leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic & Regional Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-emerald-400 text-center mb-8">学術機関・地域パートナー</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden bg-white/10">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{partner.name}</h4>
                <p className="text-emerald-400 text-sm font-semibold mb-3">{partner.subtitle}</p>
                {partner.description && (
                  <p className="text-gray-300 text-xs leading-relaxed">{partner.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-orange-400 text-center mb-8">企業パートナー</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corporatePartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden bg-white/10">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{partner.name}</h4>
                <p className="text-orange-400 text-sm font-semibold mb-3">{partner.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* University Partners */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 text-center mb-8">大学・研究機関</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {universityPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-white/10">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-sm font-semibold text-white">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

