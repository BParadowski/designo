import LocationLinks from "../components/shared/LocationLinks";
import Picture from "../components/shared/Picture";
import Image from "next/image";
import leaf from "/public/assets/shared/desktop/bg-pattern-leaf.svg";
import CtaCard from "../components/shared/CtaCard";

export default function About() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <div className="sm:container sm:mb-28 lg:mb-40">
        <div
          className="bg-about-hero-mobile sm:bg-about-hero-tablet grid overflow-hidden bg-primary-700 bg-right bg-no-repeat
                sm:rounded-2xl sm:bg-[position:-7rem_-6rem] lg:grid-flow-col lg:grid-cols-[1fr-fit-content] xl:bg-left-bottom"
        >
          <Picture
            base="/assets/about/mobile/image-about-hero.jpg"
            sm="/assets/about/tablet/image-about-hero.jpg"
            lg="/assets/about/desktop/image-about-hero.jpg"
            className="lg:col-end-3"
          />
          <div
            className="container grid place-content-center gap-6 py-20 text-center text-white sm:px-8 md:px-14 lg:gap-8
                             lg:px-16 lg:py-0 lg:text-start xl:px-24"
          >
            <h1 className="max-w-text-narrow text-3xl font-medium capitalize md:text-5xl">
              about us
            </h1>
            <p className="lg:max-w-text-narrow">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>
      </div>

      {/* Layout div */}
      <div className="grid gap-28 lg:gap-40">
        {/* World class talent */}
        <div className="sm:container">
          <div
            className="bg-primary-100 bg-three-circles lg:grid-col-[fit-content_1fr] grid overflow-hidden bg-[position:left_bottom_-2rem]
                            bg-no-repeat sm:rounded-xl sm:bg-[position:left_4rem_bottom_3rem] lg:grid-flow-col lg:bg-bottom"
          >
            <Picture
              base="/assets/about/mobile/image-world-class-talent.jpg"
              sm="/assets/about/tablet/image-world-class-talent.jpg"
              lg="/assets/about/desktop/image-world-class-talent.jpg"
            />
            <div className="container grid place-content-center gap-6 py-20 text-center sm:py-12 lg:text-start xl:px-24">
              <h2 className=" text-3xl font-medium text-primary-700 md:text-4xl">
                World-class talent
              </h2>
              <p className="lg:max-w-text-narrow">
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </p>
              <p className="lg:max-w-text-narrow">
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <LocationLinks />
          <Image
            alt=""
            src={leaf}
            className="invisible absolute -right-80 top-44 -z-50 lg:visible lg:max-w-4xl  xl:max-w-none"
          />
        </div>

        {/* The real deal */}
        <div className="sm:container">
          <div
            className="bg-primary-100 bg-three-circles lg:grid-col-[fit-content_1fr] grid overflow-hidden bg-[position:left_bottom_-2rem]
                            bg-no-repeat sm:rounded-xl sm:bg-[position:left_4rem_bottom_3rem] lg:grid-flow-col lg:bg-bottom"
          >
            <Picture
              base="/assets/about/mobile/image-real-deal.jpg"
              sm="/assets/about/tablet/image-real-deal.jpg"
              lg="/assets/about/desktop/image-real-deal.jpg"
              className="lg:col-end-3"
            />
            <div className="container grid place-content-center gap-6 py-20 text-center sm:py-12 lg:text-start xl:px-24">
              <h2 className=" text-3xl font-medium text-primary-700 md:text-4xl">
                The real deal
              </h2>
              <p className="lg:max-w-text-narrow">
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p className="lg:max-w-text-narrow">
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </div>
        </div>

        <CtaCard />
      </div>
    </main>
  );
}
