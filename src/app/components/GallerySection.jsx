"use client"
import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Heading from "./Heading";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(src, width) {
  return `${src}?w=${width}&q=75`; // Modify this function if needed for your asset pipeline
}

const images = [
  { src: "assets/gallery/img-1.webp", width: 1200, height: 800 },
  { src: "assets/gallery/img-2.webp", width: 1080, height: 720 },
  { src: "assets/gallery/img-3.webp", width: 1080, height: 1500 },
  { src: "assets/gallery/img-5.webp", width: 1300, height: 1500 },
  { src: "assets/gallery/img-4.webp", width: 1300, height: 1500 },
  { src: "assets/gallery/img-6.webp", width: 1200, height: 800 },
  { src: "assets/gallery/img-7.webp", width: 800, height: 600 },
  { src: "assets/gallery/img-8.webp", width: 1080, height: 1440 },
  { src: "assets/gallery/img-9.webp", width: 1080, height: 1500 },
  { src: "assets/gallery/img-10.webp", width: 1080, height: 800 },
  { src: "assets/gallery/img-11.webp", width: 1080, height: 1500 },
  { src: "assets/gallery/img-12.webp", width: 1080, height: 800 },
  { src: "assets/gallery/img-13.webp", width: 1080, height: 800 },
  { src: "assets/gallery/img-14.webp", width: 1080, height: 1000 },
  { src: "assets/gallery/img-15.webp", width: 1080, height: 1000 },
  { src: "assets/gallery/img-16.webp", width: 1080, height: 1000 },
];

const photos = images.map(({ src, width, height }, index) => ({
  src: assetLink(src, width), // Full-size image
  alt: `Image ${index + 1}`, // Generic alt text (replace as needed)
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: assetLink(src, breakpoint), // Resized image
    width: breakpoint,
    height: Math.round((height / width) * breakpoint), // Calculate height to maintain aspect ratio
  })),
}));

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="w-full flex flex-col justify-center items-center py-20">
      <div className="w-full max-w-8xl px-4">
        <Heading heading="Gallery" />
        <div className="py-8">
          <RowsPhotoAlbum photos={photos} targetRowHeight={200} onClick={({ index }) => setIndex(index)} />
          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Thumbnails, Zoom]}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;