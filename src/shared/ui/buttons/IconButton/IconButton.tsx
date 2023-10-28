import { Children, FC } from 'react';
import { StyledIconButton } from './IconButton.style';
import { IIconButtonProps } from './IconButton.declaration';

export const IconButton: FC<IIconButtonProps> = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <StyledIconButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledIconButton>
  );
};
