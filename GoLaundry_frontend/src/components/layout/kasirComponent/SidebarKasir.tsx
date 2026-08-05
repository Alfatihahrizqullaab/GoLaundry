import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Receipt, LogOut, Droplets } from 'lucide-react';

export const SidebarKasir: React.FC = () => {
  const location = useLocation();

  const menuKasir = [
    { name: 'Dashboard', path: '/kasir/dashboard', icon: ShoppingCart },
    { name: 'Transaksi', path: '/kasir/transaksi', icon: Receipt },
  ];

  return (
    <aside className="fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-5 shadow-sm">
      <div>
        <div className="flex items-center gap-2.5 mb-10 px-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Droplets className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">
            Go<span className="text-blue-600">Laundry</span>
          </span>
        </div>

        <div className="mb-6">
          <p className="px-3 text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3">Menu Kasir</p>
          <nav className="space-y-1.5">
            {menuKasir.map((item) => {
              const isActive = location.pathname.includes(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-all ${
                    isActive 
                      ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20' 
                      : 'text-gray-500 font-medium hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div>
        <Link to="/" className="flex items-center gap-3 px-3 py-3 mb-4 rounded-xl font-medium text-sm text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all group">
          <LogOut className="w-5 h-5 group-hover:text-red-600 transition-colors" /> Logout
        </Link>
        <div className="flex items-center gap-3 px-3 py-3 bg-slate-50 rounded-xl border border-gray-100">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
            K
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Kasir 1</p>
            <p className="text-xs text-slate-500">Shift Pagi</p>
          </div>
        </div>
      </div>
    </aside>
  );
};