import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kdkdkesbot - AI App Builder on Telegram',
  description: 'Build professional web applications using our AI-powered Telegram bot. Get started in minutes with affordable pricing plans.',
  keywords: 'AI, App Builder, Telegram Bot, Web Development, No Code',
  authors: [{ name: 'Kdkdkesbot' }],
  openGraph: {
    title: 'Kdkdkesbot - AI App Builder on Telegram',
    description: 'Build professional web applications using our AI-powered Telegram bot.',
    type: 'website',
  },
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
