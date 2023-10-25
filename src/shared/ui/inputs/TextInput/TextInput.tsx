import { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
import { IInputProps, StyledErrorText, StyledInput, StyledWrap } from '.';

import { TEXT_INPUT } from './TextInput.constants';

export const TextInput: FC<IInputProps> = ({
  value,
  error,
  placeholder,
  className,
  disabled = false,
  onChange,
  type = TEXT_INPUT,
  fullWidth = false,
  name,
}) => {
  //TODO: нажатие на esc для отключение фокуса на input

  const [inputValue, setInputValue] = useState(value);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    onChange(e);
    setInputValue(input.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    if (e.key === 'Enter' || e.key === 'Escape') {
      input.blur();
    }
  };

  return (
    <StyledWrap fullwidth={!fullWidth} className={className}>
      <StyledInput
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleOnChange(e);
        }}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          handleKeyDown(e);
        }}
        disabled={disabled}
        type={type}
        error={error}
      />

      <StyledErrorText>{error}</StyledErrorText>
    </StyledWrap>
  );
};
