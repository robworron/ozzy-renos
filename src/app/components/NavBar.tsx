"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();

  const navPaths = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

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
    <nav role="navigation" aria-label="Navigation">
      {navPaths.map(({ label, path }) => (
        <Link key={label} href={path} className="mx-2">
          <Button
            disableRipple
            variant="text"
            sx={navbarButtonStyles(currentPath === path)}
          >
            {label}
          </Button>
        </Link>
      ))}
      <Link href="/form" className="mx-2">
        <Button
          variant="contained"
          sx={{ backgroundColor: "var(--red)", fontSize: "1.25rem" }}
        >
          Free Quote!
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
