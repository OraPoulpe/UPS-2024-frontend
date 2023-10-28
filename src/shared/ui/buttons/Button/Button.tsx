import { FC } from 'react';
import { BUTTON_TYPE, PRIMARY_VARIANT } from './Button.constants';
import { IButtonProps } from './Button.declarations';
import { StyledButton } from './Button.styles';

export const Button: FC<IButtonProps> = ({
  children,
  type = BUTTON_TYPE,
  variant = PRIMARY_VARIANT,
  disabled,
  onClick,
  fullwidth = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      type={type}
      fullwidth={!fullwidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
