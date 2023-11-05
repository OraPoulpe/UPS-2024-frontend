'use client';

import { css, styled } from 'styled-components';
import { PRIMARY_VARIANT, SECONDARY_VARIANT } from './Button.constants';
import { IButtonProps } from '.';
import { PALETTE } from '@/shared/lib/constants/palette';

const PRIMARY_BUTTON_STYLES = css<IButtonProps>`
  background: ${PALETTE['primary-orange']};
  color: ${PALETTE['white']};

  transition: all 0.2s;

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

const SECONDARY_BUTTON_STYLES = css<IButtonProps>`
  background: ${PALETTE['white']};
  color: ${PALETTE['text-black']};

  transition: all 0.2s;

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

//EXPLAIN: как это работает подробно и как это можно написать по другому
const BUTTON_VARIANTS_MAP = {
  [PRIMARY_VARIANT]: PRIMARY_BUTTON_STYLES,
  [SECONDARY_VARIANT]: SECONDARY_BUTTON_STYLES,
};

export const StyledButton = styled.button<IButtonProps>`
  border: none;
  outline: none;
  font-family: Onest;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};

  height: 52px;
  letter-spacing: 0.3;
  padding: 14px auto;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  ${({ variant }) => BUTTON_VARIANTS_MAP[variant || PRIMARY_VARIANT]};
`;
