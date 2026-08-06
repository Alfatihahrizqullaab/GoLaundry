import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SidebarKasir } from './SidebarKasir';

export const DashboardKasirLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      <SidebarKasir />
      
      <main className="flex-1 w-full md:ml-64 p-4 md:p-8 pb-24 md:pb-8 overflow-y-auto min-h-screen">
        <Outlet /> 
      </main>
    </div>
  );
};