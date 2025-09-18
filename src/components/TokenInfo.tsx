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


        {/* Pre-registration Section */}
        <div className="text-center">
          <div className="bg-gradient-to-b from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-12 max-w-3xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              登録受付中
            </h3>
            <p className="text-gray-300 text-center mb-8 text-lg">
              プレセールなどの最新情報を受け取る
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => window.location.href = 'mailto:info@mothervegetables.com'}
                className="bg-gradient-to-r from-green-400 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
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

