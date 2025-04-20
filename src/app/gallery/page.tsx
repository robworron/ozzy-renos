import React from "react";
import ImageCarousel from "../components/ImageCarousel";

import { services } from "../types";
import Image from "next/image";

const Gallery = () => {
  return (
    <main className="flex flex-col justify-center">
      <section className="flex flex-col items-center w-full bg-[var(--black)] text-white p-10 mt-10">
        <div className="flex w-full max-w-[1200px]">
          <h1 className="text-6xl max-w-[1200px]">Gallery</h1>
        </div>
        <p className="text-xl max-w-[1200px] my-8">
          Explore our collection of stunning projects that showcase the
          craftsmanship, creativity, and attention to detail we bring to every
          renovation. From kitchen and bathroom transformations to custom decks,
          fences, and more, each project highlights our commitment to quality
          and client satisfaction. Browse through before-and-after images to see
          how we turn visions into reality, and get inspired for your own home
          renovation. Whether you're looking to refresh a single room or
          undertake a full remodel, our gallery offers a glimpse into the
          possibilities we can create together. Let your dream project start
          here!
        </p>
      </section>
      <section className="max-w-[1200px] my-16 flex flex-wrap justify-center items-center gap-16">
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
