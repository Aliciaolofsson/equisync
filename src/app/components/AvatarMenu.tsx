import React, { useState } from 'react';
import Image from 'next/image';
import avatarImg from 'public/images/AO.png';
import SignOutButton from './SignOutButton';
import Link from 'next/link';
import { Settings, User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';

export default function AvatarMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src='' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={'/profile'}>My account</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={'/settings'}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
