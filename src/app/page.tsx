'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Milestones from '@/components/Milestones'
import ProductLineup from '@/components/ProductLineup'
import MazavegeFamily from '@/components/MazavegeFamily'
import MazavegeFamily2 from '@/components/MazavegeFamily2'
import ProjectOverview from '@/components/ProjectOverview'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className="min-h-screen text-white relative">
        {/*<Header />*/}
        <Hero />
        <MazavegeFamily />
        <MazavegeFamily2 />
      </main>
    </>
  )
}
