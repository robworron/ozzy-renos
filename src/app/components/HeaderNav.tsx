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
      {pages.map((page) =>
        page.path ? (
          <Link
            key={page.title}
            href={page.path}
            className={`relative group text-[var(--red)] text-xl px-0 py-2 mx-2 transition-colors duration-300 ${
              currentPath === page.path ? "font-semibold" : ""
            }`}
            aria-label={`Navigate to ${page.title}`}
            aria-current={currentPath === page.path ? "page" : undefined}
          >
            <h2>{page.title}</h2>
            <span
              className={`absolute left-1/2 -bottom-0.5 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                currentPath === page.path ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        ) : (
          <div
            key={page.title}
            className="relative group text-[var(--red)] text-xl px-0 py-2 mx-2 transition-colors duration-300"
          >
            <div className="flex cursor-pointer">
              <h2 className="mr-1">Services</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 transition-transform duration-300 group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="absolute left-0 invisible mt-2 transition-all duration-200 bg-white rounded-lg shadow-lg opacity-0 top-12 w-60 group-hover:opacity-100 group-hover:visible">
              <Link
                href="/kitchens"
                className="relative flex p-4 hover:bg-gray-100"
              >
                <h2>Kitchens</h2>
                <span
                  className={`absolute z-[1] left-1/2 -bottom-0 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                    currentPath === "/kitchens"
                      ? "w-[90%]"
                      : "w-0 hover:w-[90%]"
                  }`}
                />
              </Link>
              <Link
                href="/bathrooms"
                className="relative flex p-4 hover:bg-gray-100"
              >
                <h2>Bathrooms</h2>
                <span
                  className={`absolute z-[1] left-1/2 -bottom-0 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                    currentPath === "/bathrooms"
                      ? "w-[90%]"
                      : "w-0 hover:w-[90%]"
                  }`}
                />
              </Link>
              <Link
                href="/basements"
                className="relative flex p-4 hover:bg-gray-100"
              >
                <h2>Basements</h2>
                <span
                  className={`absolute z-[1] left-1/2 -bottom-0 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                    currentPath === "/basements"
                      ? "w-[90%]"
                      : "w-0 hover:w-[90%]"
                  }`}
                />
              </Link>
              <Link
                href="/flooring"
                className="relative flex p-4 hover:bg-gray-100"
              >
                <h2>Flooring</h2>
                <span
                  className={`absolute z-[1] left-1/2 -bottom-0 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                    currentPath === "/flooring"
                      ? "w-[90%]"
                      : "w-0 hover:w-[90%]"
                  }`}
                />
              </Link>
              <Link
                href="/decks"
                className="relative flex p-4 group hover:bg-gray-100"
              >
                <h2>Decks & Fences</h2>
                <span
                  className={`absolute z-[1] left-1/2 -bottom-0 h-[2px] bg-[var(--red)] transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                    currentPath === "/decks" ? "w-[90%]" : "w-0 hover:w-[90%]"
                  }`}
                />
              </Link>
            </div>
          </div>
        )
      )}
    </nav>
  );
};

export default HeaderNav;
