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
              width={45}
              height={45}
              className="sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-auto"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center justify-between w-full max-w-[220px] ml-2 sm:ml-4 md:space-x-2 md:justify-start md:w-auto md:max-w-none">
            <button
              onClick={() => document.getElementById('milestones')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm text-[#4ade80] hover:text-green-600 transition-all duration-300"
            >
              {t({ JP: 'Ichizoku', EN: 'Ichizoku' })}
            </button>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm text-[#4ade80] hover:text-green-600 transition-all duration-300"
            >
              {t({ JP: 'Reward', EN: 'Reward' })}
            </button>
            <button
              onClick={() => document.getElementById('mazavege-family')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm te[#4ade80] bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-300"
            >
              {t({ JP: 'Apply', EN: 'Apply' })}
            </button>
            <button
              onClick={() => setLanguage(language === 'EN' ? 'JP' : 'EN')}
              className="px-1.5 sm:pl-4 sm:pr-2 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm text-[#4ade80] hover:text-green-600 transition-all duration-300 border border-gray-600 rounded-md"
            >
              {language === 'EN' ? 'EN' : 'JP'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

