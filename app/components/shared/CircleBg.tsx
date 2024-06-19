import { cva, type VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const backgroundVariants = cva(
  "absolute inset-x-0 inset-y-0 -z-10 bg-small-circle",
  {
    variants: {
      rotation: {
        clockwise: "rotate-90",
        counterclockwise: "-rotate-90",
      },
    },
  },
);

export type CircleBgRotationOptions = VariantProps<
  typeof backgroundVariants
>["rotation"];

interface CircleBgProps extends PropsWithChildren {
  rotate?: CircleBgRotationOptions;
}

const CircleBg = ({ rotate, children }: CircleBgProps) => {
  if (children) {
    return (
      <div className="relative">
        <div className={backgroundVariants({ rotation: rotate })} />
        {children}
      </div>
    );
  }
  return <div className={backgroundVariants({ rotation: rotate })} />;
};

export default CircleBg;
