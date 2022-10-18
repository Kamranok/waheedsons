import CTASection from './components/CTASection'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  )
}
