import { FC } from 'react';
import { IIconsProps } from '../NavigationIcons.declaration';

export const FridgeIcons: FC<IIconsProps> = ({ color, active }) => {
  if (active) {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 15.9688V17.5438M11 8.88135V10.4563"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 3.5H8C7.44772 3.5 7 3.9701 7 4.55V21.35C7 21.9299 7.44772 22.4 8 22.4H20C20.5523 22.4 21 21.9299 21 21.35V4.55C21 3.9701 20.5523 3.5 20 3.5Z"
          fill="#FFA011"
          stroke="#FFA011"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M7 12.95H21H7Z" fill="#FFA011" />
        <path
          d="M7 12.95H21"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7 11.8999V13.9999V11.8999Z" fill="#FFA011" />
        <path
          d="M7 11.8999V13.9999"
          stroke="#FFA011"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M21.0001 11.8999V13.9999V11.8999Z" fill="#FFA011" />
        <path
          d="M21.0001 11.8999V13.9999"
          stroke="#FFA011"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10.0001 16.625V18.725V16.625Z" fill="#FFA011" />
        <path
          d="M10.0001 16.625V18.725"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10.0001 7.17505V9.27505V7.17505Z" fill="#FFA011" />
        <path
          d="M10.0001 7.17505V9.27505"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M19 22.3999V24.4999V22.3999Z" fill="#FFA011" />
        <path
          d="M19 22.3999V24.4999"
          stroke="#FFA011"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.00012 22.3999V24.4999V22.3999Z" fill="#FFA011" />
        <path
          d="M9.00012 22.3999V24.4999"
          stroke="#FFA011"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ic_frizen">
          <path
            id="Vector"
            d="M7 12.95H21M7 11.9V14M21 11.9V14M10 16.625V18.725M10 7.175V9.275M19 22.4V24.5M9 22.4V24.5M8 3.5H20C20.5523 3.5 21 3.9701 21 4.55V21.35C21 21.9299 20.5523 22.4 20 22.4H8C7.44772 22.4 7 21.9299 7 21.35V4.55C7 3.9701 7.44772 3.5 8 3.5Z"
            stroke="#9C9C9C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }
};
