import { styled } from 'styled-components';

interface WrapStyle {
  imagesrc: string;
}
export const StyledDishCardWrap = styled.div<WrapStyle>`
  width: 345px;
  height: 407px;
  flex-shrink: 0;
  position: relative;
  border-radius: 20px;

  display: flex;
  justify-content: center;

  background-image: url(${({ imagesrc }) => imagesrc});
  background-size: cover;
  background-repeat: no-repeat;


`;
