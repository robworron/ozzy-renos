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
    <div className="group flex flex-col justify-center items-center text-white text-lg lg:text-xl transition-all duration-300 ease-in-out w-full md:w-[15%] h-[10vh] md:h-[300px] [perspective:1000px] hover:justify-start md:hover:w-[30%] hover:h-[30vh] md:hover:h-[400px] hover:p-6 hover:text-2xl lg:hover:text-4xl">
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
      <p className="hidden relative z-[2] flex-1 content-center items-center w-[80%] mt-4 text-sm lg:text-lg text-center group-hover:block">
        {serviceCardDescription}
      </p>
      <div className="hidden relative z-[2] content-center items-center w-[90%] mt-4 text-lg text-center group-hover:block">
        <Link
          key={imageAlt}
          href={`/services/#${imageAlt}`}
          aria-label={`See our ${cardTitle} Service Section`}
          className="px-4 py-2 bg-[var(--red)] text-white text-sm lg:text-base rounded shadow-xl transitions-colors duration-300 ease-in-out hover:bg-[var(--black)]"
        >
          See More About {cardTitle}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
