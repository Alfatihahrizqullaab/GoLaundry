import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SidebarKasir } from './SidebarKasir';

export const DashboardKasirLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll otomatis ke atas saat ganti halaman
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      <SidebarKasir />
      <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
        {/* Konten Halaman Kasir masuk ke sini */}
        <Outlet /> 
      </main>
    </div>
  );
};