import Image from 'next/image'

export default function TeamMembers() {
  const teamMembers = [
    {
      name: "ジャグ・カウラ（Jag Kaurah）",
      title: "Algae International Berhad 創設者・最高技術責任者",
      description: "2006年より微細藻類技術開発に専念し、2008年に業界を変革する画期的特許【WO2008105649A1】を取得、同年にAlgae International Berhadを設立。藻類バイオマス生産コストの劇的削減を実現し、気候制御透明建物での多層培養システムにより、藻類と野菜の統合生産を可能にしています。",
      image: "/jag-kaurah-new-CQleZ5Mz.jpeg",
      company: "Algae International Berhad",
      companyColor: "text-blue-400"
    },
    {
      name: "エロール・ペレラ（Errol Perera）",
      title: "Revoganix株式会社 代表取締役 / ASEAN持続可能農業アドバイザー",
      description: "持続可能農業、水産養殖、微生物学分野における35年以上の専門知識を有するペレラ氏は、ASEAN事務局のチーフコンサルタントおよびスリランカ水産大臣の公式アドバイザーを歴任しています。アジア全域における有機農業の発展と革新的水産養殖システムに及ぶ広範囲な経験により、貴重な地域専門知識と政府関係を提供しています。",
      image: "/errol-perera-new-DFc7csDu.jpeg",
      company: "Revoganix株式会社",
      companyColor: "text-green-400"
    },
    {
      name: "松浦 亮介（Matsuura Ryosuke）",
      title: "Algae International Japan株式会社 代表取締役",
      description: "京都大学大学院にて数理工学を専攻。大手IT企業での豊富な研究開発経験を経て、デジタルマーケティング分野に転身し、現在はサステナビリティとイノベーション分野のイニシアチブをリードしています。技術的専門性とビジネス手腕の独特な組み合わせにより、テクノロジーと環境ソリューションの融合における主要な推進力として位置づけられています。",
      image: "/matsuura-ryosuke-new.jpeg",
      company: "Algae International Japan株式会社",
      companyColor: "text-purple-400"
    },
    {
      name: "熊木 景（Kumaki Kei）",
      title: "dotpb株式会社 代表取締役",
      description: "日本のペット教育分野において日本一の実績を獲得しています。デジタル領域への専門性の拡張に成功し、高度なマーケティングおよびブランディング戦略を適用して、複数の産業において新たな価値を創造しています。その実績は、専門的知識をより広範な市場応用へとスケールする卓越した能力を実証しています。",
      image: "/kumaki-kei-new.jpeg",
      company: "dotpb株式会社",
      companyColor: "text-orange-400"
    }
  ]

  return (
    <section id="team" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-500/20 border border-blue-500/50 text-blue-400 px-4 py-2 rounded-full text-sm mb-12">
            2. チームメンバー
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            コアメンバー
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className={`font-semibold mb-4 ${member.companyColor}`}>
                    {member.title}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}