export const HOME_VARIANT = 'home';
export const SEARCH_VARIANT = 'search';
export const FRIDGE_VARIANT = 'fridge';
export const PROFILE_VARIANT = 'profile';

export const ICON_VARIANTS = [
  HOME_VARIANT,
  SEARCH_VARIANT,
  FRIDGE_VARIANT,
  PROFILE_VARIANT,
] as const;

export type TIconVariant = (typeof ICON_VARIANTS)[number];

export interface INavigationIconsProps {
  color?: string;
  isActive: boolean;
  variant: TIconVariant;
}

export interface IIconsProps {
  color?: string;
  isActive: boolean;
}
