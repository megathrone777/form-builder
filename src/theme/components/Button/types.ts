import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import type { TProps as TIconProps } from "~/theme/components/Icon";

export interface TProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  iconId?: TIconProps["id"];
  template: "primary" | "secondary";
}
