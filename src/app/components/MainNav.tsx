import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import MainNavLink from './NavLinks'; // Import the MainNavLink component

export default function MainNav() {
  const navLinks = [
    {
      id: 'mainNavLink1',
      title: 'Pricing',
      url: '/pricing'
    },
    {
      id: 'mainNavLink2',
      title: 'FAQ',
      url: '/faq'
    }
  ];

  return (
    <nav className="py-10 px-10 grid grid-cols-2 items-center">
      <Logo />
      <div className="flex items-center place-content-end">
        <MainNavLink navLinks={navLinks} /> 
        <Link href={'sign-in'} className="btn btn-sm mr-5 mx-4">
          Sign in
        </Link>
      </div>
    </nav>
  );
}
