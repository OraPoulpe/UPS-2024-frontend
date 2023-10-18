import { FC, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { IOneRadioGroupProps } from './OneRadioGroup.declaration';
import { StyledLabel, StyledRadioGroupWrap, StyledVariant } from './OneRadioGroup.styles';

export const OneRadioGroup: FC<IOneRadioGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <StyledRadioGroupWrap>
        {options.map((variant) => (
          <RadioGroup.Option key={variant.id} value={variant}>
            {({ active, checked }) => (
              <StyledVariant active={active}>
                <RadioGroup.Label>
                  <StyledLabel>{variant.text}</StyledLabel>
                </RadioGroup.Label>
              </StyledVariant>
            )}
          </RadioGroup.Option>
        ))}
      </StyledRadioGroupWrap>
    </RadioGroup>
  );
};
