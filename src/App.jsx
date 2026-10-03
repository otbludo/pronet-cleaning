import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import BookingBar from './components/sections/BookingBar'
import Commitments from './components/sections/Commitments'
import Hero from './components/sections/Hero'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'
import Services from './components/sections/Services'
import VideoSection from './components/sections/VideoSection'
import WhyChooseMe from './components/sections/WhyChooseMe'

/**
 * Page d'accueil (site une page) : les sections s'enchaînent dans l'ordre de lecture.
 * Les ancres (#accueil, #contact, #prestations, #tarifs) sont utilisées par la navigation.
 */
export default function App() {
  return (
    <>
      {/* Barre de progression de lecture, animée en CSS (voir .scroll-progress) */}
      <div
        aria-hidden="true"
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-pink-300"
      />

      <Navbar />

      {/* overflow-x-clip : les décors qui débordent ne créent pas de défilement horizontal */}
      <main className="overflow-x-clip">
        <Hero />
        <BookingBar />
        <Services />
        <WhyChooseMe />
        <HowItWorks />
        <Pricing />
        <VideoSection />
        <Commitments />
      </main>

      <Footer />
    </>
  )
}
