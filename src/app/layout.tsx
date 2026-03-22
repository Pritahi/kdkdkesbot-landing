import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kdkdkesbot - AI App Builder',
  description: 'Build web applications using AI on Telegram. No coding required.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
