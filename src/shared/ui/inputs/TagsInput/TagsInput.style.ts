import { PALETTE } from '@/shared/lib/constants/palette';
import { styled } from 'styled-components';

export const StyledTagsInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  `;
export const StyledTextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 335px;
  height: 100%;
`;

export const StyledListVariants = styled.ul`
  width: 100%;
  background-color: ${PALETTE['bg-lightgray']};
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

export const StyledButtonAdd = styled.button`
  height: 46px;
  padding: 10px;
  font-size: 14px;
  font-family: Onest;
  font-weight: 700;
  font-style: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSelectsWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledSelect = styled.li`
  height: 46px;
  width: fit-content;
  background-color: ${PALETTE['bg-lightgray']};
  border-radius: 15px;
  
  padding: 10px 15px;
  gap: 20px;
  display: flex;
  justify-content: left;
  align-items: center;

  font-size: 14px;
  font-family: Onest;
  font-weight: 700;
  font-style: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
