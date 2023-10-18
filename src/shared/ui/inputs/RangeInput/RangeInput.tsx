import { ChangeEvent, FC } from 'react';
import { StyledSlider } from './RangeInput.styles';
import { IRangeInputProps } from './RangeInput.declaration';

export const RangeInput: FC<IRangeInputProps> = ({
  max,
  min,
  value,
  onChange,
}) => {

  return (
    <>
      <StyledSlider
        range
        step={10}
        min={min}
        max={max}
        value={value}
        onChange={(value) => onChange(value)}
      />
    </>
  );
};
