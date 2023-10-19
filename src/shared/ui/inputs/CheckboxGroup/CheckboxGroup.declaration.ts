export interface IOption {
  id: number;
  text: string;
}

export interface ICheckboxProps {
  options: IOption[];
  value?: IOption | undefined;
  onChange?(props: any): void;
}

export interface ICheckboxStyle {
  active: boolean;
}
