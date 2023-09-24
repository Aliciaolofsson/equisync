import React, { useState } from 'react';
import Image from 'next/image';
import avatarImg from 'public/images/AO.png';
import SignOutButton from './SignOutButton';
import Link from 'next/link';
import { Settings, User } from 'lucide-react';

export default function AvatarMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleAvatarClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const menuItems = [
    {
      text: 'Profile',
      icon: <User />,
      href: 'profile',
      id: 'sidebarItems1',
    },
    {
      text: 'Settings',
      icon: <Settings />,
      href: 'settings',
      id: 'sidebarItems2',
    },
  ];

  return (
    <div>
      <Image
        className='avatar mx-5 cursor-pointer'
        src={avatarImg}
        alt=''
        width='50'
        height='50'
        onClick={handleAvatarClick}
      />
      {isMenuVisible && (
        <div className='flex absolute right-6 border-2 rounded-md p-4'>
          <ul className='grid flex-col gap-3'>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='flex items-center text-sm hover:text-neutral-300 '
              >
                <span className='mr-1'>{item.icon}</span>
                {item.text}
              </Link>
            ))}
            <li>
              <SignOutButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
