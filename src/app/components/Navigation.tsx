"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "../types";

const Navigation = () => {
  const currentPath = usePathname();

  const headerButtonStyles = (isActive: boolean) => ({
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
    <nav
      role="navigation"
      aria-label="Navigation"
      className="flex items-center flex-1"
    >
      {pages.map((page) => (
        <Link key={page.title} href={page.path} className="mx-2">
          <Button
            disableRipple
            variant="text"
            aria-current={currentPath === page.path ? "page" : undefined}
            sx={headerButtonStyles(currentPath === page.path)}
          >
            {page.title}
          </Button>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
