import SectionContainer from "./components/SectionContainer"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"
import GallerySection from "./components/GallerySection"

export default function Home() {
  return (
    <main className="bg-charcoal w-full flex flex-col" >
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <SectionContainer>
          <div className="w-full flex flex-col">
            <div id="about" className="h-screen border border-red-700">About</div>
            <div id="contact" className="h-screen border border-red-700">Contact</div>
          </div>
        </SectionContainer>
    </main>
  )
}
