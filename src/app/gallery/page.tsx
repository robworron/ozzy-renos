import React from "react";
import ImageCarousel from "../components/ImageCarousel";

const Gallery = () => {
  return (
    <main>
      <ImageCarousel
        images={["/kitchen.png", "/kitchen2.png", "/kitchen3.png"]}
      />
    </main>
  );
};

export default Gallery;
