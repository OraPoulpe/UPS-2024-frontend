import { PALETTE } from '@/shared/lib/constants';
import { styled } from 'styled-components';

export const StyledLikeButton = styled.button`
  border: none;
  outline: none;

  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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

export const StyledBG = styled.div`
  border-radius: 15px;
  background: ${PALETTE['white']};
  opacity: 0.3;
  backdrop-filter: blur(2.5px);
  width: 100%;
  height: 100%;
  position: absolute;
`;
