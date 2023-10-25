import { FC } from 'react';
import { ITextProps } from './Text.declaration';
import { H1_TEXT, P_TEXT } from './Text.constants';
import { StyledTextH1, StyledTextP } from './Text.style';

export const Text: FC<ITextProps> = ({
  children,
  type,
  size,
  weight,
  color,
}) => {
  switch (type) {
    case H1_TEXT:
      return <StyledTextH1 size={size} weight={weight} color={color}>{children}</StyledTextH1>;
      case P_TEXT:
      return <StyledTextP size={size} weight={weight} color={color}>{children}</StyledTextP>;
  }
  return <></>;
};
