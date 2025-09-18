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
    <section id="token" className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 border border-orange-500/50 text-orange-400 px-4 py-2 rounded-full text-sm mb-12">
            5. トークン情報
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            MOTHER VEGETABLES Token (MVT)情報
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto">
            MOTHER VEGETABLES Token（MVT）はマザーベジタブルファクトリーと直接接続されたユーティリティトークンとして機能し、核心的ユーティリティを提供します。
          </p>
          <div className="mt-8">
            <img
              src="/mvt-coin.png"
              alt="MVT Token Logo"
              className="w-48 h-48 mx-auto"
            />
          </div>
        </div>

        {/* Token Details */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">トークン名称</p>
              <p className="text-white font-bold text-lg">MOTHER VEGETABLES Token</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">ティッカーシンボル</p>
              <p className="text-white font-bold text-lg">$MVT</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">ブロックチェーン</p>
              <p className="text-white font-bold text-lg">Ethereum</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">トークン規格</p>
              <p className="text-white font-bold text-lg">ERC-20</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">総発行量</p>
              <p className="text-white font-bold text-lg">10,000,000,000 (10 billion)</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">コントラクトアドレス</p>
              <p className="text-white font-bold text-lg">0x●●●●</p>
            </div>
          </div>
        </div>

        {/* Token Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">資金調達手段</h3>
            <p className="text-gray-300 text-sm">
              IEOおよび市場流通により、世界各国での生産拠点構築・拡張資金を調達
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-4">ステーキング参加</h3>
            <p className="text-gray-300 text-sm">
              投資家がMVTトークンを預け入れ、運営施設からの実際のCO₂吸収指標に基づくNFT報酬を受け取ることができるスマートコントラクトベースのステーキングプール
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">NFT取引</h3>
            <p className="text-gray-300 text-sm">
              CO₂吸収連動NFTはパートナーおよびオープンマーケットプレイスにて自由に取引可能であり、環境貢献検証と二次市場取引による経済的価値の両方を創出
            </p>
          </div>
        </div>


        {/* Pre-registration Section */}
        <div className="text-center">
          <div className="bg-gradient-to-b from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-12 max-w-3xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              事前登録受付中
            </h3>
            <p className="text-gray-300 text-center mb-8 text-lg">
              プレセールなどの最新情報を受け取る
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => window.location.href = 'mailto:info@mothervegetables.com'}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                登録する
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

