
//IMPROVE: improve ssr with styled components
import { IInputStyle, IWrapStyle, IPlaceholderStyle } from '.';

import { PALETTE } from '@/shared/lib/constants/palette';
import styled from 'styled-components';

export const StyledInput = styled.input<IInputStyle>`
  outline: none;
  border-radius: 22px;
  height: 52px;
  width: 100%;
  color: ${PALETTE['text-input-black']};
  padding: 0 20px;
  background-color: ${PALETTE['bg-lightgray']};
  line-height: 0;

  font-family: 'Onest';
  font-size: 14px;
  font-weight: 500;



  border: 2px solid
    ${({ error }) => (error ? `${PALETTE['error-red']}` : 'transparent')};
`;

export const StyledErrorText = styled.span`
  color: ${PALETTE['error-red']};
  font-family: 'LabGrotesque';
  font-size: 14px;
  font-weight: normal;
`;

export const StyledWrap = styled.div<IWrapStyle>`
  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};
`;
