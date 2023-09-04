import * as React from "react"
const CloseBox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#9F9F9F"
      fillRule="evenodd"
      d="M7.63 10.584a.729.729 0 0 1 .234-.137.802.802 0 0 1 .55 0 .729.729 0 0 1 .233.137l1.645 1.451 1.644-1.45a.77.77 0 0 1 .508-.186.77.77 0 0 1 .508.185c.135.119.21.28.21.448a.598.598 0 0 1-.21.448l-1.646 1.45 1.646 1.449c.135.119.21.28.21.448a.598.598 0 0 1-.21.447.77.77 0 0 1-.508.186.77.77 0 0 1-.508-.186l-1.644-1.45-1.645 1.45a.77.77 0 0 1-.508.186.77.77 0 0 1-.508-.186.598.598 0 0 1-.21-.447c0-.168.075-.33.21-.448l1.646-1.45-1.646-1.45a.633.633 0 0 1-.156-.205.568.568 0 0 1 0-.484.633.633 0 0 1 .156-.206Z"
      clipRule="evenodd"
    />
    <path
      fill="#9F9F9F"
      d="M10.292 1.545c.951 0 1.864.334 2.537.927.673.593 1.05 1.397 1.05 2.236v.632H6.705v-.632c0-.84.378-1.643 1.05-2.236.674-.593 1.586-.927 2.538-.927Zm5.023 3.795v-.632c0-1.175-.53-2.3-1.471-3.13C12.902.746 11.624.28 10.292.28 8.96.28 7.682.747 6.74 1.577c-.942.83-1.471 1.956-1.471 3.13v.633H.246v12.649c0 .67.302 1.314.84 1.789.539.474 1.269.74 2.03.74h14.352c.761 0 1.491-.266 2.03-.74.538-.475.84-1.118.84-1.79V5.34h-5.023ZM1.681 6.605h17.222v11.384c0 .335-.151.657-.42.894-.27.237-.635.37-1.015.37H3.116c-.38 0-.746-.133-1.015-.37a1.194 1.194 0 0 1-.42-.894V6.605Z"
    />
  </svg>
)
export default CloseBox
