import { PALETTE } from '@/shared/lib/constants/palette';
import { css, styled } from 'styled-components';
import { IImageCellStyle } from './ImageCell.declaration';

export const StyledLabel = styled.h1`
  color: ${PALETTE['text-black']};
  font-family: Onest;
  font-size: 14px;
  font-weight: 500;
`;
export const StyledImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ACTIVE_VARIANT_STYLES = css`
  ${StyledImage} {
    filter: brightness(40%);
  }
`;

const NOT_ACTIVE_VARIANT_STYLES = css`
  ${StyledImage} {
    filter: brightness(100%);
  }
`;

export const StyledImageCell = styled.div<IImageCellStyle>`
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  ${({ active }) =>
    active ? ACTIVE_VARIANT_STYLES : NOT_ACTIVE_VARIANT_STYLES};
`;
