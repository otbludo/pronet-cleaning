import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'
import OurWork from './components/OurWork'
import Pricing from './components/Pricing'
import ServiceBar from './components/ServiceBar'
import Testimonials from './components/Testimonials'
import TopChoice from './components/TopChoice'
import VideoSection from './components/VideoSection'

export default function App() {
  return (
    <>
      {/* Barre de progression de lecture */}
      <div
        aria-hidden="true"
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-pink-300"
      />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <ServiceBar />
        <OurWork />
        <TopChoice />
        <HowItWorks />
        <Pricing />
        <VideoSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
