import { Metadata } from "next";
import Image from "next/image";
import { services } from "../types";

export const metadata: Metadata = {
  title: "Kitchen Renovations in Niagara | Ozzy Renos",
  description:
    "Transform your kitchen with Ozzy Renos. Expert kitchen renovations across Niagara.",
  openGraph: {
    title: "Kitchen Renovations in Niagara | Ozzy Renos",
    description:
      "Custom kitchen renovations in Niagara. High quality work in St. Catharines, Welland, and Niagara Falls.",
    url: "https://www.ozzyrenos.ca/kitchens",
    type: "website",
    images: [
      {
        url: "/niagara-kitchen-renovations.png",
        width: 1200,
        height: 630,
        alt: "Modern kitchen renovation in Niagara by Ozzy Renos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Renovations in Niagara | Ozzy Renos",
    description:
      "Custom kitchen renovations in Niagara. High quality work in St. Catharines, Welland, and Niagara Falls.",
    images: ["/niagara-kitchen-renovations.png"],
  },
  alternates: {
    canonical: "/kitchens",
  },
};

export default function Kitchens() {
  return (
    <main className="flex flex-col justify-start min-h-[100vh]">
      <section className="flex flex-col md:flex-row justify-between items-center w-full md:h-[500px] my-6">
        <article className="flex flex-col w-full lg:w-[40%] md:min-w-[768px] justify-between p-8 text-sm md:text-base lg:text-lg text-white shadow-2xl bg-[var(--black)]">
          <h1 className="pb-8 text-2xl md:text-3xl lg:text-5xl">
            {services[0].name}
          </h1>
          <h2>{services[0].description}</h2>
        </article>
      </section>
      <section className="flex flex-wrap justify-around items-center gap-4 w-[90%]">
        {services[0].imagePairs?.map((pair) => (
          <Image
            key={pair[0]}
            src={pair[0]}
            alt={services[0].imageAlt}
            width={1200}
            height={1600}
            className="w-[400px] h-auto shadow-2xl"
          />
        ))}
        {services[0].images?.map((url) => (
          <Image
            key={url}
            src={url}
            alt={services[0].imageAlt}
            width={4000}
            height={5000}
            className="w-[500px] h-[100%] shadow-2xl"
          />
        ))}
      </section>
    </main>
  );
}
