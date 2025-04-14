import Image from "next/image";

import { services } from "../types";

const Services = () => {
  const imageHalf = (src: string, alt: string) => (
    <aside className="w-[50%] flex flex-col items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={4000}
        height={5000}
        className="w-[60%]"
      />
    </aside>
  );

  const descriptionHalf = (title: string, description: string) => (
    <article className="w-[50%] flex flex-col items-center justify-center">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );

  return (
    <main className="w-full">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={index}
            className={`flex w-full min-h-[60vh] ${
              isEven ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {imageHalf(service.imagePath, service.imageAlt)}
            {descriptionHalf(service.name, service.description)}
          </section>
        );
      })}
    </main>
  );
};

export default Services;
