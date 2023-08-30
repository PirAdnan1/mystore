import * as React from "react"
const Time = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 18.83c4.97 0 9-3.99 9-8.915C19 4.992 14.97 1 10 1S1 4.992 1 9.915c0 4.924 4.03 8.916 9 8.916Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.7 13.482-2.173-2.153A1.775 1.775 0 0 1 10 10.07V4.566"
    />
  </svg>
)
export default Time
