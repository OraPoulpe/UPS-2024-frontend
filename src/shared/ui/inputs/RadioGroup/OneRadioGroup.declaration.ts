export interface IOption {
  id: number;
  text: string;
}

export interface IOneRadioGroupProps {
  options: IOption[];
  value: IOption;
  onChange(props: any): void;
}

export interface IOneRadioGroupStyle{
    active: boolean,

}

