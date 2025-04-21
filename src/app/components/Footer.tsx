import InfoCard from "./InfoCard";

const Footer = () => {
  return (
    <div className="w-full h-[250px] flex flex-col justify-center items-center bg-[var(--black)] text-white py-4">
      <div className="flex flex-row w-[50%]">
        <InfoCard footer />
      </div>
      <p className="text-center mt-6 text-gray-400">
        &copy; {new Date().getFullYear()} OzzyRenos. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
