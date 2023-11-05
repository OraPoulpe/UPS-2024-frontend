import { MainLayout } from '@/widgets/layouts/MainLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
