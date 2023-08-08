import type { HTMLInputTypeAttribute } from "react";

declare global {
  interface TFormField {
    id: string;
    label: string;
    type: HTMLInputTypeAttribute;
  }

  interface TForm {
    id: string;
    fields: TFormField[];
    name: string;
  }

  type TIcon = "iconEdit" | "iconTrash" | "iconPlus" | "iconCross";
}

export {};
