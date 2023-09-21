import LandingPage from '@/components/LandingPage';
import MainNav from '@/components/MainNav';
import React from 'react';

export default function LandingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainNav />
        <main>{children}</main>
    </div>
  );
}
