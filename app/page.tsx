import CtaCard from "./components/shared/CtaCard";
import DesignerQualities from "./components/home/DesignerQualities";
import ImageLink from "./components/shared/ImageLink";
import Image from "next/image";
import heroImage from "/public/assets/home/desktop/image-hero-phone.png";
import Button from "./components/shared/Button";
import leaf from "/public/assets/shared/desktop/bg-pattern-leaf.svg";

export default function Home() {
  return (
    <>
      <main className="isolate overflow-hidden">
        {/* Hero */}
        <section className="relative mb-32 sm:container xl:mb-40">
          <div
            className="overflow-hidden bg-primary-700 bg-hero-pattern 
                       bg-left bg-no-repeat sm:rounded-2xl sm:bg-[position:6rem] md:bg-[position:10rem] lg:bg-right-top"
          >
            <div className="grid justify-items-center px-6 pt-20 sm:px-0 lg:grid-flow-col lg:pt-0 xl:grid-cols-[1fr_auto]">
              <div
                className="grid justify-items-center gap-6 text-center text-white lg:place-content-center 
                lg:justify-items-start lg:pl-16 lg:text-start xl:gap-10 xl:pl-24"
              >
                <h1 className="max-w-text-heading text-4xl font-medium md:text-5xl lg:text-4xl xl:text-5xl">
                  Award-winning custom designs and digital branding solutions
                </h1>
                <p className="max-w-text-narrow">
                  With over 10 years in the industry, we are experienced in
                  creating fully responsive websites, app design, and engaging
                  brand experiences. Find out more about our services.
                </p>
                <div className="z-10 lg:mt-4">
                  <Button theme="neutral" as="Link" href="/about">
                    learn more
                  </Button>
                </div>
              </div>
              <div className="z-0 w-fit">
                <Image
                  // Cropping lower part of the image and roughly aligning it with the heading.
                  className="-mb-[48.67%] -mt-[8%] lg:-mb-[25%] lg:pt-7 xl:-mt-[4%] xl:pt-12"
                  src={heroImage}
                  priority
                  alt="A picture of a phone showing a website of our design"
                />
              </div>
            </div>
          </div>
          <Image
            alt=""
            src={leaf}
            className="invisible absolute -bottom-72 -left-40 -z-50 lg:visible lg:max-w-4xl  xl:max-w-none"
          />
        </section>

        {/* Links to designs */}
        <section className="container mb-28 grid gap-y-28 md:mb-16 lg:mb-24 xl:mb-40 xl:gap-y-40">
          <h2 className="sr-only">Our designs</h2>
          <div className="grid gap-y-6 lg:grid-cols-2 lg:gap-x-8">
            <ImageLink
              destination="web-design"
              alternativeUrls={{
                lg: "/assets/home/desktop/image-web-design-large.jpg",
              }}
              className="lg:row-span-2"
            />
            <ImageLink destination="app-design" />
            <ImageLink destination="graphic-design" />
          </div>
          <div className="relative">
            <DesignerQualities />
            <Image
              alt=""
              src={leaf}
              className="invisible absolute -right-40 top-32 -z-50 rotate-180 lg:visible lg:max-w-4xl xl:max-w-none"
            />
          </div>
        </section>

        <CtaCard />
      </main>
    </>
  );
}
