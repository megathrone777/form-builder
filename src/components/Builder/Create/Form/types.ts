export interface TFormErrors {
  fields: true | null;
  name: true | null;
}

export interface TProps extends Omit<TForm, "id" | "name"> {
  onFieldRemove: (id: string) => void;
}
