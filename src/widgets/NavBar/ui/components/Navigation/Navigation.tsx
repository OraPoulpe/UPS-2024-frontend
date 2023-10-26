import { usePathname, useRouter } from 'next/navigation';
import { NavigationIcons } from '../NavigationIcons';
import { NavsItems } from './Navigation.declaration';
import Link from 'next/link';
import { Text } from '@/shared/ui/Text';
import { PALETTE } from '@/shared/lib/constants/palette';

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      {NavsItems.map((nav) => {
        const isCurrentPage = pathname === nav.href;

        return (

          //EXPLAIN: какой вариант работает лучше
          // <button onClick={() => {router.push(nav.href)}}>
          //   <NavigationIcons variant={nav.variant} isActive={isCurrentPage} />
          //   <h1>{nav.label}</h1>
          // </button>
          <Link href={nav.href}>
            <NavigationIcons variant={nav.variant} isActive={isCurrentPage} />
            <Text color={ isCurrentPage ? PALETTE['primary-orange'] : PALETTE['text-light-gray']} size={13} type={'h1'}>{nav.label}</Text>
          </Link>
        );
      })}
    </div>
  );
};
