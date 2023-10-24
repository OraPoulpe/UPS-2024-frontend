export interface IImage {
  src: string;
  name: string;
  id: number;
}

export interface IImageChoiceProps {
  images: IImage[];
  width: number;
  height: number;
  // value?: IOption | undefined;
  // onChange?(props: any): void;
}

