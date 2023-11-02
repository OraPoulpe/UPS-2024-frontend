import { FC } from 'react';
import { IIconsProps } from '../NavigationIcons.declaration';

export const SearchIcons: FC<IIconsProps> = ({ color, active }) => {
  if (active) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Iconly/Light/Search">
          <g id="Search">
            <circle
              id="Ellipse_739"
              cx="11.7666"
              cy="11.7666"
              r="8.98856"
              fill="#FFA011"
              stroke="#FFA011"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Line_181"
              d="M18.0183 18.4852L21.5423 22.0001"
              stroke="#FFA011"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11.7666"
          cy="11.7666"
          r="8.98856"
          stroke="#9C9C9C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.0183 18.4851L21.5423 22"
          stroke="#9C9C9C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
};
