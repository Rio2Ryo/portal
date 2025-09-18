import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-lg border-t border-emerald-500/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-4">
              <Image
                src="/logo-uCgt3dQl.png"
                alt="MOTHER VEGETABLES"
                width={120}
                height={120}
              />
            </div>
            <h3 className="text-emerald-400 font-bold text-xl mb-4">MOTHER VEGETABLES</h3>
            <p className="text-gray-300 text-sm mb-4">
              地球最初の生命体による地球再生プロジェクト
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-2">
            <h4 className="text-white font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              <li><Link href="#team" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">メンバー</Link></li>
              <li><Link href="#token" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">トークン</Link></li>
              <li><a href="mailto:info@mothervegetables.com" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">事前登録</a></li>
              <li><a href="/0912_whitepaper_ja.pdf" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">ホワイトペーパー</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Legal Links & Copyright */}
      <div className="border-t border-emerald-500/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MOTHER VEGETABLES PROJECT. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">プライバシーポリシー</Link>
              <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">利用規約</Link>
              <Link href="/legal" className="text-gray-400 hover:text-emerald-400 transition-colors">特定商取引法に基づく表記</Link>
              <Link href="/patents" className="text-gray-400 hover:text-emerald-400 transition-colors">特許情報</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}