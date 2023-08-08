import { InputHTMLAttributes, DetailedHTMLProps } from "react";

export interface TProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  hasError: true | null;
  label: string;
}
