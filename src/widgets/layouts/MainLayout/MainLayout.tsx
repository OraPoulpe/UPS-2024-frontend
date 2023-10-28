import styles from './MainLayout.module.scss';
import { NavBar } from '@/widgets/NavBar';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <NavBar />
    </>
  );
};
