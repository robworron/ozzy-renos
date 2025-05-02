import Image from "next/image";
import { Metadata } from "next";
import { services } from "../types";

export const metadata: Metadata = {
  title: "Services | Kitchens, Basements, Decks & More",
  description:
    "Ozzy Renos Services - See our renovation services in the Niagara Region. Kitchens, bathrooms, basements, and more.",
  openGraph: {
    title: "Services | Ozzy Renos - Home Renovations in Niagara",
    description:
      "Ozzy Renos offers many renovation services in the Niagara Region. From kitchens to bathrooms, see our craftsmanship in action.",
    url: "https://www.ozzyrenos.ca/services",
    type: "website",
    images: [
      {
        url: "/niagara-kitchen-renovations.png",
        width: 1170,
        height: 615,
        alt: "Niagara kitchen renovation by Ozzy Renos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Ozzy Renos - Home Renovations in Niagara",
    description:
      "Ozzy Renos offers many renovation services in the Niagara Region. From kitchens to bathrooms, see our craftsmanship in action.",
    images: ["/niagara-kitchen-renovations.png"],
  },
  alternates: {
    canonical: "https://www.ozzyrenos.ca/services",
  },
};

const Services = () => {
  const imageHalf = (src: string, alt: string) => (
    <aside className="flex flex-col justify-center items-center w-full md:w-[50%] md:h-full">
      <Image
        src={src}
        alt={alt}
        width={4000}
        height={5000}
        className="w-[500px] h-[100%] shadow-2xl"
      />
    </aside>
  );

  const descriptionHalf = (
    title: string,
    description: string,
    isBlack: boolean
  ) => (
    <article
      className={`flex flex-col w-full md:w-[40%] justify-between p-8 text-sm md:text-base lg:text-lg text-white shadow-2xl ${
        isBlack ? "bg-[var(--black)]" : "bg-[var(--red)]"
      }`}
    >
      <h2 className="pb-8 text-2xl md:text-3xl lg:text-5xl">{title}</h2>
      <p>{description}</p>
    </article>
  );

  return (
    <main className="flex flex-col justify-start min-h-[100vh]">
      <section className="w-full my-10">
        <h1 className="flex justify-center md:justify-end w-full md:w-[50%] h-[70%] max-h-[300px] p-8 lg:p-12 bg-[var(--red)] text-3xl md:text-4xl lg:text-5xl text-white shadow-2xl">
          Services
        </h1>
      </section>
      {services.map((service, index) => {
        const isBlack = index % 2 === 0;
        return (
          <section
            key={index}
            id={service.imageAlt}
            className={`flex flex-col md:flex-row justify-between items-center w-full md:h-[500px] my-16 ${
              isBlack ? "flex-row" : "md:flex-row-reverse"
            }`}
          >
            {imageHalf(service.mainImage, service.imageAlt)}
            {descriptionHalf(service.name, service.description, isBlack)}
          </section>
        );
      })}
    </main>
  );
};

export default Services;
