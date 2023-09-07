import Link, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";

interface BaseProps {
  theme: "primary" | "neutral";
}

interface StyledButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  as?: "button";
}

interface StyledLinkProps
  extends BaseProps,
    LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> {
  as: "Link";
}

type LinkOrButtonProps = StyledButtonProps | StyledLinkProps;

const themes = {
  primary:
    "rounded-lg bg-primary-700 px-6 py-4 text-center font-medium uppercase tracking-widest text-white hover:bg-primary-300",
  neutral:
    "rounded-lg bg-white px-6 py-4 text-center font-medium uppercase tracking-widest text-black hover:bg-primary-300 hover:text-white",
};

const Button = ({
  theme,
  children,
  ...props
}: PropsWithChildren<LinkOrButtonProps>) => {
  if (props.as === "Link") {
    const { as, ...rest } = props;
    return (
      <Link className={themes[theme]} {...rest}>
        {children}
      </Link>
    );
  } else {
    const { as, ...rest } = props;
    return (
      <button className={themes[theme]} {...rest}>
        {children}
      </button>
    );
  }
};

export default Button;
