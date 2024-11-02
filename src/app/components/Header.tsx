"use client";
import { useEffect, useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import SectionContainer from "./SectionContainer";
import Link from "next/link";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  const toggleMenu = () => setOpen(!isOpen);

  useEffect(() => {
    setCurrentHash(window.location.hash || "");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentHash(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll("div[id]");

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-[100] bg-black w-full flex justify-center py-4">
      <SectionContainer>
        <Link aria-label="Link to the homepage" href="/"><img className="w-[120px]" src="/assets/logo.svg" alt="MJB Logo" /></Link>
        <div className="-mr-[7px] lg:hidden"><Hamburger label="Show menu" color="#fff" easing="ease-in-out" hideOutline={false} rounded toggled={isOpen} toggle={setOpen} /></div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center items-center">
          <ul className="flex justify-center items-center [&>li]:text-white [&>li]:text-base [&>li]:px-4 [&>li]:text-center [&>li>a.active]:text-green [&>li>a.active]:underline [&>li>a.active]:underline-offset-8 [&>li>a.active]:decoration-2">
            <li><Link href="#home" className={`${currentHash === "#home" ? "active" : ""} hover:text-green transition-colors`}>Home</Link></li>
            <li><Link href="#services" className={`${currentHash === "#services" ? "active" : ""} hover:text-green transition-colors`}>Services</Link></li>
            <li><Link href="#gallery" className={`${currentHash === "#gallery" ? "active" : ""} hover:text-green transition-colors`}>Gallery</Link></li>
            <li><Link href="#about" className={`${currentHash === "#about" ? "active" : ""} hover:text-green transition-colors`}>About</Link></li>
            <li><Link href="#contact" className={`${currentHash === "#contact" ? "active" : ""} hover:text-green transition-colors`}>Contact</Link></li>
          </ul>
        </nav>
      </SectionContainer>

      {/* Mobile Navigation */}
      <nav className={isOpen ? "lg:hidden bg-black flex flex-col items-center justify-center h-fit min-h-[calc(100vh-87px)] absolute left-0 top-[87px] duration-300 ease-linear w-full" : "h-0 absolute flex flex-col items-center justify-start overflow-hidden top-[87px] left-0 duration-150 ease-linear w-full"}>
        <ul className="w-full [&>li]:py-4 [&>li]:text-white [&>li]:text-xl [&>li]:text-center [&>li>a.active]:text-green [&>li>a.active]:underline [&>li>a.active]:underline-offset-8 [&>li>a.active]:decoration-2">
          <li onClick={toggleMenu}><Link href="#services" className={`${currentHash === "#services" ? "active" : ""} hover:text-green transition-colors`}>Services</Link></li>
          <li onClick={toggleMenu}><Link href="#gallery" className={`${currentHash === "#gallery" ? "active" : ""} hover:text-green transition-colors`}>Gallery</Link></li>
          <li onClick={toggleMenu}><Link href="#about" className={`${currentHash === "#about" ? "active" : ""} hover:text-green transition-colors`}>About</Link></li>
          <li onClick={toggleMenu}><Link href="#contact" className={`${currentHash === "#contact" ? "active" : ""} hover:text-green transition-colors`}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
