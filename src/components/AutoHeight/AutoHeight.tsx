import React, { useRef, useState, useEffect } from "react";
import AnimateHeight, { Height } from "react-animate-height";

import { TProps } from "./types";

const AutoHeight: React.FC<TProps> = ({ children, ...rest }) => {
  const [height, setHeight] = useState<Height>("auto");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect((): void => {
    const resizeObserver = new ResizeObserver((): void => {
      if (contentRef.current) {
        setHeight(contentRef.current.clientHeight);
      }
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }
  }, []);

  return (
    <AnimateHeight
      duration={200}
      easing="linear"
      {...{ contentRef, height, ...rest }}
    >
      {children}
    </AnimateHeight>
  );
};

export { AutoHeight };
