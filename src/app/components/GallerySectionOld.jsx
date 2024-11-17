"use client";
import React, { useRef } from "react";
import SectionContainer from "./SectionContainer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import "./Carousel.css"
import Heading from "./Heading";

const GallerySectionOld = () => {
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  const images = [
    "assets/gallery/img-1.webp",
    "assets/gallery/img-2.webp",
    "assets/gallery/img-3.webp",
    "assets/gallery/img-4.webp",
    "assets/gallery/img-5.webp",
    "assets/gallery/img-6.webp",
    "assets/gallery/img-7.webp",
    "assets/gallery/img-8.webp",
    "assets/gallery/img-9.webp",
  ];

  return (
    <SectionContainer>
      <div id="gallery" className="w-full py-20">
        <Heading heading={"Gallery"} />
        {/* Main carousel */}
        <Splide
          options={{
            type: "fade",
            heightRatio: 0.5,
            pagination: false,
            arrows: true,
            rewind: true,
            classes: {
              arrows: 'splide__arrows custom-arrows',
              arrow: 'splide__arrow custom-arrow',
            },
          }}
          onMounted={(splide) => (mainSliderRef.current = splide)}
          className="my-6"
        >
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-scale-down w-full h-full"
              />
            </SplideSlide>
          ))}
        </Splide>

        {/* Thumbnail carousel */}
        <Splide
          options={{
            fixedWidth: 100,
            fixedHeight: 64,
            isNavigation: true,
            gap: 10,
            focus: "center",
            pagination: false,
            cover: true,
            arrows: false,
          }}
          onMounted={(splide) => {
            thumbnailSliderRef.current = splide;
            if (mainSliderRef.current) {
              mainSliderRef.current.sync(splide); // Sync the main and thumbnail sliders
            }
          }}
          className="flex justify-center"
        >
          {images.map((image, index) => (
            <SplideSlide key={index} className="rounded-lg">
              <img
                src={image}
                alt={`Thumbnail ${index}`}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </SectionContainer>
  );
};

export default GallerySectionOld;