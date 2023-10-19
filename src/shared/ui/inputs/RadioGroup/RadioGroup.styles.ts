'use client';

import { PALETTE } from '@/shared/lib/constants/palette';
import { css, styled } from 'styled-components';
import { IOneRadioGroupStyle } from './RadioGroup.declaration';

export const StyledLabel = styled.h2`
  font-size: 14px;
  text-align: center;
  font-family: Onest;
  font-weight: 500;
`;

const ACTIVE_VARIANT_STYLES = css`
  background: ${PALETTE['primary-orange']};

  ${StyledLabel} {
    color: ${PALETTE['white']};
  }
`;

const NOT_ACTIVE_VARIANT_STYLES = css`
  background: ${PALETTE['bg-lightgray']};

  ${StyledLabel} {
    color: ${PALETTE['text-black']};
  }
`;

export const StyledVariant = styled.div<IOneRadioGroupStyle>`
  width: 100%;
  border-radius: 20px;
  padding: 12px 16px;

  ${({ active }) =>
    active ? ACTIVE_VARIANT_STYLES : NOT_ACTIVE_VARIANT_STYLES};
`;

export const StyledRadioGroupWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
