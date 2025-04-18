import React from "react";
import Image from "next/image";

import { Button } from "@mui/material";
import ServiceCard from "./components/ServiceCard";

export default function Home() {
  const servicesList = [
    "Kitchens",
    "Bathrooms",
    "Basements",
    "Flooring",
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
      style={{ width: 24 }}
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
    <main className="w-full flex flex-col items-center">
      <div className="relative w-full h-[80vh] flex justify-center">
        <section className="w-full max-w-[1200px] m-8 flex flex-col justify-center">
          <h1 className="text-7xl my-4">Ozzy Renos</h1>
          <h2 className="text-3xl my-2">Proudly Serving the Niagara Region</h2>
          <ul className="flex flex-col ml-4 text-2xl">
            {servicesList.map((service) => (
              <li key={service} className="flex mt-2">
                {wrenchIcon}
                <span className="w-2" />
                {service}
              </li>
            ))}
          </ul>
          <Button
            variant="contained"
            aria-current="page"
            sx={{
              backgroundColor: "var(--red)",
              fontSize: "1.25rem",
              width: "30%",
              marginTop: "40px",
              "&:hover": {
                backgroundColor: "var(--black)",
                borderColor: "var(--black)",
              },
            }}
          >
            Free Quote!
          </Button>
        </section>
        <Image
          src="/hero-image.png"
          alt="Ozzy Renos"
          fill
          className="opacity-80 z-[-2]"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-white/100 to-white/0" />
      <section className="w-full flex justify-between items-center my-32">
        <div className="w-[45%] shadow-2xl">
          <Image
            src="/kitchens/kitchen1-after.png"
            alt="Kitchen"
            width={1600}
            height={1200}
            className="object-cover w-full h-[70vh]"
          />
        </div>
        <div className="w-[45%] h-[50vh] bg-[var(--red)] text-white flex flex-col justify-center p-10 shadow-2xl">
          <h2 className="text-3xl pb-8">About Us</h2>
          <p className="text-2xl">
            Your trusted partner in exceptional construction and renovation
            services in the vibrant Niagara Region. With a decade of unwavering
            commitment to excellence, we take pride in our journey as a premier
            general contractor. Our team is dedicated to delivering the highest
            quality craftsmanship, ensuring every project is a testament to our
            passion for building and renovating spaces that stand the test of
            time.
          </p>
        </div>
      </section>

      {/** SERVICES CARDS */}
      <section className="flex flex-wrap justify-center w-full max-w-[1200px] gap-4 my-20">
        <ServiceCard
          cardTitle="Kitchens"
          cardDescription="Upgrade your kitchen into a space that’s both beautiful and practical. Discover fresh designs and smart features made for modern living."
          imagePath="/kitchens/kitchen1-after.png"
        />
        <ServiceCard
          cardTitle="Bathrooms"
          cardDescription="Refresh your bathroom with custom renovations that bring comfort, style, and a touch of luxury to your everyday routine."
          imagePath="/bathrooms/bathroom8.png"
        />
        <ServiceCard
          cardTitle="Basements"
          cardDescription="From family rooms to personal gyms, turn your basement into the extra space you’ve always wanted."
          imagePath="/basements/basement2.png"
        />
        <ServiceCard
          cardTitle="Flooring"
          cardDescription="Bring your home to life with floors and trim that fit your style and tie every room together."
          imagePath="/flooring/flooring4.png"
        />
        <ServiceCard
          cardTitle="Decks & Fences"
          cardDescription="Enjoy the outdoors in comfort and style with a custom deck that fits your home and your lifestyle."
          imagePath="/decks/decks1.png"
        />
      </section>
    </main>
  );
}
