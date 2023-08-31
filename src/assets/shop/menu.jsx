import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M18.667 22.167a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm-9.334 0a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm9.334-9.334a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm-9.334 0a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
    />
  </svg>
);
export default SvgComponent;
