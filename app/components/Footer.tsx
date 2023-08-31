import Link from "next/link";
import SvgIconTwitter from "./svgs/IconTwitter";
import SvgIconFacebook from "./svgs/IconFacebook";
import SvgIconInstagram from "./svgs/IconInstagram";
import SvgIconYoutube from "./svgs/IconYoutube";
import SvgIconPinterest from "./svgs/IconPinterest";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container">
        <nav className="hidden flex-col gap-8 text-sm uppercase tracking-widest text-white md:flex">
          <Link href="/about">our company</Link>
          <Link href="/locations">locations</Link>
          <Link href="/contact">contact</Link>
        </nav>
        <div className="flex gap-4">
          <SvgIconFacebook className="fill-primary-700 hover:fill-primary-300" />
          <SvgIconYoutube className="fill-primary-700 hover:fill-primary-300" />
          <SvgIconTwitter className="fill-primary-700 hover:fill-primary-300" />
          <SvgIconPinterest className="fill-primary-700 hover:fill-primary-300" />
          <SvgIconInstagram className="fill-primary-700 hover:fill-primary-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
