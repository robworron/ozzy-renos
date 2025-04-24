"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "../types";

type SidebarNavProps = {
  toggleSidebar: () => void;
};

const SidebarNav = ({ toggleSidebar }: SidebarNavProps) => {
  const currentPath = usePathname();

  return (
    <nav
      role="navigation"
      aria-label="Navigation"
      className="fixed top-[85px] left-0 z-50 flex flex-col justify-center flex-1 gap-4 w-[75vw] max-w-[300px] border-r-2 border-b-2 border-gray-300 bg-white shadow-md"
    >
      {pages.map((page) => (
        <Link
          key={page.title}
          href={page.path}
          className={`relative group flex justify-between items-center w-full h-[100px] p-4 text-xl text-[var(--red)] transition-colors duration-300 ${
            currentPath === page.path ? "font-semibold" : ""
          }`}
          onClick={toggleSidebar}
        >
          <h2 className="m-4 text-2xl">{page.title}</h2>
          {page.svg}
          <span
            className={`absolute left-1/2 bottom-4 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
              currentPath === page.path ? "w-[80%]" : "w-0 group-hover:w-[80%]"
            }`}
          />
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
