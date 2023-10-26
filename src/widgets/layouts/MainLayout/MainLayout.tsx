import styles from './MainLayout.module.scss';
import { NavBar } from '@/widgets/NavBar';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.mainLayout}>
      <main className={styles.mainWrap}>{children}</main>
      <NavBar />
    </div>
  );
};
