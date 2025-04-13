import InfoCard from "./InfoCard";

const Footer = () => {
  return (
    <div className="w-full h-[350px] flex flex-col justify-center items-center bg-[var(--black)] text-white py-4">
      <div className="flex flex-row">
        <InfoCard />
      </div>
      <p className="text-center">
        &copy; {new Date().getFullYear()} OzzyRenos. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
