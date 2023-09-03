"use client";

import { useState } from "react";
import SvgIconHamburger from "./svgs/IconHamburger";
import SvgIconClose from "./svgs/IconClose";
import { createPortal } from "react-dom";
import Link from "next/link";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="ml-auto md:hidden"
      >
        {navOpen ? (
          <SvgIconClose className="fill-neutral-800" />
        ) : (
          <SvgIconHamburger className="fill-neutral-800" />
        )}
      </button>
      {navOpen &&
        createPortal(
          <div className="fixed bottom-0 left-0 right-0 top-[--header-height] bg-neutral-800 bg-opacity-50 md:hidden">
            <div className="bg-black">
              <div className="container">
                <nav className=" flex flex-col gap-8 py-12 text-end text-2xl uppercase tracking-widest text-white">
                  <Link href="/about">our company</Link>
                  <Link href="/locations">locations</Link>
                  <Link href="/contact">contact</Link>
                </nav>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default MobileNav;
