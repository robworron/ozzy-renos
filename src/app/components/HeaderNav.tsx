"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "../types";

const HeaderNav = () => {
  const currentPath = usePathname();

  return (
    <nav
      role="navigation"
      aria-label="Navigation"
      className="hidden lg:flex lg:items-center lg:flex-1"
    >
      {pages.map((page) => (
        <Link
          key={page.title}
          href={page.path}
          className={`relative group text-[var(--red)] text-xl px-0 py-2 mx-2 transition-colors duration-300 ${
            currentPath === page.path ? "font-semibold" : ""
          }`}
          aria-current={currentPath === page.path ? "page" : undefined}
        >
          <h2>{page.title}</h2>
          <span
            className={`absolute left-1/2 -bottom-0.5 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
              currentPath === page.path ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNav;
