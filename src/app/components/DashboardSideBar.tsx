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
import Logo from './Logo';
import { Button } from '@/components/ui/button';

interface NavLink {
  id: string;
  title: string;
  url?: string;
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
      url: '/dashboard', // URL for Inbox
      dropdownItems: [
        { title: 'Dashboard', url: 'dashboard' },
        { title: 'Subpage 2', url: '/planner/subpage2' },
      ],
      icons: <LayoutDashboard />,
    },
    {
      id: 'dashSidebarLink2',
      title: 'Inbox',
      url: '/inbox', // URL for Inbox
      icons: <Inbox />,
      dropdownItems: [
        { title: 'Subpage 1', url: '/planner/subpage1' },
        { title: 'Subpage 2', url: '/planner/subpage2' },
      ],
    },
    {
      id: 'dashSidebarLink3',
      title: 'Chat',
      url: '/chat', // URL for Inbox
      dropdownItems: [
        { title: 'Send Message', url: '/planner/subpage1' },
        { title: 'Subpage 2', url: '/planner/subpage2' },
      ],
      icons: <MessageCircle />,
    },
  ];

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState<string[]>([]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleDropdown = (linkId: string) => {
    if (expandedDropdowns.includes(linkId)) {
      setExpandedDropdowns(expandedDropdowns.filter((id) => id !== linkId));
    } else {
      setExpandedDropdowns([...expandedDropdowns, linkId]);
    }
  };

  return (
    <nav
      className={` bg-gray-400 flex flex-col justify-between ${
        isSidebarCollapsed ? 'w-22' : 'w-64'
      } transition-width duration-300 h-screen`}
    >
      <div className='p-4'>
        <Button
          onClick={toggleSidebar}
          className=' flex justify-center items-center rounded-md bg-base-200 '
        >
          {isSidebarCollapsed ? <PanelLeftOpen /> : <PanelRightOpen />}
        </Button>

      </div>
    </nav>
  );
}
