import { css, styled } from 'styled-components';
import { ITextStyle } from './Text.declaration';
import { PALETTE } from '@/shared/lib/constants/palette';

const TEXT_STYLES = css`
  font-family: Onest;
  font-style: normal;
`;

export const StyledTextH1 = styled.h1<ITextStyle>`
  ${TEXT_STYLES}
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};

  font-weight: ${({ weight }) => weight};
`;

export const StyledTextP = styled.p<ITextStyle>`
  ${TEXT_STYLES}

  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;
