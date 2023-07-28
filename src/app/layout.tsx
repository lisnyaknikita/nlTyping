'use client';
import '@/assets/styles/global.scss';
import { ThemeContext } from '@/providers/ThemeContext';
import clsx from 'clsx';
import { useContext } from 'react';

export const metadata = {
  title: 'nlTyping',
  description: 'Typing speed test app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <html lang='en'>
      <body className={clsx(darkMode && 'dark')}>
        <div className='wrapper'>{children}</div>
      </body>
    </html>
  );
}
