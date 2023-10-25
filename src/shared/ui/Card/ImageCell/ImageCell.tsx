import { FC } from 'react';
import { CheckBox } from '../../inputs/Checkbox';
import { StyledImage, StyledImageCell, StyledLabel } from './ImageCell.style';
import { IImageCellProps } from './ImageCell.declaration';
import Image from 'next/image';
import { CheckIcon } from '@/shared/ui/icons/CheckIcon';
import styles from './ImageCell.module.scss';

export const ImageCell: FC<IImageCellProps> = ({
  active = false,
  image,
  onChange = () => {},
  checkbox = false,
  width,
  height,
}) => {
  return (
    <label key={image.id}>
      <StyledImageCell active={active}>
        {checkbox && (
          <CheckBox onChange={onChange} id={image.id} checked={active} />
        )}
        <div className={styles.ImageWrap}>
          <StyledImage>
            <Image
              src={image.src}
              key={image.src}
              width={width}
              height={height}
              alt=""
            />
          </StyledImage>
          {active && <CheckIcon />}
        </div>
        <StyledLabel>{image.name}</StyledLabel>
      </StyledImageCell>
    </label>
  );
};
