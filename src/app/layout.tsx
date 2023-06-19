import '@/assets/styles/global.scss';

export const metadata = {
  title: 'nlTyping',
  description: 'Typing speed test app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
