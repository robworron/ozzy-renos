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
    <div className="w-[30%] h-[400px] [perspective:1000px]">
      <Image
        src={imagePath}
        alt={cardTitle}
        fill
        className="object-cover z-[1]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-[1]" />
      <h2 className="relative z-[2] h-full flex justify-center items-center text-white text-2xl">
        {cardTitle}
      </h2>
    </div>
  );
};

export default ServiceCard;
