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
  isActive,
  variant,
}) => {
  return (
    <StyledNavigationIcons>
      {(() => {
        switch (variant) {
          case HOME_VARIANT:
            return <HomeIcons isActive={isActive} />;
          case SEARCH_VARIANT:
            return <SearchIcons isActive={isActive} />;
          case FRIDGE_VARIANT:
            return <FridgeIcons isActive={isActive} />;
          case PROFILE_VARIANT:
            return <ProfileIcons isActive={isActive} />;
        }
      })()}
    </StyledNavigationIcons>
  );
};
