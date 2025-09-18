'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadWhitepaper = () => {
    const link = document.createElement('a')
    link.href = '/0912_whitepaper_ja.pdf'
    link.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-green-500/20" style={{ zIndex: 1100 }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-uCgt3dQl.png"
              alt="MOTHER VEGETABLES"
              width={100}
              height={100}
            />
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => scrollToSection('team')}
              className={`px-3 md:px-4 py-2 text-sm text-gray-300 hover:text-green-400 transition-all duration-300 ${
                activeSection === 'team' ? 'text-green-400' : ''
              }`}
            >
              ショップ
            </button>
            <button
              onClick={() => scrollToSection('token')}
              className={`px-3 md:px-4 py-2 text-sm text-gray-300 hover:text-green-400 transition-all duration-300 ${
                activeSection === 'token' ? 'text-green-400' : ''
              }`}
            >
              ホワイトペーパー
            </button>
            {/*<button
              onClick={() => window.location.href = 'mailto:info@mothervegetables.com'}
              className="px-3 md:px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300"
            >
              事前登録
            </button>*/}
          </nav>
        </div>
      </div>
    </header>
  )
}

