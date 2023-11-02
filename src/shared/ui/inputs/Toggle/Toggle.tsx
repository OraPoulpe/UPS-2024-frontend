// "use client"

import { ChangeEvent, FC, useState } from 'react';
import { Switch } from '@headlessui/react';
import {
  StyledToggle,
  StyledToggleSpan,
  StyledToggleWrap,
} from './Toggle.style';
import { IToggleProps } from './Toggle.declaration';

export const Toggle: FC<IToggleProps> = ({
  onChange,
  checked,
  styled = false,
}) => {
  const [enabled, setEnabled] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setEnabled(input.checked);
  };

  return (
    <label>
      <StyledToggleWrap checked={enabled}>
        <StyledToggle
          type="checkbox"
          onChange={(e) => handleOnChange(e)}
        />
        <StyledToggleSpan checked={enabled}/>
      </StyledToggleWrap>
    </label>
  );
};
