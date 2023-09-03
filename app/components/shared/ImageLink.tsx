import Link from "next/link";
import Picture from "./Picture";
import SvgIconRightArrow from "../svgs/IconRightArrow";
import { ComponentProps } from "react";
import { Slug } from "@/app/(designs)/[slug]/pageData";

interface OptionalResponsiveUrls {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface ResponsiveUrls extends OptionalResponsiveUrls {
  base: string;
}

type LinkData = {
  title: string;
  imageUrls: ResponsiveUrls;
};

type AllLinksData = {
  [K in Slug]: LinkData;
};

type ImageLinkProps = {
  destination: Slug;
  className?: ComponentProps<"a">["className"];
  /**
   * Allows to replace default images used within the component.
   * @param {OptionalResponsiveUrls} urls - object defining new url {base?, sm?, md?, lg?, xl?}
   */
  alternativeUrls?: OptionalResponsiveUrls;
};

const data: AllLinksData = {
  "app-design": {
    title: "app design",
    imageUrls: {
      base: "/assets/home/mobile/image-app-design.jpg",
      sm: "/assets/home/tablet/image-app-design.jpg",
      lg: "/assets/home/desktop/image-app-design.jpg",
    },
  },
  "web-design": {
    title: "web design",
    imageUrls: {
      base: "/assets/home/mobile/image-web-design.jpg",
      sm: "/assets/home/tablet/image-web-design.jpg",
      lg: "/assets/home/desktop/image-web-design-small.jpg",
    },
  },
  "graphic-design": {
    title: "graphic design",
    imageUrls: {
      base: "/assets/home/mobile/image-graphic-design.jpg",
      sm: "/assets/home/tablet/image-graphic-design.jpg",
      lg: "/assets/home/desktop/image-graphic-design.jpg",
    },
  },
};

const ImageLink = ({
  destination,
  className,
  alternativeUrls,
}: ImageLinkProps) => {
  return (
    <Link href={`/${destination}`} className={className}>
      <div className="group grid items-center overflow-hidden rounded-2xl">
        <Picture
          {...data[destination].imageUrls}
          {...alternativeUrls}
          className="z-0 col-span-full row-span-full"
        ></Picture>
        <div className="z-20 col-span-full row-span-full  text-center uppercase text-white ">
          <h2 className="text-3xl font-medium md:text-4xl">
            {data[destination].title}
          </h2>
          <p className="mt-3 flex items-center justify-center tracking-huge md:mt-6">
            view projects
            <SvgIconRightArrow className="ml-4 inline stroke-primary-700" />
          </p>
        </div>
        <div className="z-10 col-span-full row-span-full h-full w-full bg-black opacity-70 transition-colors group-hover:bg-primary-700" />
      </div>
    </Link>
  );
};

export default ImageLink;
