'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s2" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 flex justify-center mb-8">
        <img src="/htu.png" alt="HTU" className="w-full max-w-60 md:max-w-96 h-auto" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "魚の餌", EN: "Fish Food" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u5.jpg"
                    alt="Fish Food"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Foreverを魚の餌に混ぜ込む", EN: "MAZEKOMU Forever into fish food" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 水槽に直接入れる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【水槽に直接入れる場合の推奨量】", EN: "【Recommended amount if adding directly to the tank】" })}</p>
                      <p>{t({ JP: "①魚の餌 - 適量", EN: "①Fish food – as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本 (10ℓ)", EN: "1/10 stick (10ℓ)" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "*1日2〜3回給餌してください。", EN: "*Feed 2-3 times a day." })}</p>
                    </div>

                    {/* 餌袋に混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【餌袋に混ぜる場合の推奨量】", EN: "【Recommended amount if mixing into the food bag】" })}</p>
                      <p>{t({ JP: "①魚の餌 - ", EN: "①Fish food – " })}100g</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "*使用前によく振ってください。", EN: "*Shake well before use." })}</p>
                    </div>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="text-xs md:text-sm">{t({ JP: "*余ったForeverは水槽内の植物の栄養源となります。", EN: "*Any leftover Forever will serve as nutrients for the plants in the tank." })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u6 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "鳥の餌", EN: "Bird Food" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u6.jpg"
                    alt="Bird Food"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Foreverを鳥の餌に混ぜ込む", EN: "MAZEKOMU Forever into bird food" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接入れる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【直接入れる場合の推奨量】", EN: "【Recommended amount if adding directly】" })}</p>
                      <p>{t({ JP: "①鳥の餌 - 適量", EN: "①Bird Food – as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "ごく少量", EN: "a very small amount" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "*給餌前によく混ぜてください。", EN: "*Mix well before feeding." })}</p>
                    </div>

                    {/* 餌袋に混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【餌袋に混ぜる場合の推奨量】", EN: "【Recommended amount if mixing into the food bag】" })}</p>
                      <p>{t({ JP: "①鳥の餌 - ", EN: "①Bird Food – " })}100g</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "*使用前によく振ってください。", EN: "*Shake well before use." })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u7 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "ウサギの餌", EN: "Rabbit Food" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u7.jpg"
                    alt="Rabbit Food"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Foreverをウサギの餌に混ぜ込む", EN: "MAZEKOMU Forever into rabbit food" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 5kg以上用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【体重5kg以上のペット用推奨量】", EN: "【Recommended amount for pets 5kg and over】" })}</p>
                      <p>{t({ JP: "①ウサギの餌 - 適量", EN: "①Rabbit food – as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1/2本", EN: "1/2 stick" })}</span></p>
                    </div>

                    {/* 5kg未満用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【体重5kg未満のペット用推奨量】", EN: "【Recommended amount for pets under 5kg】" })}</p>
                      <p>{t({ JP: "①ウサギの餌 - 適量", EN: "①Rabbit food – as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1/4本", EN: "1/4 stick" })}</span></p>
                    </div>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="text-xs md:text-sm">{t({ JP: "*給餌前によく混ぜてください。", EN: "*Mix well before feeding." })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u8 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "ハムスターの餌", EN: "Hamster Food" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="/u8.jpg"
                    alt="Hamster Food"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Foreverをハムスターの餌に混ぜ込む", EN: "MAZEKOMU Forever into hamster food" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接入れる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【直接入れる場合の推奨量】", EN: "【Recommended amount if adding directly】" })}</p>
                      <p>{t({ JP: "①ハムスターの餌 - 適量", EN: "①Hamster food – as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "ごく少量", EN: "a very small amount" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "*給餌前によく混ぜてください。", EN: "*Mix well before feeding." })}</p>
                    </div>

                    {/* 餌袋に混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【餌袋に混ぜる場合の推奨量】", EN: "【Recommended amount if mixing into the food bag】" })}</p>
                      <p>{t({ JP: "①ハムスターの餌 - ", EN: "①Hamster food – " })}100g</p>
                      <p>{t({ JP: "②", EN: "②" })}Forever - <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                      <p className="text-xs md:text-sm">{t({ JP: "*使用前によく振ってください。", EN: "*Shake well before use." })}</p>
                    </div>
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
