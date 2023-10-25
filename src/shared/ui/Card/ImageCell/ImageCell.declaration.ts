import { IImage } from '../../inputs/ImageChoice/ImageChoice.declaration';

export interface IImageCellStyle {
  active: boolean;
}

export interface IImageCellProps {
  image: IImage;
  active?: boolean;
  onChange?: (id: number, checked: boolean) => void;
  checkbox?: boolean;
  width: number;
  height: number;
}
