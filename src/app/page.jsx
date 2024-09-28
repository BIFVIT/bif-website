import dynamic from 'next/dynamic';
import Image from 'next/image';

const Navbar = dynamic(() => import('../components/globals/Navbar'), { ssr: false });
const HeroSection = dynamic(() => import('../components/landingsections/HeroSection'), { ssr: false });
const About1 = dynamic(() => import('../components/landingsections/AboutSection1'), { ssr: false });
const About2 = dynamic(() => import('../components/landingsections/AboutSection2'), { ssr: false });
const StatisticsSection = dynamic(() => import('../components/landingsections/StatisticsSection'), { ssr: false });
const Reviews = dynamic(() => import('../components/landingsections/Reviews'), { ssr: false });
const ContactSection = dynamic(() => import('../components/landingsections/ContactSection'), { ssr: false });
const Footer = dynamic(() => import('../components/globals/Footer'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About1 />
      <About2 />
      <StatisticsSection />
      <Reviews />
      <ContactSection />
      <Footer />
    </>
  );
}
