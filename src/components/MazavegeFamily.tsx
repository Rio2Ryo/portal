'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s1" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 flex justify-center mb-8">
        <img src="/htu.png" alt="HTU" className="w-full max-w-60 md:max-w-96 h-auto" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "ドライフード", EN: "Dry Food" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u1.jpg"
                    alt="Dry Food"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Foreverをドライフードに混ぜ込む", EN: "MAZEKOMU Forever over dry food" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 10kg以上用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【体重10kg以上のペット用推奨量】", EN: "【Recommended amount for pets 10kg and over】" })}</p>
                      <p>{t({ JP: "①ドライフード - 適量", EN: "①Dry food – as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                    </div>

                    {/* 10kg未満用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【体重10kg未満のペット用推奨量】", EN: "【Recommended amount for pets under 10kg】" })}</p>
                      <p>{t({ JP: "①ドライフード - 適量", EN: "①Dry food – as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="mt-4">{t({ JP: "*Foreverを30mlの水で混ぜてから、ドライフードにかけてください。", EN: "*Mix Forever with 30ml of water, then pour it over dry food." })}</p>
                    <p className="text-xs md:text-sm">{t({ JP: "(乾燥したまま使用すると、ペットの息で粉末が空気中に舞う可能性があります。)", EN: "(If used dry, the powder may be blown into the air by your pet's breath.)" })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u2 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "ウェットフード", EN: "Wet food" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u2.jpg"
                    alt="Wet food"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Foreverをウェットフードに混ぜ込む", EN: "MAZEKOMU Forever over wet food" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 10kg以上用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【体重10kg以上のペット用推奨量】", EN: "【Recommended amount for pets 10kg and over】" })}</p>
                      <p>{t({ JP: "①ウェットフード - 適量", EN: "①Wet food – as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                    </div>

                    {/* 10kg未満用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【体重10kg未満のペット用推奨量】", EN: "【Recommended amount for pets under 10kg】" })}</p>
                      <p>{t({ JP: "①ウェットフード - 適量", EN: "①Wet food – as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="mt-4">{t({ JP: "*給餌前によく混ぜてください。", EN: "*Mix well before feeding." })}</p>
                    <p className="text-xs md:text-sm">{t({ JP: "(乾燥したまま使用すると、ペットの息で粉末が空気中に舞う可能性があります。)", EN: "(If used dry, the powder may be blown into the air by your pet's breath.)" })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u3 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "飲み水", EN: "Drinking water" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u3.jpg"
                    alt="Drinking water"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Foreverを飲み水に混ぜ込む", EN: "MAZEKOMU Forever into drinking water" })}
                  </h3>
                  {/* 推奨量 */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="font-semibold">{t({ JP: "【推奨量】", EN: "【Recommended amount】" })}</p>
                    <p>{t({ JP: "①飲み水 - ", EN: "①Drinking water – " })}<span style={{ color: '#4ade80' }}>50ml</span></p>
                    <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1/4本", EN: "1/4 stick" })}</span></p>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="text-xs md:text-sm">{t({ JP: "*中型犬や大型犬、または白い毛のペットは勢いよく飲むことがあるため、スプーンを使用して体や周囲に飛び散らないようにしてください。", EN: "*Since pets, especially medium and large dogs or those with white fur, may drink vigorously, please use a spoon to avoid splashing on their bodies or nearby areas." })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u4 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "おやつ", EN: "Treat" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u4.jpg"
                    alt="Treat"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Foreverをおやつに混ぜ込む", EN: "MAZEKOMU Forever over treats" })}
                  </h3>
                  {/* 推奨量 */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="font-semibold">{t({ JP: "【推奨量】", EN: "【Recommended amount】" })}</p>
                    <p>{t({ JP: "①おやつ - 適量", EN: "①Treat – as needed" })}</p>
                    <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "ごく少量", EN: "a very small amount" })}</span></p>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="text-xs md:text-sm">{t({ JP: "*大量のForeverを単独で舐めると、舌に付着する可能性があります。おやつの割合を増やして一緒に与えてください。", EN: "*If a large amount of Forever is licked on its own, it may stick to the tongue. Please increase the proportion of treats and feed them together." })}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
          {/* ロゴ画像 */}
          <div className="flex justify-center mt-12">
            <img src="/mazavege_logo_midori.png" alt="Mazavege Logo" className="h-16 w-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}