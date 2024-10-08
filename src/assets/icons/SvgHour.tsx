import React, { SVGProps } from "react";

const SvgHour = ({ fill = "black", className }: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 24C10.34 24 8.78 23.6848 7.32 23.0544C5.86 22.4248 4.59 21.57 3.51 20.49C2.43 19.41 1.5752 18.14 0.9456 16.68C0.3152 15.22 0 13.66 0 12C0 10.34 0.3152 8.78 0.9456 7.32C1.5752 5.86 2.43 4.59 3.51 3.51C4.59 2.43 5.86 1.5748 7.32 0.9444C8.78 0.3148 10.34 0 12 0C13.66 0 15.22 0.3148 16.68 0.9444C18.14 1.5748 19.41 2.43 20.49 3.51C21.57 4.59 22.4248 5.86 23.0544 7.32C23.6848 8.78 24 10.34 24 12C24 13.66 23.6848 15.22 23.0544 16.68C22.4248 18.14 21.57 19.41 20.49 20.49C19.41 21.57 18.14 22.4248 16.68 23.0544C15.22 23.6848 13.66 24 12 24ZM15.96 17.64L17.64 15.96L13.2 11.52V6H10.8V12.48L15.96 17.64Z"
      fill={fill}
    />
  </svg>
);

export default SvgHour;
