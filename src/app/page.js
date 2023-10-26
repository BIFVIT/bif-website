import Image from 'next/image'
import Navbar from '@/components/globals/Navbar'
import HeroSection from '@/components/landing/HeroSection'

import StatisticsSection from '@/components/landing/StatisticsSection'

export default function Home() {
  return (
    <>
      {/* Developer Notes:
      
      Please be sure to add sections as components wherever you use them 
      to make debugging easier and dont just slap the code in.
      
      Sections Required Here:
      - Navbar
      - Hero Section 
      - About Section 
      - Gallery Section 
      - Statistics Section 
      - Reviews Section 
      - Contact Us Section
      - Footer */}

      <Navbar/>
      <HeroSection/>

      <StatisticsSection/>

    </>
  )
}
