import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard, Store, Users, Package, DollarSign } from 'lucide-react';

export const SidebarAdmin: React.FC = () => {
  const location = useLocation();

  const menuPlatform = [
    { name: 'Dashboard Utama', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Manajemen Toko', path: '/admin/toko', icon: Store, badge: 3 },
    { name: 'Owner & Customer', path: '/admin/users', icon: Users },
  ];

  const menuMonetisasi = [
    { name: 'Paket Langganan', path: '/admin/paket', icon: Package },
    { name: 'Pendapatan', path: '/admin/pendapatan', icon: DollarSign },
  ];

  return (
    <aside className="fixed top-0 left-0 z-50 h-screen w-64 bg-[#131b2f] text-slate-300 flex flex-col justify-between transition-all">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-8">
          <ShieldCheck className="w-8 h-8 text-blue-500" />
          <span className="font-bold text-xl tracking-tight text-white">GoLaundry<span className="text-blue-500">HQ</span></span>
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
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm">
            SA
          </div>
          <div>
            <p className="text-sm font-bold text-white">Super Admin</p>
            <p className="text-[11px] text-slate-400">System Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};