import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/shared/desktop/logo-dark.png";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 max-w-full bg-white md:static">
      <div className="container">
        <div className="flex h-[--header-height] items-center ">
          <Link href="/">
            <Image src={logo} alt="designo logo" className="max-h-7 w-auto" />
          </Link>
          <nav className="ml-auto hidden gap-8 text-sm uppercase tracking-widest text-neutral-800 md:flex">
            <Link className="underline-offset-2 hover:underline" href="/about">
              our company
            </Link>
            <Link
              className="underline-offset-2 hover:underline"
              href="/locations"
            >
              locations
            </Link>
            <Link
              className="underline-offset-2 hover:underline"
              href="/contact"
            >
              contact
            </Link>
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
