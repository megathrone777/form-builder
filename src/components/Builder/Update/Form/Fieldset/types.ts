export type TControl = Omit<TFormField, "id">;

export interface TProps {
  id: TForm["id"];
  fields: TFormField[];
}
