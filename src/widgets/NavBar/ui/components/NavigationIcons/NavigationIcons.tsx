import { FC } from 'react';
import {
  FRIDGE_VARIANT,
  HOME_VARIANT,
  INavigationIconsProps,
  PROFILE_VARIANT,
  SEARCH_VARIANT,
} from './NavigationIcons.declaration';
import { HomeIcons } from './icons/HomeIcons';
import { FridgeIcons, ProfileIcons, SearchIcons } from './icons';
import { StyledNavigationIcons } from './NavigationIcons.style';

export const NavigationIcons: FC<INavigationIconsProps> = ({
  color,
  active,
  variant,
}) => {
  return (
    <StyledNavigationIcons>
      {(() => {
        switch (variant) {
          case HOME_VARIANT:
            return <HomeIcons active={active} />;
          case SEARCH_VARIANT:
            return <SearchIcons active={active} />;
          case FRIDGE_VARIANT:
            return <FridgeIcons active={active} />;
          case PROFILE_VARIANT:
            return <ProfileIcons active={active} />;
        }
      })()}
    </StyledNavigationIcons>
  );
};
