'use client';
import { ChevronLeft, ChevronRight, Inbox, LayoutDashboard, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';

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
        { title: 'Subpage 2', url: '/planner/subpage2' }
      ],
      icons: <LayoutDashboard />
    },
    {
      id: 'dashSidebarLink2',
      title: 'Inbox',
      url: '/inbox', // URL for Inbox
      icons: <Inbox />,
      dropdownItems: [
        { title: 'Subpage 1', url: '/planner/subpage1' },
        { title: 'Subpage 2', url: '/planner/subpage2' }
      ]
    },
    {
      id: 'dashSidebarLink3',
      title: 'Chat',
      url: '/chat', // URL for Inbox
      dropdownItems: [
        { title: 'Send Message', url: '/planner/subpage1' },
        { title: 'Subpage 2', url: '/planner/subpage2' }
      ],
      icons: <MessageCircle />
    }
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
      className={`bg-neutral flex flex-col justify-between ${
        isSidebarCollapsed ? 'w-22' : 'w-64'
      } transition-width duration-300 h-screen`}
    >
      <div className="p-4">
        <button
          onClick={toggleSidebar}
          className="flex justify-center items-center text-neutral rounded-md bg-base-200 w-8 h-8 mx-2"
        >
          {isSidebarCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
        <div className="flex flex-col mt-8">
          {navLinks.map((navLink) => (
            <div
              key={navLink.id}
              className={`flex items-center text-neutral-content ${
                isSidebarCollapsed ? 'p-2 my-0' : ' mx-1 my-1 tracking-widest'
              }`}
            >
              {isSidebarCollapsed ? (
                navLink.url ? (
                  <Link
                    className="hover:bg-base-content rounded-md"
                    href={navLink.url}
                  >
                    <div className="p-1">{navLink.icons}</div>
                  </Link>
                ) : (
                  navLink.icons
                )
              ) : (
                <div>
                  <div
                    className={`p-2 cursor-pointer flex hover:bg-base-content rounded-md w-52 ${
                      expandedDropdowns.includes(navLink.id)
                        ? 'bg-base-content'
                        : ''
                    }`}
                    onClick={() => toggleDropdown(navLink.id)}
                  >
                    <div className="mr-10">{navLink.icons}</div>
                    <h1> {navLink.title}</h1>
                  </div>
                  {navLink.dropdownItems &&
                    expandedDropdowns.includes(navLink.id) && (
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
    <div className="mx-20 mt-4 w-full">
      {dropdownItems.map((item) => (
        <div key={item.title}>
          <Link className="dropdown-item" href={item.url}>
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
