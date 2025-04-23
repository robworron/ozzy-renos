import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  cardTitle: string;
  serviceCardDescription: string;
  imagePath: string;
  imageAlt?: string;
};

const ServiceCard = ({
  cardTitle,
  serviceCardDescription,
  imagePath,
  imageAlt,
}: ServiceCardProps) => {
  return (
    <div className="group flex flex-col justify-center items-center text-white text-xl transition-all duration-300 ease-in-out w-[16%] h-[300px] [perspective:1000px] hover:justify-start hover:w-[30%] hover:h-[400px] hover:p-6 hover:text-4xl">
      <Image
        src={imagePath}
        alt={cardTitle}
        fill
        className="object-cover z-[1]"
      />
      <div className="absolute z-[1] inset-0 bg-gradient-to-b from-black/60 to-black/60 " />
      <h2 className="relative z-[2] flex justify-center items-center text-center">
        {cardTitle}
      </h2>
      <p className="hidden relative z-[2] flex-1 content-center items-center w-[80%] mt-4 text-lg text-center group-hover:block">
        {serviceCardDescription}
      </p>
      <div className="hidden relative z-[2] content-center items-center w-[80%] mt-4 text-lg text-center group-hover:block">
        <Link key={imageAlt} href={`/services/#${imageAlt}`}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--red)",
              fontSize: "1.25rem",
              "&:hover": {
                backgroundColor: "var(--black)",
                borderColor: "var(--black)",
              },
            }}
          >
            See More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
