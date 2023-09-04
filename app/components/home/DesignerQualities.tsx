import friendly from "public/assets/home/desktop/illustration-friendly.svg";
import passionate from "public/assets/home/desktop/illustration-passionate.svg";
import resourceful from "public/assets/home/desktop/illustration-resourceful.svg";
import Image from "next/image";

const DesignerQualities = () => {
  return (
    <div className="grid gap-y-20 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8">
      <Card
        imgSrc={passionate}
        title="passionate"
        text="Each project starts with an in-depth brand research to ensure we only
        create products that serve a purpose. We merge art, design, and
        technology into exciting new solutions."
      />
      <Card
        imgSrc={resourceful}
        title="resourceful"
        bgRotate="counterclockwise"
        text="Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs."
      />
      <Card
        imgSrc={friendly}
        title="friendly"
        bgRotate="clockwise"
        text="We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide."
      />
    </div>
  );
};

export default DesignerQualities;

interface CardProps {
  imgSrc: any;
  /**
   * Allows to rotate the gradient in the image background 90 degrees.
   */
  bgRotate?: "counterclockwise" | "clockwise";
  title: string;
  text: string;
}

const Card = ({ imgSrc, bgRotate, title, text }: CardProps) => {
  let rotation = "";
  if (bgRotate) {
    rotation = bgRotate === "clockwise" ? "rotate-90" : "-rotate-90";
  }

  return (
    <div
      className="grid place-items-center gap-8  text-center md:grid-cols-[auto_1fr]
                    md:grid-rows-[auto_auto] md:place-items-start md:gap-x-10 md:gap-y-4 md:text-start
                    lg:grid-cols-none lg:grid-rows-none lg:place-items-center lg:gap-8 lg:text-center"
    >
      <div className="relative md:row-span-2 lg:row-auto">
        <div
          className={
            "absolute inset-x-0 inset-y-0 -z-10 bg-small-circle " + rotation
          }
        />
        <Image src={imgSrc} alt={`A picture of a ${title} designer`}></Image>
      </div>
      <p className="text-xl font-medium uppercase tracking-huge md:self-end lg:self-auto">
        {title}
      </p>
      <p className="max-w-text-narrow">{text}</p>
    </div>
  );
};
