import { Button } from "@mui/material";

type InfoCardProps = {
  footer?: boolean;
};

const InfoCard = ({ footer = false }: InfoCardProps) => {
  const infoCardTypeStyle = footer
    ? "text-base text-gray-400"
    : "flex flex-col justify-between w-[400px] h-[350px] m-4 text-lg text-black";
  const strokeWidth = footer ? 1 : 1.5;
  const icon = footer ? "w-6 m-2" : "w-8 m-4";
  const cardHeader = footer ? (
    <h2 className="text-3xl mb-4">Ozzy Renos</h2>
  ) : (
    <h2 className="text-5xl text-black mb-2">Ozzy Renos</h2>
  );

  return (
    <div className={`${infoCardTypeStyle}`}>
      {cardHeader}
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          className={icon}
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
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          className={icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <p>(905) 123-4567</p>
      </div>
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          className={icon}
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
        <p className="text-xl py-4 font-bold">
          Serving the Niagara Region for all your construction and renovation
          needs{" "}
        </p>
      )}
    </div>
  );
};

export default InfoCard;
