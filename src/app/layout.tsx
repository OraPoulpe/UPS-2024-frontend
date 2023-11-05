import type { Metadata } from 'next';
import './globals.scss';
import StyledComponentsRegistry from './registry';
import { MainLayout } from '@/widgets/layouts/MainLayout';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Keepfood',
  description: 'Second level Ups 2024',
  manifest: '/manifest.json',
  icons: {apple: '/icon.png'},
  themeColor: '#fff'
}


const Onest = localFont({
  src: [
    {
      path: '../../public/fonts/Onest-Regular.woff',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Onest-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Onest-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Onest.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
