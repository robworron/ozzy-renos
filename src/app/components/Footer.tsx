import InfoCard from "./InfoCard";

const Footer = () => {
  return (
    <div className="w-full h-[300px] flex flex-col justify-center items-center bg-[var(--black)] text-white py-4">
      <div className="flex flex-row">
        <InfoCard footer />
      </div>
      <p className="text-center">
        &copy; {new Date().getFullYear()} OzzyRenos. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
