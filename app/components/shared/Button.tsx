import { PropsWithChildren } from "react";

const Button = ({
  type,
  children,
}: PropsWithChildren<{ type: "primary" | "neutral" }>) => {
  if (type === "primary")
    return (
      <button className="rounded-lg bg-primary-700 px-6 py-4 text-center font-medium uppercase tracking-widest  text-white hover:bg-primary-300">
        {children}
      </button>
    );
  else if (type === "neutral")
    return (
      <button className="rounded-lg bg-white px-6 py-4 text-center font-medium uppercase tracking-widest text-black hover:bg-primary-300 hover:text-white">
        {children}
      </button>
    );
};

export default Button;
