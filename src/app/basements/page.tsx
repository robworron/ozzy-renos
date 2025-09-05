import { Metadata } from "next";
import Image from "next/image";
import { services } from "../types";

export const metadata: Metadata = {
  title: "Basement Renovations in Niagara | Ozzy Renos",
  description:
    "Transform your basement into a functional and stylish space with Ozzy Renos. Serving St. Catharines, Welland, and Niagara Falls with expert basement renovations.",
  openGraph: {
    title: "Expert Basement Renovations in Niagara | Ozzy Renos",
    description:
      "Custom basement renovations in Niagara. From entertainment rooms to modern living spaces, Ozzy Renos delivers high-quality craftsmanship in St. Catharines, Welland, and Niagara Falls.",
    url: "https://www.ozzyrenos.ca/basements",
    type: "website",
    images: [
      {
        url: "/basements/basement3.jpg",
        width: 3024,
        height: 4032,
        alt: "Modern basement renovation by Ozzy Renos in Niagara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basement Renovations in Niagara | Ozzy Renos",
    description:
      "Expert basement renovations in Niagara. Transform your space with high-quality design and construction in St. Catharines, Welland, and Niagara Falls.",
    images: ["/basement3.jpg"],
  },
  alternates: {
    canonical: "/basements",
  },
};

export default function Basements() {
  return (
    <main className="flex flex-col justify-start min-h-[100vh]">
      <section className="flex flex-col md:flex-row justify-between items-center w-full md:h-[500px] my-6">
        <article className="flex flex-col w-full lg:w-[40%] md:min-w-[768px] justify-between p-8 text-sm md:text-base lg:text-lg text-white shadow-2xl bg-[var(--black)]">
          <h1 className="pb-8 text-2xl md:text-3xl lg:text-5xl">
            {services[2].name}
          </h1>
          <h2>{services[2].description}</h2>
        </article>
      </section>
      <section className="flex flex-wrap justify-around items-center gap-4 w-[90%]">
        {services[2].imagePairs?.map((pair, index) => (
          <Image
            src={pair[0]}
            alt={services[2].imageAlt}
            width={1200}
            height={1600}
            className="w-[400px] h-auto shadow-2xl"
          />
        ))}
        {services[2].images?.map((url, index) => (
          <Image
            src={url}
            alt={services[2].imageAlt}
            width={4000}
            height={5000}
            className="w-[500px] h-[100%] shadow-2xl"
          />
        ))}
      </section>
    </main>
  );
}
