import allPagesData from "./pageData";
import { Slug, slugs } from "./pageData";
import CtaCard from "@/app/components/shared/CtaCard";
import leaf from "/public/assets/shared/desktop/bg-pattern-leaf.svg";
import Image from "next/image";
import ImageLink from "@/app/components/shared/ImageLink";

export function generateStaticParams() {
  return slugs.map((slug) => {
    return { slug };
  });
}

const bgImageStyling = {
  "app-design": "lg:bg-intro-app-design lg:bg-[position:-4rem]",
  "web-design": "lg:bg-intro-web-design",
  "graphic-design": "lg:bg-intro-graphic-design lg:bg-[position:-4rem]",
};

export default function Designs({ params }: { params: { slug: Slug } }) {
  const data = allPagesData[params.slug];

  return (
    <>
      <main>
        {/* Layout spacing div */}
        <div className="grid gap-24 sm:gap-32 xl:gap-40">
          {/* Introduction card */}
          <div className="relative md:container ">
            <div
              className={`bg-design-pages-intro-mobile sm:bg-design-pages-intro-tablet bg-primary-700 bg-right-top bg-no-repeat sm:bg-right md:rounded-2xl ${
                bgImageStyling[params.slug]
              }`}
            >
              <div className="container grid place-content-center gap-6 py-24 text-center text-white lg:py-16">
                <h1 className="text-3xl font-medium uppercase md:text-5xl">
                  {data.title}
                </h1>
                <p className="max-w-text-narrow">{data.introduction}</p>
              </div>
            </div>
            <Image
              alt=""
              src={leaf}
              className="invisible absolute -left-20 -z-50 lg:visible lg:top-32 lg:max-w-4xl xl:top-28  xl:max-w-none"
            />
          </div>

          {/* Project cards */}
          <div className="container grid gap-y-10 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8">
            {data.cards.map((card) => (
              <div
                key={card.title}
                className="bg-primary-100 group overflow-hidden rounded-2xl transition-colors hover:cursor-pointer hover:bg-primary-700
                            sm:grid sm:grid-flow-col sm:grid-cols-2 lg:block"
              >
                <Image alt="preview of the design" src={card.image} />
                <div className="grid place-content-center gap-4 p-8 text-center">
                  <h2 className="text-xl uppercase tracking-huge text-primary-700 group-hover:text-white">
                    {card.title}
                  </h2>
                  <p className="group-hover:text-white">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Links to other designs */}
          <div className="container grid gap-6 lg:grid-flow-col lg:gap-8">
            {slugs.map(
              (slug) =>
                slug !== params.slug && (
                  <ImageLink destination={slug} key={slug} />
                ),
            )}
          </div>

          <CtaCard />
        </div>
      </main>
    </>
  );
}
