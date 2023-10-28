import { MouseEventHandler, ReactNode } from 'react';

import { BUTTON_TYPES, BUTTON_VARIANTS } from './Button.constants';

//EXPLAIN: как это работает подробно и как это можно написать по другому
export type TButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type TButton = (typeof BUTTON_TYPES)[number];

//EXPLAIN: ButtonHTMLAttributes<HTMLButtonElement>
export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: TButtonVariant;
  type?: TButton;
  disabled?: boolean;
  fullwidth?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
