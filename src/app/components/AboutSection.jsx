import React from 'react'
import SectionContainer from "./SectionContainer";
import Heading from "./Heading";

const AboutSection = () => {
  return (
    <SectionContainer>
    <div id="about" className="w-full pt-20">
      <Heading className="font-bold" heading={"About Us"}/>
      <p>We are a proud, family-run business with over 30 years of experience in the building trade, combining tradition, craftsmanship, and innovation to bring your visions to life.</p>
      <p>Over the decades, we have built a reputation for reliability, exceptional quality, and a personalized approach that makes every project unique.</p>
      <p>From stunning bathroom transformations to bespoke kitchens, durable roofing, and full domestic refurbishments, we offer a wide range of services tailored to meet your needs.</p>
      <p>Whether it’s a small home improvement project or a complete property overhaul, you can count on us to deliver outstanding results that stand the test of time.</p>
      <p>Your dream home or business space is just one call away! We provide free, no-obligation estimates to help you get started. Let MJB BUILDERS help you turn your ideas into reality.</p>
      <p>Together, we’re building the future one project at a time. Contact us today and take the first step toward your next big transformation!</p>
    </div>
  </SectionContainer>
  )
}

export default AboutSection