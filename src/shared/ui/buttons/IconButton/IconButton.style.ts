import { PALETTE } from '@/shared/lib/constants';
import { styled } from 'styled-components';

export const StyledIconButton = styled.button`
  border: none;
  outline: none;

  width: 54px;
  height: 54px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${PALETTE['bg-lightgray']};
  

  &:active:not(:disabled) {
    transform: scale(0.98);
    filter: brightness(95%);
  }

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
