import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

interface StyledButtonProps {
  theme: "primary" | "neutral";
  className?: ComponentProps<"picture">["className"];
  href?: string;
  buttonProps?: ComponentProps<"button">;
}

const Button = ({
  theme,
  href,
  className,
  children,
  buttonProps,
}: PropsWithChildren<StyledButtonProps>) => {
  let styling: string;

  if (theme === "primary") {
    styling = `rounded-lg bg-primary-700 px-6 py-4 text-center font-medium uppercase
       tracking-widest  text-white hover:bg-primary-300`;
  } else {
    styling = `rounded-lg bg-white px-6 py-4 text-center font-medium uppercase 
    tracking-widest text-black hover:bg-primary-300 hover:text-white`;
  }

  if (href)
    return (
      <Link href={href} className={styling + " " + (className ?? "")}>
        {children}
      </Link>
    );
  else {
    return (
      <button className={styling + " " + (className ?? "")} {...buttonProps}>
        {children}
      </button>
    );
  }
};

export default Button;
