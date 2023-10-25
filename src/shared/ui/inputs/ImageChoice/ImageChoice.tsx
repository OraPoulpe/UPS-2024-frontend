import { FC, useState } from 'react';
import { IImageChoiceProps } from './ImageChoice.declaration';
import { CheckBox } from '../Checkbox';
import { CheckIcon } from '../Checkbox/icons/Check';
import { ImageCell } from '../../Card/ImageCell';
import { StyledImageChoice } from './ImageChoice.style';

interface IActiveVariant {
  [key: string]: boolean;
}
//TODO: вынести interface в отдельный файл
export const ImageChoice: FC<IImageChoiceProps> = ({
  images,
  width,
  height,
}) => {
  const [activeVariants, setActiveVariant] = useState<IActiveVariant>({});

  const handleImageChoiceChange = (id: number, checked: boolean) => {
    setActiveVariant((prevActiveVariants) => ({
      ...prevActiveVariants,
      [id]: checked,
    }));
  };

  return (
    <StyledImageChoice>
      {images.map((image) => {
        const active = activeVariants[image.id];

        return (
          <ImageCell
            active={active}
            image={image}
            onChange={handleImageChoiceChange}
            width={width}
            height={height}
            checkbox
          />
        );
      })}
    </StyledImageChoice>
  );
};
