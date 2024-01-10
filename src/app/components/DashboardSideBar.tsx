'use client';

// Import statements
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
import Logo from './Logo';

// Interface declarations
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

interface SidebarItemProps {
  navLink: NavLink;
  isCollapsed: boolean;
  isDropdownExpanded: boolean;
  onToggleDropdown: () => void;
}

const DropdownMenu: React.FC<{ dropdownItems: DropdownItem[] }> = ({
  dropdownItems,
}) => (
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

const SidebarItem: React.FC<SidebarItemProps> = ({
  navLink,
  isCollapsed,
  isDropdownExpanded,
  onToggleDropdown,
}) => (
  <div
    key={navLink.id}
    className={` ${isCollapsed ? 'p-2 my-0' : ' mx-1 my-1'}`}
  >
    {isCollapsed
      ? isSidebarLinkCollapsed(navLink)
      : isSidebarLinkExpanded(navLink, isDropdownExpanded, onToggleDropdown)}
  </div>
);

const isSidebarLinkCollapsed = (navLink: NavLink) =>
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
  );

const isSidebarLinkExpanded = (
  navLink: NavLink,
  isDropdownExpanded: boolean,
  onToggleDropdown: () => void
) => (
  <div>
    <h2 className='my-2 font-thin text-sm'>{navLink.subHeader}</h2>
    <Button
      variant={'secondary'}
      className={`flex justify-normal w-full pr-20 ${
        isDropdownExpanded ? '' : ''
      }`}
      onClick={onToggleDropdown}
    >
      <div className='mr-2'>{navLink.icons}</div>
      <h1 className=''>{navLink.title}</h1>
    </Button>
    {navLink.dropdownItems && isDropdownExpanded && (
      <DropdownMenu dropdownItems={navLink.dropdownItems} />
    )}
  </div>
);

const DashboardSidebar: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
    setExpandedDropdown(null);
  };

  const toggleDropdown = (linkId: string) => {
    setExpandedDropdown((prevExpandedDropdown) =>
      prevExpandedDropdown === linkId ? null : linkId
    );
  };

  const navLinks: NavLink[] = [
    {
      id: 'dashSidebarLink1',
      title: 'Dashboard',
      url: '/dashboard',
      subHeader: 'Overview',
      dropdownItems: [
        { title: 'Home', url: '/dashboard/dashboard' },
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

  return (
    <nav
      className={`bg-sky-950 ${
        isSidebarCollapsed ? 'w-auto' : 'w-auto'
      } transition-width duration-300 h-screen hidden lg:block`}
    >
      <div className='p-4 text-white flex flex-col '>
        {isSidebarCollapsed ? (
          <div className='flex justify-center'>
            <button
              className='hover:text-slate-400 mt-5'
              onClick={toggleSidebar}
            >
              <PanelLeftOpen />
            </button>
          </div>
        ) : (
          <div className='flex mt-5 items-center justify-center'>
            <Logo />
            <button className='hover:text-slate-400 mx-3' onClick={toggleSidebar}>
              <PanelRightOpen />
            </button>
          </div>
        )}
        <div className='flex flex-col mt-8'>
          {navLinks.map((navLink) => (
            <SidebarItem
              key={navLink.id}
              navLink={navLink}
              isCollapsed={isSidebarCollapsed}
              isDropdownExpanded={expandedDropdown === navLink.id}
              onToggleDropdown={() => toggleDropdown(navLink.id)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DashboardSidebar;
