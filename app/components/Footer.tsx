import Link from "next/link";
import SvgIconTwitter from "./svgs/IconTwitter";
import SvgIconFacebook from "./svgs/IconFacebook";
import SvgIconInstagram from "./svgs/IconInstagram";
import SvgIconYoutube from "./svgs/IconYoutube";
import SvgIconPinterest from "./svgs/IconPinterest";
import Image from "next/image";
import logo from "@/public/assets/shared/desktop/logo-light.png";

const Footer = () => {
  return (
    <footer className=" bg-black py-16 md:py-20 xl:py-16">
      <div className="container ">
        <div className="grid items-center justify-items-center gap-y-8 md:grid-cols-2 md:justify-items-start">
          <Link href="/">
            <Image src={logo} alt="designo logo" className="max-h-7 w-auto" />
          </Link>
          <div className="h-[0.0625rem] w-full bg-white bg-opacity-10 md:order-3 md:col-span-2 "></div>
          <div className="flex flex-col gap-8 text-center text-sm uppercase tracking-widest text-white md:flex-row md:justify-self-end ">
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
          </div>
        </div>

        <div className="mt-10 grid justify-items-center gap-y-10 text-center md:mt-8  md:grid-flow-col md:justify-items-start md:text-start">
          <p className="text-white opacity-50">
            <span className="font-bold">Designo Central Office</span> <br />
            3886 Wellington Street
            <br />
            Toronto, Ontario M9C 3J5
          </p>
          <p className="text-white opacity-50">
            <span className="font-bold">Contact Us (Central Office)</span>{" "}
            <br />P : +1 253-863-8967 <br />M : contact@designo.co
          </p>
          <div className="flex gap-4 md:place-self-end">
            <SvgIconFacebook className="fill-primary-700 hover:fill-primary-300" />
            <SvgIconYoutube className="fill-primary-700 hover:fill-primary-300" />
            <SvgIconTwitter className="fill-primary-700 hover:fill-primary-300" />
            <SvgIconPinterest className="fill-primary-700 hover:fill-primary-300" />
            <SvgIconInstagram className="fill-primary-700 hover:fill-primary-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
