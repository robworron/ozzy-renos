import InfoCard from "./InfoCard";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[280px] mt-24 p-6 bg-[var(--black)] text-white">
      <div className="flex flex-col md:flex-row justify-around gap-4 w-full max-w-[1200px]">
        <InfoCard footer />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.217282568346!2d-79.13694380981116!3d43.0999484136181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d344954c6acaad%3A0x93749d96d753bfef!2s8065%20Post%20Rd%2C%20Niagara%20Falls%2C%20ON%20L2H%202L2!5e0!3m2!1sen!2sca!4v1745294524745!5m2!1sen!2sca"
          loading="lazy"
          className="w-full md:w-[40%] h-full max-w-[250px] lg:max-w-[320px] max-h-[250px] mx-auto md:mx-0 rounded-lg"
        ></iframe>
      </div>
      <p className="mt-10 text-sm text-center md:text-base">
        &copy; {new Date().getFullYear()} OzzyRenos. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
