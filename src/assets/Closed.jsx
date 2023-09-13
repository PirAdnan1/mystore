import * as React from "react";

function Close(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.293.293a1 1 0 011.414 0l18 18a1 1 0 01-1.414 1.414l-18-18a1 1 0 010-1.414z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.707.293a1 1 0 010 1.414l-18 18a1 1 0 01-1.414-1.414l18-18a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Close;
