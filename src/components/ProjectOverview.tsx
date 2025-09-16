export default function ProjectOverview() {
  return (
    <section id="project-overview" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-full text-sm mb-4">
            1. エグゼクティブサマリー
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            プロジェクトの根本使命
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            MOTHER VEGETABLES PROJECTは、地球と全ての生命の健康回復を目指す革命的な環境再生プロジェクトです。
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - 地球再生の仕組み */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-emerald-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">地球再生の仕組み</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                MOTHER VEGETABLES施設を世界各地に展開することで、マザーベジタブルを生産し、8つの産業分野に供給します。
                このプロセスにおいて、各施設は24時間365日CO₂を吸収し酸素を生成することで大気を浄化し、
                同時に生産される藻類製品は人間と生物の健康向上に直接貢献します。
              </p>
            </div>

            {/* 驚異的な効率性 */}
            <div className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
              <h4 className="text-lg font-bold text-emerald-400 mb-3">驚異的な効率性</h4>
              <p className="text-gray-300">
                MOTHER VEGETABLESのCO₂吸収効率は天然芝と比較すると
                <span className="text-emerald-400 font-bold"> およそ700倍</span>となるため、
                世界中に建設できれば地球温暖化問題を急速に解決できる可能性を秘めています。
              </p>
            </div>
          </div>

          {/* Right Column - 建設すればするほど地球が健康になる */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-emerald-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">建設すればするほど地球が健康になる</h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-emerald-500/10 rounded-lg">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                <div>
                  <span className="text-white font-semibold">1つの施設</span>
                  <span className="text-gray-300"> = 24時間365日のCO₂吸収・酸素生成</span>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-emerald-500/10 rounded-lg">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                <div>
                  <span className="text-white font-semibold">10の施設</span>
                  <span className="text-gray-300"> = 10倍の環境改善効果</span>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-emerald-500/10 rounded-lg">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                <div>
                  <span className="text-white font-semibold">100の施設</span>
                  <span className="text-gray-300"> = 地域全体の空気質向上</span>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-emerald-500/10 rounded-lg">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                <div>
                  <span className="text-white font-semibold">1000の施設</span>
                  <span className="text-gray-300"> = 地球規模の環境再生</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 人類への恩恵の拡大プロセス */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">人類への恩恵の拡大プロセス</h3>
          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-12">
            マザーベジタブル技術を核とした藻類培養施設が世界各地に建設されることで、8つの産業分野への展開が可能となります。
            これらすべての産業展開により、地球全体の健康向上が実現されます。
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-blue-400 mb-2">大気質の改善</h4>
              <p className="text-gray-300 text-sm">CO₂削減と酸素生成</p>
            </div>

            <div className="text-center p-6 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-green-400 mb-2">生物多様性の回復</h4>
              <p className="text-gray-300 text-sm">自然環境の再生</p>
            </div>

            <div className="text-center p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-red-400 mb-2">人類の健康増進</h4>
              <p className="text-gray-300 text-sm">栄養価の高い食品</p>
            </div>

            <div className="text-center p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-yellow-400 mb-2">持続可能な経済発展</h4>
              <p className="text-gray-300 text-sm">新産業の創出</p>
            </div>
          </div>
        </div>

        {/* ビジョンステートメント */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">ビジョンステートメント</h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            環境保全のパラダイムをコスト中心型から収益創出型へと転換し、実証済みの藻類培養技術により
            地球と投資家の双方に利益をもたらす自立持続型エコシステムを構築することが我々の使命です。
          </p>
        </div>
      </div>
    </section>
  )
}

