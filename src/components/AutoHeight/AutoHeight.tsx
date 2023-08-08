import React, { useRef, useState, useEffect } from "react";
import AnimateHeight, { Height } from "react-animate-height";

import { TProps } from "./types";

const AutoHeight: React.FC<TProps> = ({ children }) => {
  const [height, setHeight] = useState<Height>("auto");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect((): void => {
    const resizeObserver = new ResizeObserver((): void => {
      setHeight(contentRef.current!.clientHeight);
    });

    resizeObserver.observe(contentRef.current!);
  }, []);

  return (
    <AnimateHeight duration={200} {...{ contentRef, height }}>
      {children}
    </AnimateHeight>
  );
};

export { AutoHeight };
