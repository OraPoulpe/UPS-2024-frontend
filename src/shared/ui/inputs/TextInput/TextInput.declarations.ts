import { INPUT_TYPES } from './TextInput.constants';

//EXPLAIN: как это работает подробно и как это можно написать по другому
type TInputType = (typeof INPUT_TYPES)[number];

export interface IWrapStyle {
  fullwidth: boolean;
}

export interface IInputStyle {
  error?: string | undefined;
  fullwidth?: boolean;
}

export interface IPlaceholderStyle {
  filled: boolean;
}

export interface IInputProps {
  value: string;
  error?: string | undefined;
  className?: string;
  placeholder: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onChange(props: any): void;
  type: TInputType;
  name: string;
}
