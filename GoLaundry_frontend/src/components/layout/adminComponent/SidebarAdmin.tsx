import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard, Store, Users, Package, DollarSign, LogOut, X } from 'lucide-react';

type MenuItem = {
  name: string;
  path: string;
  icon: any;
  badge?: number; 
};

interface SidebarAdminProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarAdmin: React.FC<SidebarAdminProps> = ({ isOpen, onClose }) => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  const location = useLocation();

  const menuPlatform: MenuItem[] = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Toko', path: '/admin/managementToko', icon: Store, badge: 3 },
    { name: 'Customer', path: '/admin/managementCustomer', icon: Users },
  ];

  const menuMonetisasi: MenuItem[] = [
    { name: 'Paket', path: '/admin/managementPaket', icon: Package },
    { name: 'Pendapatan', path: '/admin/pendapatan', icon: DollarSign },
  ];

  return (
    <>
      {/* OVERLAY GELAP UNTUK MOBILE - Muncul saat sidebar terbuka */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* SIDEBAR CONTAINER */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#131b2f] text-slate-300 flex flex-col justify-between transition-transform duration-300 ease-in-out transform md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="overflow-y-auto custom-scrollbar">
          
          {/* Logo & Tombol Close (Mobile) */}
          <div className="flex items-center justify-between px-6 py-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-500 shrink-0" />
              <span className="font-bold text-xl tracking-tight text-white">GoLaundry<span className="text-blue-500">HQ</span></span>
            </div>
            {/* Tombol X hanya muncul di HP */}
            <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Platform */}
          <div className="mb-6 px-4">
            <p className="px-3 text-[11px] font-bold text-slate-500 tracking-wider uppercase mb-3">Platform</p>
            <nav className="space-y-1">
              {menuPlatform.map((item) => {
                const isActive = location.pathname.includes(item.path);
                return (
                  <Link key={item.name} to={item.path} className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-white/10 hover:text-white'}`}>
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      {item.name}
                    </div>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{item.badge}</span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Menu Monetisasi */}
          <div className="mb-6 px-4">
            <p className="px-3 text-[11px] font-bold text-slate-500 tracking-wider uppercase mb-3">Monetisasi</p>
            <nav className="space-y-1">
              {menuMonetisasi.map((item) => {
                const isActive = location.pathname.includes(item.path);
                return (
                  <Link key={item.name} to={item.path} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-white/10 hover:text-white'}`}>
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Profil Super Admin */}
        <div className="p-4 border-t border-white/10 shrink-0">
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 mb-2 rounded-xl text-sm font-medium text-slate-400 hover:bg-white/10 hover:text-white transition-all">
            <LogOut className="w-5 h-5" /> Logout
          </Link>
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
              SA
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">Super Admin</p>
              <p className="text-[11px] text-slate-400 truncate">System Administrator</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};