import Image from 'next/image'
import Navbar from '@/components/globals/Navbar'

// Page Sections Imports
import HeroSection from '@/components/landing/HeroSection'
import StatisticsSection from '@/components/landing/StatisticsSection'
import About1 from '@/components/landing/AboutSection1'
import About2 from '@/components/landing/AboutSection2'
import Reviews from '@/components/landing/Reviews'
import ContactSection from '@/components/landing/ContactSection'
import Footer from '@/components/globals/Footer'

export default function Home() {
  return (
    <>
      {/* Developer Notes:
      
      Please be sure to add sections as components wherever you use them 
      to make debugging easier and dont just slap the code in.
      
      Sections Required Here:
      - Navbar
      - Hero Section 
      - About Sections
      - Gallery Section 
      - Statistics Section 
      - Reviews Section 
      - Contact Us Section
      - Footer */}

      <Navbar/>
      <HeroSection/>
      <About1/>
      <About2/>
      <StatisticsSection/>
      <Reviews/>
      <ContactSection/>
      <Footer/>
    </>
  )
}
