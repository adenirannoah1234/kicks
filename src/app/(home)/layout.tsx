import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const inter = Nunito({ subsets: ['latin'] });

// app/layout.tsx
import LayoutContainer from './components/layoutContainer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={inter.className}>
      <LayoutContainer>{children}</LayoutContainer>
    </main>
  );
}
