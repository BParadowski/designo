import Image from "next/image";
import CircleBg, { CircleBgRotationOptions } from "../shared/CircleBg";

interface CardProps {
  imgSrc: any;
  /**
   * Allows to rotate the gradient in the image background 90 degrees.
   */
  bgRotate?: CircleBgRotationOptions;
  title: string;
  text: string;
}

const Card = ({ imgSrc, bgRotate, title, text }: CardProps) => {
  return (
    <div
      className="grid place-items-center gap-8  text-center md:grid-cols-[auto_1fr]
                    md:grid-rows-[auto_auto] md:place-items-start md:gap-x-10 md:gap-y-4 md:text-start
                    lg:grid-cols-none lg:grid-rows-none lg:place-items-center lg:gap-8 lg:text-center"
    >
      <div className="relative md:row-span-2 lg:row-auto">
        <CircleBg rotate={bgRotate} />
        <Image src={imgSrc} alt={`A picture of a ${title} designer`}></Image>
      </div>
      <p className="text-xl font-medium uppercase tracking-huge md:self-end lg:self-auto">
        {title}
      </p>
      <p className="max-w-text-narrow">{text}</p>
    </div>
  );
};

export default Card;
