import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-center w-full h-[85px] bg-white border-b-2 border-gray-300 shadow-md">
      <div className="flex items-center w-full h-full max-w-[1200px]">
        <Image
          src="/logo.png"
          alt="OzzyRenos"
          width={140}
          height={70}
          className="mx-6"
        />
        <Navigation />
        <div>
          <Link href="/contact" className="mx-2">
            <Button
              variant="contained"
              aria-current="page"
              sx={{
                backgroundColor: "var(--red)",
                fontSize: "1.25rem",
                "&:hover": {
                  backgroundColor: "var(--black)",
                  borderColor: "var(--black)",
                },
              }}
            >
              CONTACT US
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
