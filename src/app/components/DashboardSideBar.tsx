'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Inbox,
  LayoutDashboard,
  MessageCircle,
  PanelLeftOpen,
  PanelRightOpen,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Button } from '@/components/ui/button';

interface NavLink {
  id: string;
  title: string;
  url?: string;
  subHeader?: string;
  dropdownItems?: DropdownItem[];
  icons: React.ReactNode;
}

interface DropdownItem {
  title: string;
  url: string;
}

export default function DashboardSidebar() {
  const navLinks: NavLink[] = [
    {
      id: 'dashSidebarLink1',
      title: 'Dashboard',
      url: '/dashboard',
      subHeader: 'Overview',
      dropdownItems: [
        { title: 'Dashboard', url: 'dashboard' },
        { title: 'Subpage 2', url: '/planner/subpage2' },
      ],
      icons: <LayoutDashboard />,
    },
    {
      id: 'dashSidebarLink2',
      title: 'Inbox',
      url: '/inbox',
      subHeader: 'Communication',
      icons: <Inbox />,
      dropdownItems: [
        { title: 'Subpage 1', url: '/planner/subpage1' },
        { title: 'Subpage 2', url: '/planner/subpage2' },
      ],
    },
    {
      id: 'dashSidebarLink3',
      title: 'Chat',
      url: '/chat',
      dropdownItems: [
        { title: 'Send Message', url: '/planner/subpage1' },
        { title: 'Subpage 2', url: '/planner/subpage2' },
      ],
      icons: <MessageCircle />,
    },
  ];

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleDropdown = (linkId: string) => {
    setExpandedDropdown((prevExpandedDropdown) =>
      prevExpandedDropdown === linkId ? null : linkId
    );
  };

  return (
    <nav
      className={`bg-sky-950 ${
        isSidebarCollapsed ? 'w-auto' : 'w-auto'
      } transition-width duration-300 h-screen hidden lg:block`}
    >
      <div className='p-4 text-white flex flex-col items-center'>
        <button className='hover:text-slate-400' onClick={toggleSidebar}>
          {isSidebarCollapsed ? (
            <PanelLeftOpen />
          ) : (
            <div className='flex space-x-2 items-center'>
              <PanelRightOpen />
            </div>
          )}
        </button>
        <div className='flex flex-col mt-8'>
          {navLinks.map((navLink) => (
            <div
              key={navLink.id}
              className={` ${
                isSidebarCollapsed ? 'p-2 my-0' : ' mx-1 my-1'
              }`}
            >
              {isSidebarCollapsed ? (
                navLink.url ? (
                  <Link
                    className={buttonVariants({
                      variant: 'secondary',
                      size: 'sm',
                    })}
                    href={navLink.url}
                  >
                    {navLink.icons}
                  </Link>
                ) : (
                  navLink.icons
                )
              ) : (
                <div>
                  {' '}
                  <h2 className='my-2 font-thin text-sm'>
                    {navLink.subHeader}
                  </h2>
                  <Button
                    variant={'secondary'}
                    className={`flex justify-normal w-full pr-20 ${
                      expandedDropdown === navLink.id ? '' : ''
                    }`}
                    onClick={() => toggleDropdown(navLink.id)}
                  >
                    <div className='mr-2'>{navLink.icons}</div>
                    <h1 className=''> {navLink.title}</h1>
                  </Button>
                  {navLink.dropdownItems &&
                    expandedDropdown === navLink.id && (
                      <DropdownMenu dropdownItems={navLink.dropdownItems} />
                    )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

function DropdownMenu({ dropdownItems }: { dropdownItems: DropdownItem[] }) {
  return (
    <div className='flex flex-col my-2'>
      {dropdownItems.map((item) => (
        <Button
          className='my-2 mr-12 bg-gray-500 bg-opacity-40 hover:text-white hover:bg-slate-200 hover:bg-opacity-40'
          variant={'ghost'}
          key={item.title}
        >
          <Link href={item.url}>{item.title}</Link>
        </Button>
      ))}
    </div>
  );
}
