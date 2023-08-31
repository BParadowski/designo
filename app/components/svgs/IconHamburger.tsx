import * as React from "react";
import { SVGProps } from "react";

const IconHamburger = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={20}>
    <path
      className={className}
      fill="#1D1C1E"
      fillRule="evenodd"
      d="M0 0h24v4H0zm0 8h24v4H0zm0 8h24v4H0z"
    />
  </svg>
);
export default IconHamburger;
