import CtaCard from "./components/shared/CtaCard";
import DesignerQualities from "./components/home/DesignerQualities";
import ImageLink from "./components/shared/ImageLink";

export default function Home() {
  return (
    <>
      <main>
        <div className="container mb-28 grid gap-y-28 md:mb-16 lg:mb-40 lg:gap-y-40">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            enim libero error obcaecati deserunt at laudantium! Aut iusto
            voluptates sed voluptas sit placeat ea nam aperiam saepe pariatur
            sint perspiciatis provident eos, sunt nihil dignissimos officiis
            ipsam rem animi ducimus natus ut ab! Rerum est labore recusandae
            harum nesciunt, ut molestiae soluta corrupti animi quo earum vel
            accusamus commodi culpa? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum explicabo odit ex voluptatum saepe deserunt
            officia nulla perferendis temporibus commodi possimus architecto
            maxime quaerat dolorum aut magni accusamus facilis quisquam, nemo
            fugiat, distinctio eos eligendi tempore. A quos fugiat iste,
            necessitatibus facere doloremque nobis consequuntur itaque voluptate
            qui ad, tempore deleniti soluta, magni fugit odio rem reiciendis
            iure nisi. Reprehenderit provident facilis iusto minus deserunt
            velit, est tenetur! Consequatur illum quibusdam quam et. Praesentium
            soluta consequuntur ducimus itaque molestiae ex perspiciatis, quos
            tempora! Hic quibusdam ab id explicabo sit iste soluta quidem magnam
            animi nostrum nemo, quos dignissimos, vero quis!
          </p>
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
