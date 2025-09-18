'use client'

export default function ProjectOverview() {
  return (
    <section id="project-overview" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-2 rounded-full text-sm mb-12">
            1. エグゼクティブサマリー
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            ２つのオンリーワン
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-5xl mx-auto leading-relaxed">
            MOTHER VEGETABLES PROJECTは、地球と全ての生命の健康回復を目指す革命的な環境再生プロジェクトです。
            マザーベジタブルファクトリーを世界各地に展開することで、マザーベジタブルを生産し、8つの産業分野に供給します。
            このプロセスにおいて、各施設は24時間365日CO₂を吸収し酸素を生成することで大気を浄化し、
            同時に生産されるマザーベジタブル製品は人間と生物の健康向上に直接貢献します。
          </p>
        </div>

        {/* Main Content - Single Block */}
        <div className="bg-gray-900/50 backdrop-blur-md border border-green-500/20 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - 01 */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0  opacity-50"></div>
                  <div className="relative bg-black px-6 py-3">
                    <span className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">01</span>
                  </div>
                </div>
              </div>

              {/* 驚異的なカーボンクレジット */}
              <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-lg mb-6">
                <h4 className="text-lg font-bold text-green-400 mb-3">驚異的なカーボンクレジット</h4>
                <p className="text-gray-300">
                  MOTHER VEGETABLESのCO₂吸収効率は天然芝と比較すると
                  <span className="text-green-400 font-bold"> およそ700倍</span>となるため、
                  世界中に建設できれば地球温暖化問題を急速に解決できる可能性を秘めています。
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <div className="w-full max-w-xs h-48 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/mv-factory-whole.jpg"
                      alt="MOTHER VEGETABLES培養システム"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full max-w-xs h-48 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/mv-factory-greenhouse.jpg"
                      alt="MOTHER VEGETABLESファクトリー建物"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-4 pb-4 mt-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  本プロジェクトは実証フェーズを完了し、マレーシアにて秘密裏にパイロットプラントが24時間365日稼働中です。マザーベジタブル培養技術による均一化生産システムを確立し、CO₂の安定的吸収を実証済み。さらにASEAN諸国の政府機関や大学・研究機関との戦略的パートナーシップにより、国際的な協力体制を構築。「既に稼働している実証施設」と「国際的な官学連携」が本プロジェクトの強力な競争優位性となっています。
                </p>
              </div>
              </div>

             
            </div>

            {/* Right Section - 02 */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 opacity-50"></div>
                  <div className="relative px-6 py-3">
                    <span className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">02</span>
                  </div>
                </div>
              </div>

              {/* 地球最初の生命体とは */}
              <div className="pt-6 pb-6 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="text-lg font-bold text-green-400 mb-3">地球最初の生命体とは</h4>
                <p className="text-gray-300">
                  地球の最初の生物を創った「マザーベジタブル」の構造を分析して現在に再現した生命体を示します。
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/mazavege.jpg"
                      alt="マザーベジタブル"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                 {/* 地球最初の生命体ができること */}
              <div className="mt-6 p-6">
                <h4 className="text-lg font-bold text-green-400 mb-3">地球最初の生命体ができること</h4>
                <p className="text-gray-300">
                  最初の生命体が人類まで至っている進化の中で様々なものを創ることができます。例えば、たった1つの生命体から人類に必要な栄養素を30種類以上含んだスーパーフードを提供することができたり、地球上にすでに存在するものの成分が同じ代替品を創ることもできます。様々なものが作れるようになった中で我々は8つの産業に分類してそれぞれに対してマザーベジタブルを核に展開しています。
                </p>
              </div>
              </div>             
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}