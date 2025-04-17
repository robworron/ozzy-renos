"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";

const NavBar = () => {
  const currentPath = usePathname();

  const navPaths = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const containerStyles = classNames(
    "sticky top-0 z-50 bg-white w-full h-20 flex justify-center"
  );

  const navbarStyles = classNames(
    "w-full h-full max-w-[1200px] flex flex-row justify-between items-center"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: 24, marginRight: 10 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              905-123-4567
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
