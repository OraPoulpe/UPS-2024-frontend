import { PALETTE } from '@/shared/lib/constants';
import { Text } from '../../Text';
import { FC } from 'react';
import { ITextInCellPtops } from './TextInCell.declaration';
import { StyledBG, StyledCell } from './TextInCell.style';

export const TextInCell: FC<ITextInCellPtops> = ({ children }) => {
  return (
    <StyledCell>
      <StyledBG />
      <Text type="h2" size={14} color={PALETTE['white']}>
        {children}
      </Text>
    </StyledCell>
  );
};
