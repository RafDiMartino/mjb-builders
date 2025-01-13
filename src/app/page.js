"use client"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"
import GallerySection from "./components/GallerySection"
import ContactSection from "./components/ContactSection"
import AboutSection from "./components/AboutSection"

export default function Home() {
  return (
    <main className="bg-charcoal w-full flex flex-col" >
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}