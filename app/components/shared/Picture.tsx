import { ComponentProps } from "react";

interface PictureProps {
  base: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  className?: ComponentProps<"picture">["className"];
}

const Picture = ({ base, sm, md, lg, xl, className }: PictureProps) => {
  return (
    <picture className={className}>
      {Boolean(xl) && <source srcSet={xl} media="(min-width: 1280px)" />}
      {Boolean(lg) && <source srcSet={lg} media="(min-width: 1024px)" />}
      {Boolean(md) && <source srcSet={md} media="(min-width: 768px)" />}
      {Boolean(sm) && <source srcSet={sm} media="(min-width: 640px)" />}
      <img alt="" src={base} className="w-full"></img>
    </picture>
  );
};

export default Picture;
