import LocationLinks from "../components/shared/LocationLinks";
import Picture from "../components/shared/Picture";

export default function About() {
  return (
    <main>
      {/* Hero */}
      <div className="sm:container sm:pb-28 lg:pb-40">
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

      <LocationLinks />
    </main>
  );
}
