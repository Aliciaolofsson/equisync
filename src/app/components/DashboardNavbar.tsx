'use client';

import Logo from './Logo';
import AvatarMenu from './AvatarMenu';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const DashboardNavbar: React.FC = () => {
  return (
    <nav className='py-6 my-2 px-10 grid grid-cols-2'>
      <div className='relative'>
        <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input placeholder='Search' className='pl-8' />
      </div>
      <div className='flex justify-end items-center  mx-5'>
        <AvatarMenu />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
