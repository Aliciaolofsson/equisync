'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import NavLinks from './NavLinks';
import MenuOverlay from './MenuOverlay';

const navItems = [
  { label: 'Pricing', link: '/pricing' },
  { label: 'FAQ', link: '/faq' },
  { label: 'Sign up', link: '/sign-up' },
];

const MainNav: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='px-10 md:px-14 py-2'>
      <div className='flex justify-between items-center md:p-5'>
        <Link href={'/'}>
          <Image
            src={'/images/favicon.ico'}
            alt={'AO'}
            width={60}
            height={60}
          />
        </Link>
        <ul className='hidden md:flex justify-center items-center'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='text-md font-semibold mx-3 hover:text-purple-300'
            >
              <NavLinks href={item.link} title={item.label} />
            </li>
          ))}
         
        </ul>
        <div className='mobile-menu block md:hidden'>
          <button
            onClick={() => {
              setNavbarOpen(!navbarOpen); // Toggle the state
            }}
            className='flex items-center p-3'
          >
            {navbarOpen ? (
              <X width={40} strokeWidth={3} height={40} />
            ) : (
              <Menu width={40} strokeWidth={3} height={40} />
            )}
          </button>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay toggleNavbar={setNavbarOpen} links={navItems} />
      ) : null}
    </nav>
  );
};

export default MainNav;
