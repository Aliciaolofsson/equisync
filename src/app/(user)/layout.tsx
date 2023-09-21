import React from 'react';
import DashboardSidebar from '../components/DashboardSideBar';
import DashboardNavbar from '../components/DashboardNavbar';


export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <DashboardSidebar />

      <div className="flex flex-col flex-grow">
        <DashboardNavbar />
        <main className="flex-grow p-10">{children}</main>
      </div>
    </div>
  );
}
