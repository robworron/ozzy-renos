import React from "react";
import ImageCarousel from "../components/ImageCarousel";

const Gallery = () => {
  return (
    <main>
      <ImageCarousel
        images={[
          "/kitchens/kitchen1-before.png",
          "/kitchens/kitchen1-after.png",
        ]}
      />
    </main>
  );
};

export default Gallery;
