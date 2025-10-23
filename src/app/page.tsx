'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Milestones from '@/components/Milestones'
import ProductLineup from '@/components/ProductLineup'
import MazavegeFamily from '@/components/MazavegeFamily'
import MazavegeFamily2 from '@/components/MazavegeFamily2'
import MazavegeFamily3 from '@/components/MazavegeFamily3'
import MazavegeFamily4 from '@/components/MazavegeFamily4'
import MazavegeFamily5 from '@/components/MazavegeFamily5'
import MazavegeFamily6 from '@/components/MazavegeFamily6'
import MazavegeFamily7 from '@/components/MazavegeFamily7'
import MazavegeFamily8 from '@/components/MazavegeFamily8'
import MazavegeFamily9 from '@/components/MazavegeFamily9'
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
        <Header />
        <Hero />
        <MazavegeFamily />
        <MazavegeFamily2 />
        <MazavegeFamily3 />
        <MazavegeFamily4 />
        <MazavegeFamily5 />
        <MazavegeFamily6 />
        <MazavegeFamily7 />
        <MazavegeFamily8 />
         <MazavegeFamily9 />
      </main>
    </>
  )
}
