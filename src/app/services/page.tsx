import Image from "next/image";

import { services } from "../types";
import { Button } from "@mui/material";

const Services = () => {
  const imageHalf = (src: string, alt: string) => (
    <aside className="w-[50%] flex flex-col items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={4000}
        height={5000}
        className="w-[60%] h-[100%] shadow-2xl"
      />
    </aside>
  );

  const descriptionHalf = (
    title: string,
    description: string,
    isRed: boolean
  ) => (
    <div className="flex w-[50%] items-center">
      {isRed ? <span className="basis-1/6" /> : null}
      <article
        className={`flex flex-col basis-5/6  justify-between h-[70%] max-h-[300px] p-10 text-white shadow-2xl ${
          isRed ? "bg-[var(--black)]" : "bg-[var(--red)]"
        }`}
      >
        <h2 className="text-5xl">{title}</h2>
        <p className="text-xl">{description}</p>
      </article>
      {isRed ? null : <span className="basis-1/6" />}
    </div>
  );

  return (
    <main className="flex flex-col w-full items-center">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={index}
            className={`flex w-full min-h-[50vh] h-[50vh] my-16 ${
              isEven ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {imageHalf(service.imagePath, service.imageAlt)}
            {descriptionHalf(service.name, service.description, isEven)}
          </section>
        );
      })}
      <Button
        variant="contained"
        sx={{
          color: "white",
          borderColor: "white",
          width: "15vw",
          height: "7.5vh",
          margin: "30px",
          backgroundColor: "var(--red)",
          fontSize: "1.25rem",
          "&:hover": {
            backgroundColor: "var(--black)",
            borderColor: "var(--black)",
          },
        }}
      >
        Book Now
      </Button>
    </main>
  );
};

export default Services;
