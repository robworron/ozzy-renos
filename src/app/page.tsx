import Image from "next/image";
import { services } from "./types";
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
        <article className="flex flex-col justify-center w-full max-w-[1200px]">
          <h1 className="my-2 text-7xl">Ozzy Renos</h1>
          <h2 className="my-4 text-3xl">Proudly Serving the Niagara Region</h2>
          <ul className="flex flex-col ml-4 text-2xl">
            {servicesList.map((service) => (
              <li key={service} className="flex my-1">
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
        </article>
        <Image
          src="/hero-image.png"
          alt="Ozzy Renos"
          fill
          className="z-[-2] opacity-80"
          style={{ objectFit: "cover" }}
          priority
        />
      </section>
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-white/100 to-white/0" />

      {/** ABOUT US */}
      <section className="flex items-center justify-between w-full my-32">
        <Image
          src="/kitchens/kitchen1-after.png"
          alt="Kitchen"
          width={1600}
          height={1200}
          className="object-cover w-[45%] shadow-2xl h-[600px]"
        />
        <article className="flex flex-col justify-center w-[45%] h-[350px] p-10 bg-[var(--red)] text-lg text-white shadow-2xl">
          <h2 className="pb-8 text-3xl">About Us</h2>
          <p>
            Your trusted partner in exceptional construction and renovation
            services in the vibrant Niagara Region. With a decade of unwavering
            commitment to excellence, we take pride in our journey as a premier
            general contractor. Our team is dedicated to delivering the highest
            quality craftsmanship, ensuring every project is a testament to our
            passion for building and renovating spaces that stand the test of
            time.
          </p>
        </article>
      </section>

      {/** SERVICES CARDS */}
      <section className="flex flex-wrap justify-center items-center gap-2 w-full h-[500px] max-w-[1200px] my-8 mb-24">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              cardTitle={service.name}
              serviceCardDescription={service.briefDescription}
              imagePath={service.mainImage}
              imageAlt={service.imageAlt}
            />
          );
        })}
      </section>
    </main>
  );
}
