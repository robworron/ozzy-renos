"use client";

import { Button } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();

  const navPaths = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const containerStyles = classNames(
    "sticky top-0 z-50 flex justify-center w-full h-20 bg-white border-b-2 border-gray-300 shadow-md"
  );

  const navbarStyles = classNames(
    "flex flex-row justify-between items-center w-full h-full max-w-[1200px]"
  );

  const navbarButtonStyles = (isActive: boolean) => ({
    position: "relative",
    color: "var(--red)",
    fontSize: "1.25rem",
    padding: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: isActive ? "100%" : 0,
      height: "2px",
      backgroundColor: "var(--red)",
      transition: "width 0.3s ease",
    },
    "&:hover::after": {
      width: "100%",
    },
  });

  return (
    <div className={containerStyles}>
      <nav role="navigation" aria-label="Navigation" className={navbarStyles}>
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="OzzyRenos"
            width={140}
            height={70}
            className="mx-6"
          />
          {navPaths.map(({ label, path }) => (
            <Link key={label} href={path} className="mx-2">
              <Button
                disableRipple
                variant="text"
                aria-current={currentPath === path ? "page" : undefined}
                sx={navbarButtonStyles(currentPath === path)}
              >
                {label}
              </Button>
            </Link>
          ))}
        </div>
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
      </nav>
    </div>
  );
};

export default NavBar;
