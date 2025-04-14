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
    <div className="w-[25%] h-[40%] m-[2%] [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden]">
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
        <div className="absolute inset-0 bg-white text-black [transform:rotateY(180deg)] backface-hidden flex items-center justify-center text-center">
          <div className="w-full h-full bg-[var(--red)] text-white flex flex-col justify-between p-8">
            <h6 className="text-lg">{cardDescription}</h6>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
