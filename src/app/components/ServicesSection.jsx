import Button from "./Button"
import Heading from "./Heading"
import SectionContainer from "./SectionContainer"
import ServicesImage from "./ServicesImage"

const ServicesSection = () => {
  return (
    <SectionContainer>
      <div id="services" className="w-full pt-20">
        <Heading className="font-bold" heading={"Our Services"}/>
        <p>We can undertake all your building needs, from kitchens, bathrooms, roofing, house extensions and renovations.</p>
        <div className="w-full flex flex-wrap flex-row gap-8 justify-center items-center py-20">
          <ServicesImage src="/assets/services-section/kitchen.webp" alt="Kintchen image" title="KITCHENS" />
          <ServicesImage src="/assets/services-section/bathroom.webp" alt="Bathroom image" title="BATHROOMS" />
          <ServicesImage src="/assets/services-section/roofing.webp" alt="Roofing image" title="ROOFING" />
          <ServicesImage src="/assets/services-section/extension.webp" alt="Extension image" title="EXTENSIONS" />
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-8 md:space-y-0 md:space-x-8 py-4">
          <Button href={"/#contact"} text={"Contact us for a free estimate"} />
          <Button href={"/#gallery"} text={"See our gallery"} />
        </div>
      </div>
    </SectionContainer>
  )
}

export default ServicesSection