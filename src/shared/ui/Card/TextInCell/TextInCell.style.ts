import { PALETTE } from '@/shared/lib/constants';
import { styled } from 'styled-components';

export const StyledCell = styled.div`
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 16px 20px;
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

