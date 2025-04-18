import React from "react";
import ImageCarousel from "../components/ImageCarousel";

import { services } from "../types";
import Image from "next/image";

const Gallery = () => {
  return (
    <main>
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
