import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22.024 7.143H8.929m-2.381 0H2.976m19.048 11.905H8.929m-2.381 0H2.976m13.095-5.953H2.976m19.048 0h-3.572M7.738 4.762a1.19 1.19 0 0 1 1.19 1.19v2.381a1.19 1.19 0 0 1-2.38 0v-2.38a1.19 1.19 0 0 1 1.19-1.191v0Zm0 11.905a1.19 1.19 0 0 1 1.19 1.19v2.381a1.19 1.19 0 0 1-2.38 0v-2.38a1.19 1.19 0 0 1 1.19-1.191Zm9.524-5.953a1.19 1.19 0 0 1 1.19 1.19v2.382a1.19 1.19 0 1 1-2.38 0v-2.381a1.19 1.19 0 0 1 1.19-1.19v0Z"
    />
  </svg>
);
export default SvgComponent;
