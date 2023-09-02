import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

interface StyledButtonProps {
  theme: "primary" | "neutral";
  buttonProps?: Exclude<
    ComponentProps<"button">,
    ComponentProps<"button">["className"]
  >;
}

const themes = {
  primary:
    "rounded-lg bg-primary-700 px-6 py-4 text-center font-medium uppercase tracking-widest  text-white hover:bg-primary-300",
  neutral:
    "rounded-lg bg-white px-6 py-4 text-center font-medium uppercase tracking-widest text-black hover:bg-primary-300 hover:text-white",
};

const Button = ({
  theme,
  children,
  ...props
}: PropsWithChildren<StyledButtonProps>) => {
  return (
    <button className={themes[theme]} {...props}>
      {children}
    </button>
  );
};

export default Button;
