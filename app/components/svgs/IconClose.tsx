import * as React from "react";
import { SVGProps } from "react";
const IconClose = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}>
    <path
      className={className}
      fill="#1D1C1E"
      fillRule="evenodd"
      d="M17.071.1 19.9 2.93 12.829 10l7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07L17.071.1z"
    />
  </svg>
);
export default IconClose;
