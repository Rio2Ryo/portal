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
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-emerald-500/20" style={{ zIndex: 1100 }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-uCgt3dQl.png"
              alt="MOTHER VEGETABLES"
              width={40}
              height={40}
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
            <button
              onClick={() => scrollToSection('project-overview')}
              className={`px-2 sm:px-3 md:px-4 py-2 rounded-md transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 text-sm lg:text-base ${
                activeSection === 'project-overview' ? 'bg-emerald-500/20 text-emerald-400' : 'text-white'
              }`}
            >
              プロジェクト概要
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className={`px-2 sm:px-3 md:px-4 py-2 rounded-md transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 text-sm lg:text-base ${
                activeSection === 'team' ? 'bg-emerald-500/20 text-emerald-400' : 'text-white'
              }`}
            >
              チーム
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className={`px-2 sm:px-3 md:px-4 py-2 rounded-md transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 text-sm lg:text-base ${
                activeSection === 'partners' ? 'bg-emerald-500/20 text-emerald-400' : 'text-white'
              }`}
            >
              パートナー
            </button>
            <button
              onClick={() => scrollToSection('technical-details')}
              className={`px-2 sm:px-3 md:px-4 py-2 rounded-md transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 text-sm lg:text-base ${
                activeSection === 'technical-details' ? 'bg-emerald-500/20 text-emerald-400' : 'text-white'
              }`}
            >
              技術詳細
            </button>
            <button
              onClick={() => scrollToSection('token')}
              className={`px-2 sm:px-3 md:px-4 py-2 rounded-md transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 text-sm lg:text-base ${
                activeSection === 'token' ? 'bg-emerald-500/20 text-emerald-400' : 'text-white'
              }`}
            >
              トークン
            </button>
          </nav>

          {/* Whitepaper Download Button */}
          <button
            onClick={downloadWhitepaper}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-3 sm:px-4 md:px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
          >
            📄 ホワイトペーパー
          </button>
        </div>
      </div>
    </header>
  )
}

