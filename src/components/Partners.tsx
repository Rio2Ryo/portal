import Image from 'next/image'

interface Partner {
  name: string;
  description: string;
  image: string;
  subtitle?: string;
}

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
    },
    {
      name: "インベスト・セランゴール",
      subtitle: "政府機関",
      description: "セランゴール州政府が提供する優遇支援エコシステムのメンバーです。このエコシステムには、効率的な行政プロセス、カスタマイズされたインセンティブパッケージ、業界別プログラム、ネットワークやインフラへのアクセスが含まれています。これにより、マレーシアで最も経済的に活発な州の一つで、プロジェクトの成功を促進することを目指しています。",
      image: "/Invest_selangor-BU24U3lB.jpeg"
    },
    {
      name: "NEGERI PAHANG",
      subtitle: "パハン州政府",
      description: "マレーシア、パハン州の投資・産業・科学・技術・イノベーション委員会の委員長（パハン州政府）は、特に収穫量の増加、効率、生産性の向上のための技術と近代的な農業手法の使用を通じて、パハン州の農業セクターの経済発展を強化するMother Vegetablesへの提案された投資に対する支援を私たちに与えてくれました。パハン州の投資・産業・科学・技術・イノベーション担当執行委員会は、土地、資本、ネットワークを連携させて、大規模な持続可能な農業イニシアチブを加速させる触媒的な役割を果たしています。このパートナーシップは、民間セクターの投資とマレーシアの国家食料安全保障目標との連携を強化します。",
      image: "/Negeri-dJn5D2--.jpeg"
    },
    {
      name: "YTAA",
      subtitle: "Yayasan Tengku Abdul Aziz Sultan Abu Bakar",
      description: "YTAAは社会影響のチャネルとして機能し、サブスクリプションの負担軽減、教育イニシアチブ、ヘルスケア用プログラムやマイクロファイナンスプロジェクトに直接資金を提供することを保証し、地域的な教育全体保健とサステナビリティにおけるエンジニアリングプロジェクトで協力しています。",
      image: "/YTAA.jpeg"
    }
  ]

  const japaneseAuthorities = [
    {
      name: "食品産業・商品・地域開発省（M-FICoRD）サラワク州",
      description: "包括的な技術分析提案：サラワク州パダンアイ貯水池におけるテイラピア育成システム。地域の水資源を活用した持続可能な養殖モデルの確立と地域経済の活性化を目指しています。",
      image: "/m-ficord.jpeg"
    },
    {
      name: "河津町（日本）",
      description: "日本におけるMother Vegetablesを核とした包括的な事業提携による海洋産業の振興。",
      image: "/kawazu-town.jpeg"
    },
    {
      name: "静岡県（日本）",
      description: "海洋産業発展および持続可能技術実装のための包括的な県レベル支援システムを提供しています。",
      image: "/shizuoka-prefecture.jpeg"
    },
    {
      name: "東京都板橋区（日本）",
      description: "海洋産業発展および持続可能技術実装のための包括的な県レベル支援システムを提供しています。",
      image: "/itabashi-ward.jpeg"
    },
    {
      name: "水産庁（日本）",
      description: "日本における海洋産業の振興とMother Vegetablesの導入支援",
      image: "/fisheries-agency.jpeg"
    }
  ]

  const internationalOrganizations = [
    {
      name: "東アジア経済研究所（ERIA）",
      description: "ASEAN持続可能農業に関する地域ガイドライン実施のための実践的行動計画および持続可能な農業食料システムに関する予備調査研究において協力しています。",
      image: "/eria.jpeg"
    },
    {
      name: "日本-ASEAN統合基金",
      description: "水産養殖および畜産セクターにおける抗菌剤耐性（AMR）対策としての生物的防除剤（BCA）応用に関する実証プロジェクトへの支援を提供しています。",
      image: "/jaif.jpeg"
    }
  ]

  const otherPartners = [
    {
      name: "Revoganix（レヴォガニクス）",
      description: "ASEANパネル企業として認められており、ASEAN持続可能な農業・水産養殖アカデミーの設立や地域のBCA（生物的防除剤）生産イニシアチブなど、ASEANから直接授与された複数の影響力の大きいプロジェクトを任されています。ASEAN以外では、Revoganixはサラワク州のコンサルタントを務め、タイ中央政府の水産養殖セクターと緊密に協力するなど、他の戦略的関与も行っています。この実績のある実績により、RevoganixはMother VegetablesスプロジェクトでASEANを支援し、提携できることを誇りに思い、地域全体のコミュニティに利益をもたらす農業と水産養殖のための堅牢で持続可能なモデルを構築するために、その専門知識とリーダーシップを貢献しています。",
      image: "/revoganix.jpeg"
    },
    {
      name: "バイオエコノミーコーポレーション",
      description: "農業廃棄物をクリーンな食品に変えるプロジェクトエンゲージメント。持続可能なバイオエコノミーの推進と廃棄物の有効活用を通じた循環型経済の実現に取り組んでいます。",
      image: "/bioeconomy.jpeg"
    },
    {
      name: "テマセクポリテクニック・水産養殖イノベーションセンター",
      description: "ティラピア飼料における生物的防除剤（BCA）の革新的な応用：オープンポンドタンク水産養殖における成長と耐病性の向上。最新の養殖技術と天然由来の防除剤を組み合わせた革新的な養殖システムの開発を推進しています。",
      image: "/temasek.jpeg"
    },
    {
      name: "Cropabl（マレーシア）",
      description: "20年以上にわたって非侵襲的かつ無化学物質の農業に取り組んできたパイオニア的企業であり、食料安全保障と持続可能な農業実践を推進するために政府機関との強力なパートナーシップを築いてきました。確立されたグリーンファーミング技術を活用し、現在はマレーシアのMOTHER VEGETABLESを支援し、モジュール型農業ソリューションの開発に協力しています。この取り組みの一環として、MOTHER VEGETABLESと緊密に連携し、ペラ州タンジョン・マリムにおいて10エーカー規模の旗艦プロジェクトを実施し、食料安全保障と環境保全に関する国家目標に沿った持続可能な食料生産のモデルを創出します",
      image: "/cropabl.jpeg"
    },
    {
      name: "Sabah Invest",
      description: "サバ州政府とのパートナーシップのもとでMOTHER VEGETABLESプロジェクトの実施を強力に支援する意向を示しています。この取り組みは、輸入食品への依存度が高いサバを、自給自足が可能で輸出余剰を生み出せる州へと変革することを目指しています。MOTHER VEGETABLESの先進的な持続可能農業技術を採用することで、このプロジェクトは食料安全保障を強化し、外部のサプライチェーンへの依存を減らし、サバを農業・食品生産の地域的リーダーへと押し上げます。この変革は、地域のレジリエンスを高めるだけでなく、輸出市場の開拓を通じて新たな経済的機会を創出し、州の長期的な繁栄と持続可能性に貢献します。",
      image: "/sabah-invest.jpeg"
    },
    {
      name: "Healcom Foundation",
      description: "MOTHER VEGETABLESの取り組みに賛同し、地域社会に最高品質で健康的かつ持続可能に栽培された食品を届ける可能性を高く評価しています。財団はその広範な会員ネットワークを通じて、認知度向上の推進、生産活動の支援、販売チャネルの強化に積極的に関与します。MOTHER VEGETABLESと提携することで、Healcom Foundationは公衆衛生と栄養改善という自身の使命を推進するだけでなく、地域産の無化学食品の持続可能な市場を創出し、消費者と地域社会全体に利益をもたらします。",
      image: "/healcom.jpeg"
    },
    {
      name: "全国姉妹漁業振興協議会株式会社",
      description: "河津町との連携による海洋事業開発とMother Vegetables事業の推進。全国の漁業組合の連絡窓口を実施。",
      image: "/sfc.jpeg"
    },
    {
      name: "日本PTA",
      description: "日本では、小学生の保護者600万人がPTAに登録されています。保護者と教師の会プロジェクト：全国の選ばれた小学校でオリンピック選手とのイベントを開催し、子供たちがマザーベジタブルを体験し、栄養について学びます。これらのプログラムは、将来の研究者を育成し、学校給食の基準の改善を促すため、PTAから高く評価されています。",
      image: "/pta.jpeg"
    },
    {
      name: "LEON",
      description: "アパレル雑誌LEONの不動産部門：20年以上の歴史を持つ日本の紳士向けアパレル雑誌で、40代から50代の富裕層をターゲットとし、月間約1,000万ページビューを誇ります。プロジェクト：彼らは日本全国に高級宿泊施設を建設する計画で、そこには家族がマザーベジタブルを体験し、地元の収穫物で作られた食事を楽しめるMother Vegetables施設が併設されます。",
      image: "/leon.jpeg"
    },
    {
      name: "JTB総合研究所",
      description: "JTBツーリズムリサーチ＆コンサルティング：日本最大の旅行代理店であり、世界最大級の旅行代理店の1つ。海洋産業の推進とエデングリーン関連製品の事業開発支援のためのパートナーシップ",
      image: "/jtb-logo.svg"
    },
    {
      name: "九州電工",
      description: "日本の大手電力会社：藻場（海藻の群落）を造成することで、魚貝類の住処としての機能や水質浄化、さらにはCO₂固定機能を活かした藻場再生の実用化研究に2001年度から取り組んでいます。MOTHER VEGETABLESを活用したバイオマスにより生産性の向上を検討している。",
      image: "/Kyushudenko.jpeg"
    },
    {
      name: "黒井漁業協同組合",
      description: "日本の下関市に位置する漁協組合：磯焼けによる空ウニの大量発生や養殖に対して課題を持っており、MOTHER VEGETABLESを活用することで局所的な磯焼け解決や効率的な養殖を進めている。",
      image: "/kuroi-fishery-DSW6ddl8.jpeg"
    }
  ]

  const universityPartners = [
    {
      name: "ノッティンガム大学",
      description: "大学構内における3エーカーの施設をMother Vegetables事業に提供する戦略的協力体制を構築し、研究開発の発展のため尊敬されるバイオテクノロジーチームによるサポートを受けています。",
      image: "/Nottingham-DFhtfkra.jpeg"
    },
    {
      name: "シンガポール国立大学",
      description: "農業や水産養殖、生物的防除剤、製品開発の分野において、科学的専門知識と革新を提供するパートナーシップを結んでいます。私たちの活動の基盤となる科学を強化し、イニシアチブが最先端の研究に基づいていることを確保することが重要です。彼らの支援を受けて、特に私たちの主力プロジェクトであるMother Vegetablesプロジェクトを通じて、持続可能なソリューションの開発と商業化を加速することが可能になります。",
      image: "/NUS-BabuExyP.jpeg"
    },
    {
      name: "マラヤ大学",
      description: "マレーシアの最高学府であるマラヤ大学と研究開発分野で連携しています。同大学の優れた学術的知見と科学技術の専門性により、私たちの技術革新が大きく前進しています。この産学連携を通じて、持続可能な発展と社会実装を目指した研究開発を共同で進めており、Mother Vegetablesプロジェクトの科学的基盤を強化しています。",
      image: "/UM-CuopK3W1.jpeg"
    },
    {
      name: "マレーシア科学大学",
      description: "微細藻類研究の分野で国際的に高い評価を受けているマレーシア科学大学と共同研究を実施しています。同大学の専門知識と研究施設を活用し、微細藻類の可能性を最大限に引き出す技術開発を進めています。持続可能な社会の実現に向けて、基礎研究から応用開発まで幅広い分野で協力関係を構築しています。",
      image: "/USM-DHEGJzFX.jpeg"
    },
    {
      name: "マレーシア国民大学",
      description: "Mother Vegetablesプロジェクトの革新性と持続可能性に高い関心を示していただき、全面的な支援を受けています。現在、大学キャンパス内にMother Vegetables施設を設置する計画が進行中で、教育・研究・社会実装を一体化した新しいモデルの構築を目指しています。科学技術の発展と社会課題の解決に向けて、包括的な産学連携を推進しています。",
      image: "/ukm.jpeg"
    },
    {
      name: "マヒドン大学",
      description: "タイを代表する研究大学と共同で、家畜飼料における生物的防除剤（BCA）の革新的な応用研究を実施しています。畜産分野における成長促進と疾病耐性向上を目的とした実証実験を進めており、東南アジア地域の畜産業の持続可能な発展に貢献しています。",
      image: "/Mahidol-7ODll9ol.jpeg"
    },
    {
      name: "明治大学",
      description: "体育会競技者に対してMother Vegetables関連製品を提供するスポンサーシップ協力により、持続可能な栄養ソリューションを通じたスポーツパフォーマンスの支援を実施しています。",
      image: "/Meiji-C7G7ovOM.jpeg"
    }
  ]

  return (
    <section id="partners" className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-500/20 border border-purple-500/50 text-purple-400 px-4 py-2 rounded-full text-sm mb-12">
            3. パートナー・提携組織
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            パートナーシップ
          </h2>
        </div>

        {/* Government Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-400 text-center mb-8">政府・公的機関・地域パートナー</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governmentPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain p-4 drop-shadow-md"
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 160px, 160px"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{partner.name}</h4>
                <p className="text-blue-400 text-sm font-semibold mb-3">{partner.subtitle}</p>
                <p className="text-gray-300 text-xs leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* University Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-cyan-400 text-center mb-8">学術・研究機関</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {universityPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain p-4 drop-shadow-md"
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 160px, 160px"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{partner.name}</h4>
                {partner.description && (
                  <p className="text-gray-300 text-xs leading-relaxed">{partner.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Japanese Authorities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-400 text-center mb-8">行政・地方自治体</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {japaneseAuthorities.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain p-4 drop-shadow-md"
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 160px, 160px"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{partner.name}</h4>
                {partner.description && (
                  <p className="text-gray-300 text-xs leading-relaxed">{partner.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* International Organizations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-400 text-center mb-8">国際機関</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalOrganizations.map((org, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg overflow-hidden">
                  <Image
                    src={org.image}
                    alt={org.name}
                    fill
                    className="object-contain p-4 drop-shadow-md"
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 160px, 160px"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{org.name}</h4>
                <p className="text-gray-300 text-xs leading-relaxed">{org.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Partners */}
        <div>
          <h3 className="text-2xl font-bold text-orange-400 text-center mb-8">その他の提携組織・プロジェクト</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain p-4 drop-shadow-md"
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 160px, 160px"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{partner.name}</h4>
                {(partner as Partner).subtitle && (
                  <p className="text-orange-400 text-sm font-semibold mb-3">{(partner as Partner).subtitle}</p>
                )}
                <p className="text-gray-300 text-xs leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

