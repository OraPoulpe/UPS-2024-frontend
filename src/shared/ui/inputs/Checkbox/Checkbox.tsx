import { ChangeEvent, FC } from 'react';
import {StyledCheckboxInput } from './Checkbox.style';
import { ICheckBoxProps } from './Checkbox.declaration';
import { NotCheckIcon } from './icons/NotCheck';
import { CheckIcon } from './icons/Check';

export const CheckBox: FC<ICheckBoxProps> = ({ onChange, id, checked }) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    onChange(id, input.checked);
  };

  return (
    <>
      <StyledCheckboxInput
        type="checkbox"
        onChange={(e) => handleOnChange(e)}
      />
      {checked ? <CheckIcon /> : <NotCheckIcon />}
    </>
  );
};
