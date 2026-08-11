import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { SidebarAdmin } from './SidebarAdmin';

export const DashboardAdminLayout: React.FC = () => {
  const { pathname } = useLocation();
  
  // State untuk mengontrol sidebar di tampilan Mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Memastikan scroll kembali ke atas & menutup sidebar saat pindah halaman
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex font-sans">
      
      <SidebarAdmin 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <main className="flex-1 w-full md:ml-64 flex flex-col min-h-screen">
        
        {/* Top Navbar */}
        <header className="h-[72px] bg-white border-b border-gray-100 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 shadow-sm shrink-0">
          
          <div className="flex items-center gap-3">
            {/* Tombol Hamburger HANYA muncul di Mobile (md:hidden) */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-lg md:text-xl font-bold text-slate-800 hidden sm:block">Dashboard Utama</h2>
          </div>
          
          <div className="relative w-full max-w-[220px] md:max-w-xs ml-auto">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari ID Toko..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          <Outlet /> 
        </div>
        
      </main>
    </div>
  );
};