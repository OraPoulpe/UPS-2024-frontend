import { useState } from 'react';
import { Switch } from '@headlessui/react';
import './Toggle.scss';
import {
  StyledToggle,
  StyledToggleSpan,
  StyledToggleWrap,
} from './Toggle.style';

export const Toggle = () => {
  const [enabled, setEnabled] = useState(false);
  console.log(enabled);

  return (
    <label>
      <StyledToggleWrap isActive={enabled}>
        <StyledToggle
          type="checkbox"
          onChange={(e) => setEnabled(e.target.checked)}
        />
        <StyledToggleSpan />
      </StyledToggleWrap>
    </label>
  );
};
