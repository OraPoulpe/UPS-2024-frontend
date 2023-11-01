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
  console.log(enabled);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setEnabled(input.checked);
  };

  return (
    <label>
      <StyledToggleWrap isActive={enabled}>
        <StyledToggle
          type="checkbox"
          onChange={(e) => handleOnChange(e)}
        />
        <StyledToggleSpan isActive={enabled}/>
      </StyledToggleWrap>
    </label>
  );
};
