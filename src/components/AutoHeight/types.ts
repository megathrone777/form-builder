import { AnimateHeightProps } from "react-animate-height";

export interface TProps extends Omit<AnimateHeightProps, "height"> {
  children: React.ReactNode;
}
