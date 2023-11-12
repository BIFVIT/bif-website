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
