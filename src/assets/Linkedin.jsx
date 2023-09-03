import * as React from "react"
const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M.833 2.365A1.532 1.532 0 0 1 2.365.833h15.268a1.53 1.53 0 0 1 1.534 1.532v15.268a1.533 1.533 0 0 1-1.533 1.534H2.364a1.532 1.532 0 0 1-1.53-1.533V2.365ZM8.09 7.823h2.482V9.07c.359-.717 1.275-1.362 2.653-1.362 2.64 0 3.267 1.428 3.267 4.047v4.852h-2.673v-4.255c0-1.492-.358-2.334-1.268-2.334-1.263 0-1.788.908-1.788 2.334v4.255H8.09V7.823Zm-4.583 8.67H6.18V7.707H3.507v8.784Zm3.055-11.65a1.72 1.72 0 1 1-3.437.076 1.72 1.72 0 0 1 3.437-.076Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Linkedin
