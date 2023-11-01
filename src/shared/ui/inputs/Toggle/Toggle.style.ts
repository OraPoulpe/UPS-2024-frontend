import { css, styled } from 'styled-components';
import { IToggleStyle } from './Toggle.declaration';
import { PALETTE } from '@/shared/lib/constants';

export const StyledToggleSpan = styled.span<IToggleStyle>`
  width: 23px;
  height: 23px;
  background-color: ${PALETTE['bg-lightgray']};
  border-radius: 100px;
  position: absolute;
  left: 1px;

  transition: 0.3s ease;

  transform: ${({ isActive }) =>
    isActive ? 'translateX(20px)' : 'translateX(0)'};
`;

const ACTIVE_TOGGLE_STYLE = css`
  background-color: ${PALETTE['primary-orange']};
`;

const NOT_ACTIVE_TOGGLE_STYLE = css`
  background-color: ${PALETTE['gray']};
  border: none;
`;

export const StyledToggleWrap = styled.div<IToggleStyle>`
  width: 46px;
  height: 25px;
  position: relative;

  display: flex;
  align-items: center;

  border-radius: 50px;

  transition: 0.3s ease;

  ${({ isActive }) =>
    isActive ? ACTIVE_TOGGLE_STYLE : NOT_ACTIVE_TOGGLE_STYLE}
`;

export const StyledToggle = styled.input`
  position: absolute;

  -webkit-appearance: none;
  -moz-appearance: none;
`;
