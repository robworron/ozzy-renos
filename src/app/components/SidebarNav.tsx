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
      {pages.map((page) =>
        page.path ? (
          <Link
            key={page.title}
            href={page.path}
            className={`relative group flex justify-between items-center w-full h-[50px] p-4 text-lg text-[var(--red)] transition-colors duration-300 ${
              currentPath === page.path ? "font-semibold" : ""
            }`}
            onClick={toggleSidebar}
            aria-label={`Navigate to ${page.title}`}
            aria-current={currentPath === page.path ? "page" : undefined}
          >
            <h2 className="m-4 text-xl">{page.title}</h2>
            <span
              className={`absolute left-1/2 bottom-1 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                currentPath === page.path
                  ? "w-[80%]"
                  : "w-0 group-hover:w-[80%]"
              }`}
            />
          </Link>
        ) : (
          <>
            <Link
              href="/kitchens"
              className={`relative group flex justify-between items-center w-full h-[50px] p-4 text-lg text-[var(--red)] transition-colors duration-300 ${
                currentPath === "/kitchens" ? "font-semibold" : ""
              }`}
              onClick={toggleSidebar}
              aria-label={`Navigate to Kitchens`}
              aria-current={currentPath === "/kitchens" ? "page" : undefined}
            >
              <h2 className="m-4 text-xl">Kitchens</h2>
              <span
                className={`absolute left-1/2 bottom-1 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                  currentPath === "/kitchens"
                    ? "w-[80%]"
                    : "w-0 group-hover:w-[80%]"
                }`}
              />
            </Link>
            <Link
              href="/bathrooms"
              className={`relative group flex justify-between items-center w-full h-[50px] p-4 text-lg text-[var(--red)] transition-colors duration-300 ${
                currentPath === "/bathrooms" ? "font-semibold" : ""
              }`}
              onClick={toggleSidebar}
              aria-label={`Navigate to Bathrooms`}
              aria-current={currentPath === "/bathrooms" ? "page" : undefined}
            >
              <h2 className="m-4 text-xl">Bathrooms</h2>
              <span
                className={`absolute left-1/2 bottom-1 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                  currentPath === "/bathrooms"
                    ? "w-[80%]"
                    : "w-0 group-hover:w-[80%]"
                }`}
              />
            </Link>
            <Link
              href="/basements"
              className={`relative group flex justify-between items-center w-full h-[50px] p-4 text-lg text-[var(--red)] transition-colors duration-300 ${
                currentPath === "/basements" ? "font-semibold" : ""
              }`}
              onClick={toggleSidebar}
              aria-label={`Navigate to Basements`}
              aria-current={currentPath === "/basements" ? "page" : undefined}
            >
              <h2 className="m-4 text-xl">Basements</h2>
              <span
                className={`absolute left-1/2 bottom-1 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                  currentPath === "/basements"
                    ? "w-[80%]"
                    : "w-0 group-hover:w-[80%]"
                }`}
              />
            </Link>
            <Link
              href="/flooring"
              className={`relative group flex justify-between items-center w-full h-[50px] p-4 text-lg text-[var(--red)] transition-colors duration-300 ${
                currentPath === "/flooring" ? "font-semibold" : ""
              }`}
              onClick={toggleSidebar}
              aria-label={`Navigate to Flooring`}
              aria-current={currentPath === "/flooring" ? "page" : undefined}
            >
              <h2 className="m-4 text-xl">Flooring</h2>
              <span
                className={`absolute left-1/2 bottom-1 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                  currentPath === "/flooring"
                    ? "w-[80%]"
                    : "w-0 group-hover:w-[80%]"
                }`}
              />
            </Link>
            <Link
              href="/decks"
              className={`relative group flex justify-between items-center w-full h-[50px] p-4 text-lg text-[var(--red)] transition-colors duration-300 ${
                currentPath === "/decks" ? "font-semibold" : ""
              }`}
              onClick={toggleSidebar}
              aria-label={`Navigate to Decks`}
              aria-current={currentPath === "/decks" ? "page" : undefined}
            >
              <h2 className="m-4 text-xl">Decks</h2>
              <span
                className={`absolute left-1/2 bottom-1 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                  currentPath === "/decks"
                    ? "w-[80%]"
                    : "w-0 group-hover:w-[80%]"
                }`}
              />
            </Link>
          </>
        )
      )}
    </nav>
  );
};

export default SidebarNav;
