// To fix TS error with @splidejs/react-splide, see https://github.com/Splidejs/splide/issues/1179.
"use client";
import React, { useRef } from "react";
import SectionContainer from "./SectionContainer";
// @ts-expect-error resolving build error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Import Splide styles
import "../globals.css"
import Heading from "./Heading";

const ThumbnailCarousel = () => {
  const mainSliderRef = useRef<any>(null);
  const thumbnailSliderRef = useRef<any>(null);

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
          onMounted={(splide: any) => (mainSliderRef.current = splide)}
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
          onMounted={(splide: any) => {
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

export default ThumbnailCarousel;
