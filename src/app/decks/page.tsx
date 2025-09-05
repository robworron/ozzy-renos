import { Metadata } from "next";
import Image from "next/image";
import { services } from "../types";

export const metadata: Metadata = {
  title: "Decks & Fences Renovations in Niagara | Ozzy Renos",
  description:
    "Enhance your outdoor living with expert decks and fences renovations from Ozzy Renos. Serving St. Catharines, Welland, and Niagara Falls with quality craftsmanship.",
  openGraph: {
    title: "Professional Decks & Fences Renovations in Niagara | Ozzy Renos",
    description:
      "Custom decks and fences renovations in Niagara. Upgrade your backyard and outdoor spaces with durable, stylish solutions from Ozzy Renos.",
    url: "https://www.ozzyrenos.ca/decks",
    type: "website",
    images: [
      {
        url: "/decks/deck1.png",
        width: 720,
        height: 661,
        alt: "Beautifully renovated deck and fence by Ozzy Renos in Niagara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Decks & Fences Renovations in Niagara | Ozzy Renos",
    description:
      "Upgrade your outdoor living with professional decks and fences renovations in Niagara. Serving St. Catharines, Welland, and Niagara Falls.",
    images: ["/decks/deck1.png"],
  },
  alternates: {
    canonical: "/decks",
  },
};

export default function Decks() {
  return (
    <main className="flex flex-col justify-start min-h-[100vh]">
      <section className="flex flex-col md:flex-row justify-between items-center w-full md:h-[500px] my-6">
        <article className="flex flex-col w-full lg:w-[40%] md:min-w-[768px] justify-between p-8 text-sm md:text-base lg:text-lg text-white shadow-2xl bg-[var(--black)]">
          <h1 className="pb-8 text-2xl md:text-3xl lg:text-5xl">
            {services[4].name}
          </h1>
          <h2>{services[4].description}</h2>
        </article>
      </section>
      <section className="flex flex-wrap justify-around items-center gap-4 w-[90%]">
        {services[4].imagePairs?.map((pair) => (
          <Image
            key={pair[0]}
            src={pair[0]}
            alt={services[4].imageAlt}
            width={1200}
            height={1600}
            className="w-[400px] h-auto shadow-2xl"
          />
        ))}
        {services[4].images?.map((url) => (
          <Image
            key={url}
            src={url}
            alt={services[4].imageAlt}
            width={4000}
            height={5000}
            className="w-[500px] h-[100%] shadow-2xl"
          />
        ))}
      </section>
    </main>
  );
}
