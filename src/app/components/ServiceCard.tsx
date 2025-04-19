import Image from "next/image";
import { Button } from "@mui/material";

type ServiceCardProps = {
  cardTitle: string;
  cardDescription: string;
  imagePath: string;
};

const ServiceCard = ({
  cardTitle,
  cardDescription,
  imagePath,
}: ServiceCardProps) => {
  return (
    <div className="group flex flex-col justify-center items-center hover:justify-start transition-all duration-300 ease-in-out w-[16%] hover:w-[30%] h-[300px] hover:h-[400px] [perspective:1000px] hover:p-6 text-white text-xl hover:text-4xl">
      <Image
        src={imagePath}
        alt={cardTitle}
        fill
        className="object-cover z-[1]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60 z-[1]" />
      <h2 className="relative z-[2] flex justify-center items-center">
        {cardTitle}
      </h2>
      <p className="hidden group-hover:block flex-1 relative z-[2] text-lg content-center text-center items-center w-[80%] mt-4">
        {cardDescription}
      </p>
      <div className="hidden group-hover:block relative z-[2] text-lg content-center text-center items-center w-[80%] mt-4">
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
      </div>
    </div>
  );
};

export default ServiceCard;
