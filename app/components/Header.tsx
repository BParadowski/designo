import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/shared/desktop/logo-dark.png";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex h-[--header-height] items-center ">
          <Image src={logo} alt="designo logo" className="max-h-7 w-auto" />
          <nav className="ml-auto hidden gap-8 text-sm uppercase tracking-widest text-neutral-800 md:flex">
            <Link href="/about">our company</Link>
            <Link href="/locations">locations</Link>
            <Link href="/contact">contact</Link>
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
