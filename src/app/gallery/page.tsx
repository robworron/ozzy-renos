import React from "react";
import ImageCarousel from "../components/ImageCarousel";

import Image from "next/image";
import { services } from "../types";

const Gallery = () => {
  return (
    <main className="flex flex-col justify-start min-h-[100vh]">
      <section className="flex flex-col items-center w-full p-10 mt-10 bg-[var(--black)] text-white shadow-2xl">
        <article className="w-full max-w-[1200px] text-6xl">
          <h1>Gallery</h1>
          <p className="my-8 text-xl">
            Explore our collection of stunning projects that showcase the
            craftsmanship, creativity, and attention to detail we bring to every
            renovation. From kitchen and bathroom transformations to custom
            decks, fences, and more, each project highlights our commitment to
            quality and client satisfaction. Browse through before-and-after
            images to see how we turn visions into reality, and get inspired for
            your own home renovation. Whether you're looking to refresh a single
            room or undertake a full remodel, our gallery offers a glimpse into
            the possibilities we can create together. Let your dream project
            start here!
          </p>
        </article>
      </section>
      <section className="flex flex-wrap justify-center items-center gap-16 max-w-[1200px] my-16">
        {services.map((service, index) => {
          return (
            <React.Fragment key={index}>
              {service.imagePairs?.map((pair, pairIndex) => {
                {
                  console.log(pair);
                }
                return (
                  <div key={pairIndex} className="object-cover w-[25%] h-80">
                    <ImageCarousel images={pair} />
                  </div>
                );
              })}
              {service.images?.map((image, imageIndex) => {
                return (
                  <div key={imageIndex} className="w-80 h-80">
                    <Image
                      src={image}
                      alt={image}
                      width={10000}
                      height={10000}
                      className="object-cover w-full h-full shadow-2xl"
                    />
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </section>
    </main>
  );
};

export default Gallery;
