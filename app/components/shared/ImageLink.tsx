import Link from "next/link";
import Picture from "./Picture";
import SvgIconRightArrow from "../svgs/IconRightArrow";

const data = {
  imageUrls: {
    appDesign: {
      base: "/assets/home/mobile/image-app-design.jpg",
      sm: "/assets/home/tablet/image-app-design.jpg",
      lg: "/assets/home/desktop/image-app-design.jpg",
    },
    webDesign: {
      base: "/assets/home/mobile/image-web-design.jpg",
      sm: "/assets/home/tablet/image-web-design.jpg",
      lg: "/assets/home/desktop/image-web-design.jpg",
    },
    graphicDesign: {
      base: "/assets/home/mobile/image-graphic-design.jpg",
      sm: "/assets/home/tablet/image-graphic-design.jpg",
      lg: "/assets/home/desktop/image-graphic-design.jpg",
    },
  },
  destinationUrls: {
    appDesign: "/app-design",
    webDesign: "/web-design",
    graphicDesign: "/graphic-design",
  },
  titles: {
    appDesign: "app design",
    webDesign: "web design",
    graphicDesign: "graphic design",
  },
};

interface ImageLinkProps {
  destination: "webDesign" | "appDesign" | "graphicDesign";
}

const ImageLink = ({ destination }: ImageLinkProps) => {
  return (
    <Link href={data.destinationUrls[destination]}>
      <div className="group grid items-center overflow-hidden rounded-2xl">
        <Picture
          {...data.imageUrls[destination]}
          className="z-0 col-span-full row-span-full"
        ></Picture>
        <div className="z-20 col-span-full row-span-full  text-center uppercase text-white ">
          <h2 className="text-3xl font-medium md:text-4xl">
            {data.titles[destination]}
          </h2>
          <p className="mt-3 flex items-center justify-center tracking-huge md:mt-6">
            view projects
            <SvgIconRightArrow className="ml-4 inline stroke-primary-700" />
          </p>
        </div>
        <div className="invisible z-10 col-span-full row-span-full h-full w-full bg-primary-700 opacity-50 group-hover:visible" />
      </div>
    </Link>
  );
};

export default ImageLink;
