import Link, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
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

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  LinkOrButtonProps
>(function Button(props, ref) {
  if (props.as === "Link") {
    const { as, theme, children, ...rest } = props;
    return (
      <Link
        className={themes[theme]}
        {...rest}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  } else {
    const { as, theme, children, ...rest } = props;
    return (
      <button
        className={themes[theme]}
        {...rest}
        ref={ref as ForwardedRef<HTMLButtonElement>}
      >
        {children}
      </button>
    );
  }
});

export default Button;
