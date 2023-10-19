import { FC, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { IOneRadioGroupProps, IOption } from './RadioGroup.declaration';
import {
  StyledLabel,
  StyledRadioGroupWrap,
  StyledVariant,
} from './RadioGroup.styles';

export const OneRadioGroup: FC<IOneRadioGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  const [radio, setRadio] = useState<any>();

  console.log('radio component', radio);

  //TODO: не работает onChange

  return (
    <RadioGroup
      value={radio}
      onChange={(value) => {
        setRadio(value);
        // onChange(value)
      }}
    >
      <StyledRadioGroupWrap>
        {options.map((variant) => (
          <RadioGroup.Option key={variant.id} value={variant}>
            {({ active, checked }) => (
              <StyledVariant active={active || checked}>
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
