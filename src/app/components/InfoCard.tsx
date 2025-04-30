type InfoCardProps = {
  footer?: boolean;
};

const InfoCard = ({ footer = false }: InfoCardProps) => {
  const infoLineStyles = "flex flex-row items-center gap-2";
  const stroke = footer ? "white" : "var(--red)";
  const size = footer ? "size-4 lg:size-6" : "size-6 lg:size-8";

  return (
    <div
      className={
        footer
          ? "flex flex-col gap-2 mx-auto md:mx-0 text-sm"
          : "flex flex-col justify-between w-[90%] h-[350px] p-4 text-base md:text-lg text-black"
      }
    >
      {footer ? (
        <h2 className="text-xl">Ozzy Renos</h2>
      ) : (
        <h1 className="mb-4 text-xl text-black md:text-3xl lg:text-5xl">
          Ozzy Renos
        </h1>
      )}
      <div className={infoLineStyles}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={stroke}
          className={size}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <div className={footer ? "flex" : "flex flex-col p-1"}>
          <p>
            <b>Monday - Sunday</b>
          </p>
          <p className={footer ? "pl-2" : ""}>9:00am - 6:00pm</p>
        </div>
      </div>
      <div className={infoLineStyles}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={stroke}
          className={size}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <p>(905) 932-6681</p>
      </div>
      <div className={infoLineStyles}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={stroke}
          className={size}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <p>ozzyrenos@yahoo.com</p>
      </div>
      {footer ? (
        <></>
      ) : (
        <p className="py-4 text-base font-bold lg:text-lg">
          Serving the Niagara Region for all your construction and renovation
          needs.
        </p>
      )}
    </div>
  );
};

export default InfoCard;
