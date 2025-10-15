'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Milestones from '@/components/Milestones'
import ProductLineup from '@/components/ProductLineup'
import MazavegeFamily from '@/components/MazavegeFamily'
import ProjectOverview from '@/components/ProjectOverview'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem('authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      // Simulate initial loading
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [isAuthenticated])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'mvt') {
      sessionStorage.setItem('authenticated', 'true')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('パスワードが正しくありません')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-zinc-900 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Password Entry</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please enter password"
              className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-green-500 mb-4"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className="min-h-screen text-white relative">
        <Header />
        <Hero />
        <MazavegeFamily />
        <Milestones />
        <ProductLineup />
        <ProjectOverview />
        <Footer />
      </main>
    </>
  )
}
