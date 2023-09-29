import React from 'react';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

export default function LandingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainNav />
        <main>{children}</main>
      <Footer />
    </div>
  );
}
