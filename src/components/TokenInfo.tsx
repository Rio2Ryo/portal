'use client'

export default function TokenInfo() {
  const downloadWhitepaper = () => {
    const link = document.createElement('a')
    link.href = '/0912_whitepaper_ja.pdf'
    link.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="token" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 border border-orange-500/50 text-orange-400 px-4 py-2 rounded-full text-sm mb-4">
            5. トークン情報
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            MOTHER VEGETABLESトークン
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            地球再生プロジェクトへの参加と投資機会を提供するトークンエコシステム
          </p>
        </div>

        {/* Token Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🪙</span>
            </div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4">ユーティリティトークン</h3>
            <p className="text-gray-300">
              プロジェクトの成長と共に価値が向上し、
              エコシステム内での様々な用途に使用可能
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">環境貢献証明</h3>
            <p className="text-gray-300">
              トークン保有により地球環境改善への
              直接的な貢献を証明
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">収益分配権</h3>
            <p className="text-gray-300">
              施設運営による収益の一部を
              トークンホルダーに分配
            </p>
          </div>
        </div>

        {/* Token Economics */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-orange-500/20 rounded-xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">トークンエコノミクス</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-orange-400 mb-4">トークンの用途</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  施設建設への投資参加
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  製品購入時の割引適用
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  ガバナンス投票への参加
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  ステーキング報酬の獲得
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-orange-400 mb-4">価値創造メカニズム</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  施設数増加による需要拡大
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  8産業分野での収益創出
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  カーボンクレジット収益
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  グローバル展開による規模効果
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              地球再生プロジェクトに参加しませんか？
            </h3>
            <p className="text-gray-300 mb-6">
              詳細な情報とトークンの仕組みについては、
              ホワイトペーパーをダウンロードしてご確認ください。
            </p>
            <button
              onClick={downloadWhitepaper}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              📄 ホワイトペーパーをダウンロード
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gray-800/50 border border-gray-700/50 rounded-full px-6 py-3">
            <span className="text-emerald-400 mr-2">✨</span>
            <span className="text-white font-semibold">Made with Manus</span>
          </div>
        </div>
      </div>
    </section>
  )
}

