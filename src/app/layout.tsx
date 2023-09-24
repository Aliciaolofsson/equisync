export const dynamic = 'force-dynamic';

import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equi Sync',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme='winter' lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className='text-neutral font-roboto font-medium'>{children}</body>
    </html>
  );
}
