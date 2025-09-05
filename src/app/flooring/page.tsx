import { Metadata } from "next";
import Image from "next/image";
import { services } from "../types";

export const metadata: Metadata = {
  title: "Flooring & Trim Renovations in Niagara | Ozzy Renos",
  description:
    "Upgrade your home with expert flooring and trim renovations from Ozzy Renos. Serving St. Catharines, Welland, and Niagara Falls with precision and style.",
  openGraph: {
    title: "Expert Flooring & Trim Renovations in Niagara | Ozzy Renos",
    description:
      "Custom flooring and trim renovations in Niagara. Enhance your home's look and feel with high-quality craftsmanship in St. Catharines, Welland, and Niagara Falls.",
    url: "https://www.ozzyrenos.ca/flooring",
    type: "website",
    images: [
      {
        url: "/flooring/flooring4.png",
        width: 692,
        height: 692,
        alt: "Beautiful flooring and trim renovation by Ozzy Renos in Niagara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring & Trim Renovations in Niagara | Ozzy Renos",
    description:
      "High-quality flooring and trim renovations in Niagara. Transform your home with expert design and craftsmanship in St. Catharines, Welland, and Niagara Falls.",
    images: ["/flooring/flooring4.png"],
  },
  alternates: {
    canonical: "/flooring",
  },
};

export default function Flooring() {
  return (
    <main className="flex flex-col justify-start min-h-[100vh]">
      <section className="flex flex-col md:flex-row justify-between items-center w-full md:h-[500px] my-6">
        <article className="flex flex-col w-full lg:w-[40%] md:min-w-[768px] justify-between p-8 text-sm md:text-base lg:text-lg text-white shadow-2xl bg-[var(--black)]">
          <h1 className="pb-8 text-2xl md:text-3xl lg:text-5xl">
            {services[3].name}
          </h1>
          <h2>{services[3].description}</h2>
        </article>
      </section>
      <section className="flex flex-wrap justify-around items-center gap-4 w-[90%]">
        {services[3].imagePairs?.map((pair, index) => (
          <Image
            src={pair[0]}
            alt={services[3].imageAlt}
            width={1200}
            height={1600}
            className="w-[400px] h-auto shadow-2xl"
          />
        ))}
        {services[3].images?.map((url, index) => (
          <Image
            src={url}
            alt={services[3].imageAlt}
            width={4000}
            height={5000}
            className="w-[500px] h-[100%] shadow-2xl"
          />
        ))}
      </section>
    </main>
  );
}
