'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useEffect } from 'react'

export default function Hero() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Earth Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Earth Regeneration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          >
            <div className="w-2 h-2 bg-green-400/20 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 pt-24 pb-20">

        {/* Logo - Main Brand Identity */}
        <div
          className={`transform transition-all duration-1000 mb-12 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-8 bg-gradient-to-r from-green-400/10 to-emerald-400/10 blur-3xl"></div>
            <Image
              src="/mazavegeichizoku_logo.png"
              alt="Mazavege Ichizoku"
              width={600}
              height={240}
              className="relative mx-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Main Message */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed">
              {t({
                JP: '35億年前の地球のはじまりの生命',
                EN: 'Life from the beginning of Earth 3.5 billion years ago'
              })}
            </p>
            <p className="text-2xl md:text-3xl font-medium text-white">
              {t({
                JP: '「マザーベジタブル」',
                EN: '"Mother Vegetable"'
              })}
            </p>
            <p className="text-lg md:text-xl font-light text-gray-300">
              {t({
                JP: '地球が生み出した生命力を、あなたに。',
                EN: 'Bringing you the life force created by Earth.'
              })}
            </p>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-8 mb-12"></div>
        </div>


        {/* CTA Button */}
        <div
          className={`transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('mazavege-family')}
              className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-full hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
            >
              {t({ JP: 'マザベジ一族に参加', EN: 'Join Mazavege Family' })}
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
      `}</style>
    </section>
  )
}