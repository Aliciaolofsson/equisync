import React from 'react';
import MainNav from '../components/MainNav';

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
