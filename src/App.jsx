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
