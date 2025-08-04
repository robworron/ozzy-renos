import InfoCard from "./InfoCard";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full min-h-[180px] mt-24 p-6 bg-[var(--black)] text-white">
      <div className="flex flex-col md:flex-row justify-around gap-4 w-full max-w-[1200px]">
        <InfoCard footer />
      </div>
      <p className="mt-10 text-sm text-center md:text-base">
        &copy; {new Date().getFullYear()} OzzyRenos. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
