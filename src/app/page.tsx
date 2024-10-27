import SectionContainer from "./components/SectionContainer"

export default function Home() {
  return (
    <main className="bg-charcoal" >
      <SectionContainer>
        <div className="w-full">
          <div id="home" className="h-screen border border-red-700">Jack of all trades</div>
          <div id="services" className="h-screen border border-red-700">Services</div>
          <div id="gallery" className="h-screen border border-red-700">Gallery</div>
          <div id="about" className="h-screen border border-red-700">About</div>
          <div id="contact" className="h-screen border border-red-700">Contact</div>
        </div>
      </SectionContainer>
    </main>
  );
}
