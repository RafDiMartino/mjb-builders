import SectionContainer from "./components/SectionContainer"
import HeroSection from "./components/HeroSection"

export default function Home() {
  return (
    <main className="bg-charcoal w-full flex flex-col" >
        <HeroSection />
        <SectionContainer>
          <div className="w-full flex flex-col">
            <div id="services" className="h-screen border border-red-700">Services</div>
            <div id="gallery" className="h-screen border border-red-700">Gallery</div>
            <div id="about" className="h-screen border border-red-700">About</div>
            <div id="contact" className="h-screen border border-red-700">Contact</div>
          </div>
        </SectionContainer>
    </main>
  )
}
