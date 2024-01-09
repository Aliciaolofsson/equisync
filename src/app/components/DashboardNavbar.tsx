'use client';

import Logo from './Logo';
import AvatarMenu from './AvatarMenu';

const DashboardNavbar: React.FC = () => {
  return (
    <nav className='py-5 px-10 grid grid-cols-2'>
      <Logo />
      <div className='flex justify-end items-center  mx-5'>
        <AvatarMenu />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
