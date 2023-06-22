import '@/assets/styles/global.scss';

export const metadata = {
  title: 'User info | nlTyping',
  description: 'User info',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
