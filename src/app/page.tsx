import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectOverview from '@/components/ProjectOverview'
import IndustryApproach from '@/components/IndustryApproach'
import TeamMembers from '@/components/TeamMembers'
import Partners from '@/components/Partners'
import TechnicalDetails from '@/components/TechnicalDetails'
import TokenInfo from '@/components/TokenInfo'

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <Header />
      <Hero />
      <ProjectOverview />
      <IndustryApproach />
      <TeamMembers />
      <Partners />
      <TechnicalDetails />
      <TokenInfo />
    </main>
  )
}
