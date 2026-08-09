import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { SidebarAdmin } from './SidebarAdmin';

export const DashboardAdminLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Memastikan scroll kembali ke atas saat pindah halaman
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex font-sans">
      {/* Menggunakan komponen Sidebar yang sudah dipisah */}
      <SidebarAdmin />
      
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="h-[72px] bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-40 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">Dashboard Utama</h2>
          
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari ID Toko, Nama Owner..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </header>

        {/* Content Area untuk memuat halaman */}
        <div className="flex-1 p-8 overflow-y-auto">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};