'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
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
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://t.me/+uUCQ2MB8Y_03NTg1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Image
                  src="/Telegram_logo.svg"
                  alt="Telegram"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
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
              <li><a href="mailto:info@mothervegetables.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                {t({ JP: '事前登録', EN: 'Pre-registration' })}
              </a></li>
              <li><a href="/0912_whitepaper_ja.pdf" className="text-gray-300 hover:text-emerald-400 transition-colors">
                {t({ JP: 'ホワイトペーパー', EN: 'Whitepaper' })}
              </a></li>
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