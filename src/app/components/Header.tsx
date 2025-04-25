"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./HeaderNav";
import SidebarNav from "./SidebarNav";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <>
      <header className="sticky top-0 z-40 flex justify-center w-full h-[85px] bg-white border-b-2 border-gray-300 shadow-md">
        <div className="flex items-center w-full h-full max-w-[1200px]">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-between w-[24px] h-[16px] m-4 bg-transparent border-0 focus:outline-none lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-black rounded-sm transition-transform duration-300 ease-in-out ${
                menuActive ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-black rounded-sm transition-opacity duration-300 ease-in-out ${
                menuActive ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-black rounded-sm transition-transform duration-300 ease-in-out ${
                menuActive ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
          <Image
            src="/logo.png"
            alt="OzzyRenos"
            width={2000}
            height={2000}
            className="w-[160px] h-[70px] mx-6"
          />
          <HeaderNav />
          <div>
            <Link
              href="/contact"
              className="hidden lg:flex lg:mx-2 lg:px-4 lg:py-2 lg:bg-[var(--red)] lg:text-white lg:text-xl lg:rounded lg:shadow-xl lg:transitions-colors lg:duration-300 lg:ease-in-out hover:bg-[var(--black)]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </header>
      {menuActive ? <SidebarNav toggleSidebar={toggleMenu} /> : null}
    </>
  );
};

export default Header;
