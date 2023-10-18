import { PALETTE } from '@/shared/lib/constants/palette';
import { css, styled } from 'styled-components';
import { IOneRadioGroupStyle } from './OneRadioGroup.declaration';

const ACTIVE_VARIANT_STYLES = css`
  background: ${PALETTE['primary-orange']};
`;

const NOT_ACTIVE_VARIANT_STYLES = css`
  background: ${PALETTE['bg-lightgray']};
`;

export const StyledVariant = styled.div<IOneRadioGroupStyle>`
  max-width: 400px;
  border-radius: 20px;
  padding: 12px 16px;

  ${({ active }) =>
    active ? ACTIVE_VARIANT_STYLES : NOT_ACTIVE_VARIANT_STYLES};
`;

export const StyledLabel = styled.h2`
font-size: 14px;
 text-align:center;
 font-family: Onest;
`

export const StyledRadioGroupWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
