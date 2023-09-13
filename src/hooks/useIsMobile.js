/**
 * @param {number} screenSize
 * @returns {boolean} isMobile
 */

import { useEffect, useState } from "react";

export default function useIsMobile(screenSize = 640) {
  let [isMobile, setIsMobile] = useState(false);

  const windowResizeHandler = (event) => {
    if (window.innerWidth <= screenSize) setIsMobile(true);
    else setIsMobile(false);
  };

  useEffect(() => {
    windowResizeHandler();
    window.addEventListener("resize", windowResizeHandler);
    return () => window.removeEventListener("resize", windowResizeHandler);
  }, []);

  return isMobile;
}