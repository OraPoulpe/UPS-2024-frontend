import {
  FRIDGE_VARIANT,
  HOME_VARIANT,
  PROFILE_VARIANT,
  SEARCH_VARIANT,
  TIconVariant,
} from './components/NavigationIcons/NavigationIcons.declaration';

interface INavItem {
  id: number;
  label: string;
  href: string;
  variant: TIconVariant;
}

export const NavsItems: INavItem[] = [
  { label: 'Главная', href: '/', variant: HOME_VARIANT, id: 1 },
  { label: 'Поиск', href: '/search', variant: SEARCH_VARIANT, id: 2 },
  { label: 'Холодильник', href: '/fridge', variant: FRIDGE_VARIANT, id: 3 },
  { label: 'Профиль', href: '/profile', variant: PROFILE_VARIANT, id: 4 },
];

export interface INavItemStyle {
  active: boolean;
}
