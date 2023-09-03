import allPagesData from "./pageData";
import { Slug, slugs } from "./pageData";
import CtaCard from "@/app/components/shared/CtaCard";
import leaf from "/public/assets/shared/desktop/bg-pattern-leaf.svg";
import Image from "next/image";

export function generateStaticParams() {
  return slugs.map((slug) => {
    return { slug };
  });
}

export default function Designs({ params }: { params: { slug: Slug } }) {
  const data = allPagesData[params.slug];
  const bgImageStyling = ` lg:bg-hero-${params.slug} lg:bg-left`;
  return (
    <>
      <main>
        <div className="relative mb-24 md:container sm:mb-32 xl:mb-40">
          <div
            className="bg-design-pages-intro-mobile sm:bg-design-pages-intro-tablet bg-primary-700
                         bg-right-top bg-no-repeat sm:bg-right md:rounded-2xl"
          >
            <div className="container grid place-content-center gap-6 py-24 text-center text-white">
              <h1 className="text-3xl font-medium uppercase md:text-5xl">
                {data.title}
              </h1>
              <p className="max-w-text-narrow">{data.introduction}</p>
            </div>
          </div>
          <Image
            alt=""
            src={leaf}
            className="invisible absolute -left-20 top-32 -z-50 lg:visible lg:max-w-4xl  xl:max-w-none"
          />
        </div>
        <div className="container grid gap-y-10 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8">
          {data.cards.map((card) => (
            <div
              key={card.title}
              className="bg-primary-100 overflow-hidden rounded-2xl sm:grid sm:grid-flow-col sm:grid-cols-2 lg:block"
            >
              <Image alt="preview of the design" src={card.image} />
              <div className="grid place-content-center gap-4 p-8 text-center">
                <h2 className="text-xl uppercase tracking-huge text-primary-700">
                  {card.title}
                </h2>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <CtaCard />
    </>
  );
}
