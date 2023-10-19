import {
  StyledCheckboxGroup,
  StyledCheckbox,
  StyledLabelText,
} from './CheckboxGroup.styles';
import { FC, useState } from 'react';
import { ICheckboxProps, IOption } from './CheckboxGroup.declaration';
import { CheckBox } from '../Checkbox';

interface IActiveVariant {
  [key: string]: boolean;
}

export const CheckboxGroup: FC<ICheckboxProps> = ({ options }) => {
  const [activeVariants, setActiveVariant] = useState<IActiveVariant>({});

  const handleCheckboxGroupChange = (id: number, checked: boolean) => {
    setActiveVariant((prevActiveVariants) => ({
      ...prevActiveVariants,
      [id]: checked,
    }));
  };

  // console.log(activeVariants['2']);

  return (
    <StyledCheckboxGroup>
      {options.map((variant) => (
        <label key={variant.id}>
          <StyledCheckbox active={activeVariants[variant.id]}>
            <CheckBox onChange={handleCheckboxGroupChange} id={variant.id} checked={activeVariants[variant.id]}/>
            <StyledLabelText>{variant.text}</StyledLabelText>
          </StyledCheckbox>
        </label>
      ))}
    </StyledCheckboxGroup>
  );
};
