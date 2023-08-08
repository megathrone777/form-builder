import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface TProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: TIcon;
  template: "primary" | "secondary";
}
