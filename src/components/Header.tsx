'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-green-500/20" style={{ zIndex: 1100 }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-uCgt3dQ.png"
              alt="MOTHER VEGETABLE"
              width={100}
              height={100}
            />
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center space-x-1 lg:space-x-2">
            <button
              className="px-3 md:px-4 py-2 text-sm text-gray-300 hover:text-green-400 transition-all duration-300"
            >
              {t({ JP: 'Ichizokuとは', EN: 'About' })}
            </button>
            <button
              className="px-3 md:px-4 py-2 text-sm text-gray-300 hover:text-green-400 transition-all duration-300"
            >
              {t({ JP: '報酬', EN: 'Reward' })}
            </button>
            <button
              className="px-3 md:px-4 py-2 text-sm text-gray-300 hover:text-green-400 transition-all duration-300"
            >
              {t({ JP: 'Ichizokuに参加', EN: 'Join Ichizoku' })}
            </button>
            <button
              onClick={() => setLanguage(language === 'EN' ? 'JP' : 'EN')}
              className="px-3 md:px-4 py-2 text-sm text-gray-300 hover:text-green-400 transition-all duration-300 border border-gray-600 rounded-md"
            >
              {language === 'EN' ? 'EN' : 'JP'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

