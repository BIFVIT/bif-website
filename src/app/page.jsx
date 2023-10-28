import Image from 'next/image'
import Navbar from '../components/globals/Navbar'

// Page Sections Imports
import HeroSection from '../components/landingsections/HeroSection'
import StatisticsSection from '../components/landingsections/StatisticsSection'
import About1 from '../components/landingsections/AboutSection1'
import About2 from '../components/landingsections/AboutSection2'
import Reviews from '../components/landingsections/Reviews'
import ContactSection from '../components/landingsections/ContactSection'
import Footer from '../components/globals/Footer'

export default function Home() {
  return (
    <>
      {/* Developer Notes:
      
      Please be sure to add sections as components wherever you use them 
      to make debugging easier and dont just slap the code in.
      
      Sections Required Here:
      - Navbar
      - Hero Section 
      - About Sections (2)
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
