import { PALETTE } from '@/shared/lib/constants/palette';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { styled } from 'styled-components';

export const StyledSlider = styled(Slider)`
  height: 6px;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;

  .rc-slider-rail {
    height: 6px;
    background-color: #f8f8f8;
  }

  .rc-slider-track {
    height: 6px;
    background-color: ${PALETTE['primary-orange']};
  }

  .rc-slider-handle {
    background-color: #fff;
    border: 8px solid ${PALETTE['primary-orange']};
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 1;
    margin: 0;
  }

  .rc-slider-handle:hover {
    border-color: ${PALETTE['primary-orange']};
  }

  .rc-slider-handle:focus {
    border-color:  ${PALETTE['primary-orange']};
    box-shadow: none;
  }
`;
