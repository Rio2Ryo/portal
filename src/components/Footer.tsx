'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t, language } = useLanguage()

  const downloadWhitepaper = () => {
    const pdfUrl = language === 'JP' ? '/wh_ja.pdf' : '/wh_en.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = language === 'JP' ? 'Whitepaper_JP.pdf' : 'Whitepaper_EN.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <footer className="bg-black/90 backdrop-blur-lg border-t border-emerald-500/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Company Info */}
          <div className="mb-8">
            <div className="mb-6">
              <Image
                src="/logo-uCgt3dQl.png"
                alt="MOTHER VEGETABLES"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://x.com/mv_organization" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://t.me/+uUCQ2MB8Y_03NTg1" target="_blank" rel="noopener noreferrer" className="group">
                <Image
                  src="/Telegram_logo.svg"
                  alt="Telegram"
                  width={28}
                  height={28}
                  className="w-7 h-7 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all group-hover:[filter:sepia(100%)_saturate(200%)_hue-rotate(90deg)_brightness(1.2)]"
                />
              </a>
              <a href="https://youtube.com/@mothervegetables" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h4 className="text-white font-semibold mb-4 text-lg">
              {t({ JP: 'クイックリンク', EN: 'Quick Links' })}
            </h4>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
              <li><Link href="#team" className="text-gray-300 hover:text-emerald-400 transition-colors">
                {t({ JP: 'メンバー', EN: 'Members' })}
              </Link></li>
              <li><Link href="#token" className="text-gray-300 hover:text-emerald-400 transition-colors">
                {t({ JP: 'トークン', EN: 'Token' })}
              </Link></li>
              <li><Link href="#registration" className="text-gray-300 hover:text-emerald-400 transition-colors">
                {t({ JP: '事前登録', EN: 'Pre-registration' })}
              </Link></li>
              <li><button onClick={downloadWhitepaper} className="text-gray-300 hover:text-emerald-400 transition-colors">
                {t({ JP: 'ホワイトペーパー', EN: 'Whitepaper' })}
              </button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Links & Copyright */}
      <div className="border-t border-emerald-500/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="text-gray-400 text-sm whitespace-pre-line">
              {t({
                JP: '© 2025 MOTHER VEGETABLES PROJECT.\nAll rights reserved.',
                EN: '© 2025 MOTHER VEGETABLES PROJECT.\nAll rights reserved.'
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}