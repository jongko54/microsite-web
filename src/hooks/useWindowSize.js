import { useEffect, useState } from "react";


const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width : undefined,
        // height: undefined,
    });
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            // height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();

        // clean up
        return () => window.removeEventListener("resize", handleResize);
        } else {
          return () => window.removeEventListener("resize", () => {
            return null
        });
      }
    }, []);
  return windowSize;
}

export default useWindowSize;