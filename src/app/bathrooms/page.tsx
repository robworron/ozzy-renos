import { Metadata } from "next";
import Image from "next/image";
import { services } from "../types";

export const metadata: Metadata = {
  title: "Bathroom Renovations in Niagara | Ozzy Renos",
  description:
    "Upgrade your bathroom with Ozzy Renos — Niagara's trusted bathroom renovation specialists. Serving St. Catharines, Welland, and Niagara Falls.",
  openGraph: {
    title: "Bathroom Renovation Experts in Niagara | Ozzy Renos",
    description:
      "Custom bathroom renovations in Niagara. From modern upgrades to full remodels, we deliver high-quality results in St. Catharines, Welland, and Niagara Falls.",
    url: "https://www.ozzyrenos.ca/bathrooms",
    type: "website",
    images: [
      {
        url: "/bathrooms/bathroom8.png",
        width: 720,
        height: 530,
        alt: "Modern bathroom renovation by Ozzy Renos in Niagara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niagara Bathroom Renovations | Ozzy Renos",
    description:
      "Expert bathroom renovations in Niagara. Serving St. Catharines, Welland, and Niagara Falls with high-quality craftsmanship.",
    images: ["/bathrooms/bathroom8.png"],
  },
  alternates: {
    canonical: "/bathrooms",
  },
};

export default function Bathrooms() {
  return (
    <main className="flex flex-col justify-start min-h-[100vh]">
      <section className="flex flex-col md:flex-row justify-between items-center w-full md:h-[500px] my-6">
        <article className="flex flex-col w-full lg:w-[40%] md:min-w-[768px] justify-between p-8 text-sm md:text-base lg:text-lg text-white shadow-2xl bg-[var(--black)]">
          <h1 className="pb-8 text-2xl md:text-3xl lg:text-5xl">
            {services[1].name}
          </h1>
          <h2>{services[1].description}</h2>
        </article>
      </section>
      <section className="flex flex-wrap justify-around items-center gap-4 w-[90%]">
        {services[1].imagePairs?.map((pair) => (
          <Image
            key={pair[0]}
            src={pair[0]}
            alt={services[1].imageAlt}
            width={1200}
            height={1600}
            className="w-[400px] h-auto shadow-2xl"
          />
        ))}
        {services[1].images?.map((url) => (
          <Image
            key={url}
            src={url}
            alt={services[1].imageAlt}
            width={4000}
            height={5000}
            className="w-[500px] h-[100%] shadow-2xl"
          />
        ))}
      </section>
    </main>
  );
}
