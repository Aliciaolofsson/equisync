'use client';

import Logo from './Logo';
import NavLinks from './NavLinks';
import AvatarMenu from './AvatarMenu';

const DashboardNavbar: React.FC = () => {
  return (
    <nav className="py-5 px-10 grid grid-cols-2 items-center">
      <Logo />
      <div className="flex justify-end items-center place-content-end">
        <AvatarMenu />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
