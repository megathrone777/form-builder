export interface TProps extends TFormField {
  index: number;
  onParse: (pair: Record<string, string>) => void;
}
