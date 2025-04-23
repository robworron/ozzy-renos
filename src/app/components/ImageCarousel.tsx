"use client"; // add this if you're using Next.js App Router

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      className="w-full h-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={10000}
            height={10000}
            className="object-cover w-full h-full shadow-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
