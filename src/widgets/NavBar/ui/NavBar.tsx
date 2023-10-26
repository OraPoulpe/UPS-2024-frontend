'use client';

import { usePathname, useRouter } from 'next/navigation';
import { NavigationIcons } from './components/NavigationIcons';
import { NavsItems } from './NavBar.declaration';
import Link from 'next/link';
import { Text } from '@/shared/ui/Text';
import { PALETTE } from '@/shared/lib/constants/palette';
import { StyledLink, StyledNavBar } from './NavBar.style';

export const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <StyledNavBar>
      {NavsItems.map((nav) => {
        const isCurrentPage = pathname === nav.href;
        //TODO: пропадают label при уменьшении экрана
        return (
          //EXPLAIN: какой вариант работает лучше
          // <button onClick={() => {router.push(nav.href)}}>
          //   <NavigationIcons variant={nav.variant} isActive={isCurrentPage} />
          //   <h1>{nav.label}</h1>
          // </button>
          <StyledLink href={nav.href}>
            <NavigationIcons variant={nav.variant} isActive={isCurrentPage} />
            <Text
              color={
                isCurrentPage
                  ? PALETTE['primary-orange']
                  : PALETTE['text-light-gray']
              }
              size={12}
              type={'h1'}
            >
              {nav.label}
            </Text>
          </StyledLink>
        );
      })}
    </StyledNavBar>
  );
};
