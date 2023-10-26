import { styled } from 'styled-components';
import { IStepStyle } from './ProgressBar.declaration';
import { PALETTE } from '@/shared/lib/constants/palette';

export const StyledProgressBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* gap: 5px; */
`;

export const StyledStep = styled.div<IStepStyle>`
  width: 10%;
  height: 8px;
  border-radius: 5px;
  background-color: ${({ isActive }) =>
    isActive ? PALETTE['primary-orange'] : PALETTE['bg-lightgray']};
`;
