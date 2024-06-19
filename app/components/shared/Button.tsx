import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
} from "react";

const buttonVariants = cva(
  "rounded-lg px-6 py-4 text-center font-medium uppercase tracking-widest hover:bg-primary-300",
  {
    variants: {
      theme: {
        primary: "bg-primary-700 text-white ",
        neutral: "bg-white text-black hover:text-white",
      },
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface BaseProps extends Required<Pick<ButtonVariantProps, "theme">> {}

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

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  LinkOrButtonProps
>(function Button(props, ref) {
  if (props.as === "Link") {
    const { as, theme, children, ...rest } = props;
    return (
      <Link
        className={buttonVariants({ theme })}
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
        className={buttonVariants({ theme })}
        {...rest}
        ref={ref as ForwardedRef<HTMLButtonElement>}
      >
        {children}
      </button>
    );
  }
});

export default Button;
