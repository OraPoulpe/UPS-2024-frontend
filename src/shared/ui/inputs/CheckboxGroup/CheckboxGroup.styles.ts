import { PALETTE } from '@/shared/lib/constants/palette';
import { css, styled } from 'styled-components';
import { ICheckboxStyle } from './CheckboxGroup.declaration';

export const StyledLabelText = styled.h1`
  font-size: 14px;
  text-align: center;
  font-family: Onest;
  font-weight: 500;
`;

const ACTIVE_VARIANT_STYLES = css`
  background: ${PALETTE['primary-orange']};

  ${StyledLabelText} {
    color: ${PALETTE['white']};
  }
`;

const NOT_ACTIVE_VARIANT_STYLES = css`
  background: ${PALETTE['bg-lightgray']};

  ${StyledLabelText} {
    color: ${PALETTE['text-black']};
  }
`;



export const StyledCheckbox = styled.div<ICheckboxStyle>`
  width: 100%;
  border-radius: 22px;
  padding: 21px 20px;
  display: flex;
  justify-content: left;
  gap: 10px;

  ${({ active }) =>
    active ? ACTIVE_VARIANT_STYLES : NOT_ACTIVE_VARIANT_STYLES};
`;

export const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
