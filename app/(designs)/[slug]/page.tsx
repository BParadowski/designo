import pageData from "./pageData";
import { Slug, slugs } from "./pageData";
import CtaCard from "@/app/components/shared/CtaCard";

export function generateStaticParams() {
  return slugs.map((slug) => {
    return { slug };
  });
}

export default function Designs({ params }: { params: { slug: Slug } }) {
  const data = pageData.find((page) => page.slug === params.slug);

  const bgImageStyling = ` lg:bg-hero-${params.slug} lg:bg-left`;
  return (
    <>
      <main>{JSON.stringify(data?.cards)}</main>
      <CtaCard />
    </>
  );
}
