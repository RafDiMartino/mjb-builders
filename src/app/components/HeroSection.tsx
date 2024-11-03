import Button from './Button'

const HeroSection = () => {
  return (
    <section id="home" className="w-full relative">
      <img className="block md:hidden w-full object-cover max-h-screen lg:max-h-[calc(100vh-90px)]" src="/assets/hero-section/hero-mobile-img.webp" alt="Worker posing" />
      <img className="hidden md:block w-full max-h-screen lg:max-h-[calc(100vh-90px)] object-fill" src="/assets/hero-section/hero-img.webp" alt="Worker posing" />
      <div className="absolute inset-0 flex justify-center w-full">
        <div className="flex items-center justify-center w-full max-w-8xl px-4">
          <div className="w-full flex flex-col">
            <h1 className="font-poppins text-lg sm:text-xl xl:text-4xl font-bold pb-4 lg:pb-8">We are a family business with over 30 years experience in the building trade.</h1>
            <h2 className="font-poppins text-lg sm:text-xl xl:text-4xl font-bold pb-8 xl:pb-20">Checkatrade Approved & Guaranteed - Fully insured.</h2>
            <Button href="/#contact" text="Contact us for a free estimate" />
            <img className="w-24 lg:w-48 pt-4 lg:pt-0 self-end" src="/assets/hero-section/checktrade-logo.webp" alt="Checktrade logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection