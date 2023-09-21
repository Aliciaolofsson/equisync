// MainNavLink.tsx
import React from 'react';
import Link from 'next/link';

interface NavLink {
  id: string;
  title: string;
  url: string;
}

interface NavLinkProps {
  navLinks: NavLink[];
}

const NavLink: React.FC<NavLinkProps> = ({ navLinks }) => {
  return (
    <div>
      {navLinks.map((navLink) => (
        <Link
          className="mx-4 hover:text-neutral-content"
          key={navLink.id}
          href={navLink.url}
        >
          {navLink.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLink;
