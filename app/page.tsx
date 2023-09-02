import CtaCard from "./components/shared/CtaCard";
import DesignerQualities from "./components/home/DesignerQualities";
import ImageLink from "./components/shared/ImageLink";
import Image from "next/image";
import heroImage from "/public/assets/home/desktop/image-hero-phone.png";
import Button from "./components/shared/Button";

export default function Home() {
  return (
    <>
      <main>
        <div className="mb-32 sm:container lg:mb-40">
          <div
            className="overflow-hidden bg-primary-700 bg-hero-pattern 
                       bg-left bg-no-repeat sm:rounded-2xl sm:bg-[position:6rem] md:bg-[position:10rem] lg:bg-right-top"
          >
            <div className=" grid justify-items-center pt-20 lg:grid-flow-col lg:pt-5 xl:grid-cols-[1fr_auto] xl:pt-0">
              <div
                className="grid justify-items-center gap-6 text-center text-white lg:place-content-center 
                lg:justify-items-start lg:pl-16 lg:text-start xl:gap-10 "
              >
                <h1 className="text-4xl font-medium md:text-5xl lg:text-4xl xl:text-5xl">
                  Award-winning custom
                  <br /> designs and digital
                  <br /> branding solutions
                </h1>
                <p className="max-w-text-narrow">
                  With over 10 years in the industry, we are experienced in
                  creating fully responsive websites, app design, and engaging
                  brand experiences. Find out more about our services.
                </p>
                <Button theme="neutral" href="/about" className="z-10">
                  learn more
                </Button>
              </div>
              <div className="z-0 w-fit">
                <Image
                  className="-mb-[48.67%] -mt-[8%] lg:-mb-[25%]"
                  src={heroImage}
                  priority
                  alt="A picture of a phone showing a website of our design"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-28 grid gap-y-28 md:mb-16 lg:mb-40 lg:gap-y-40">
          <div className="grid gap-y-6 lg:grid-cols-2 lg:gap-x-8">
            <ImageLink
              destination="webDesign"
              alternativeUrls={{
                lg: "/assets/home/desktop/image-web-design-large.jpg",
              }}
              className="lg:row-span-2"
            />
            <ImageLink destination="appDesign" />
            <ImageLink destination="graphicDesign" />
          </div>

          <DesignerQualities />
        </div>
      </main>

      <CtaCard />
    </>
  );
}
