import { MouseEventHandler, ReactNode } from "react";

export interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
