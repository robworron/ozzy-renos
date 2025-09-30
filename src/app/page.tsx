import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { services } from "./types";
import ServiceCard from "./components/ServiceCard";
import GoogleReviews from "./components/GoogleReviews";

export const metadata: Metadata = {
  title: "Ozzy Renos | Niagara Home Renovations",
  description:
    "General contractor specializing in affordable home renovations across the Niagara Region, including kitchens, bathrooms, basements, flooring, decks, and more.",
  openGraph: {
    title: "Niagara Home Renovations",
    description:
      "Ozzy Renos offers services in the Niagara Region: Niagara Falls, St. Catharines, Welland, and more.",
    url: "https://www.ozzyrenos.ca",
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
    title: "Niagara Home Renovations",
    description:
      "Ozzy Renos offers services in the Niagara Region: Niagara Falls, St. Catharines, Welland, and more.",
    images: ["/niagara-kitchen-renovations.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const servicesList = [
    "Kitchens",
    "Bathrooms",
    "Basements",
    "Flooring & Trim",
    "Decks",
    "Fences",
    "Carpentry",
  ];

  const wrenchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      style={{ width: 24, padding: 2 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.867 19.125h.008v.008h-.008v-.008Z"
      />
    </svg>
  );

  return (
    <main className="flex flex-col justify-start min-h-[100vh]">
      <section className="relative flex justify-center w-full h-[80vh]">
        <article className="flex flex-col justify-center w-full max-w-[1200px] ml-4">
          <h1 className="my-2 text-4xl lg:text-7xl">Ozzy Renovation</h1>
          <h2 className="my-4 text-lg lg:text-2xl">
            General contractor and renovator proudly serving homeowners across
            the entire Niagara Region - including Niagara Falls, St. Catharines,
            Welland, Grimsby, and surrounding communities.
          </h2>
          <ul className="flex flex-col ml-4 text-lg lg:text-2xl">
            {servicesList.map((service) => (
              <li key={service} className="flex my-1">
                {wrenchIcon}
                <span className="w-2" />
                {service}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="w-[60%] md:w-[30%] lg:w-[20%] mt-8 px-4 py-2 bg-[var(--red)] text-white text-center text-xl rounded shadow-xl transitions-colors duration-300 ease-in-out hover:bg-[var(--black)]"
          >
            FREE QUOTE!
          </Link>
        </article>
        <Image
          src="/hero-image.png"
          alt="Ozzy Renos - Kitchen"
          fill
          className="z-[-2] opacity-80"
          style={{ objectFit: "cover" }}
          priority
        />
      </section>
      <div className="absolute inset-0 z-[-1] min-h-[1000px] bg-gradient-to-r from-white/100 to-white/0" />

      {/** GOOGLE REVIEWS */}
      <GoogleReviews />

      {/** ABOUT US */}
      <section className="flex flex-col items-center justify-between w-full mb-20 md:mb-32 md:flex-row-reverse">
        <article className="flex flex-col justify-center w-full md:w-[45%] h-[350px] p-10 bg-[var(--red)] text-sm lg:text-lg text-white shadow-2xl">
          <h2 className="pb-8 text-2xl lg:text-3xl">About Us</h2>
          <p>
            Your trusted partner in exceptional construction and renovation
            services in the vibrant Niagara Region. With a decade of unwavering
            commitment to excellence, we take pride in our journey as a premier
            general contractor. Our team is dedicated to delivering the highest
            quality craftsmanship, ensuring every project is a testament to our
            passion for building and renovating kitchens, bathrooms, basements,
            and more that stand the test of time.
          </p>
        </article>
        <Image
          src="/kitchens/kitchen1-after.png"
          alt="Finished kitchen renovation by Ozzy Renos in Niagara"
          width={1600}
          height={1200}
          className="object-cover w-full md:w-[45%] shadow-2xl h-[600px]"
        />
      </section>

      {/** SERVICES CARDS */}
      <section className="flex flex-wrap justify-center items-center md:gap-2 w-full max-w-[1200px] md:h-[500px]">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              cardTitle={service.name}
              serviceCardDescription={service.briefDescription}
              url={service.pageUrl}
              imagePath={service.mainImage}
              imageAlt={service.imageAlt}
            />
          );
        })}
      </section>
    </main>
  );
}
