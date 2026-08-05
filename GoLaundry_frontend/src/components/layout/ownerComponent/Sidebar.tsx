import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Store, Users, Shirt, 
  CreditCard, BarChart3, Droplets, X, LogOut,
  Receipt, FileText // Tambahan FileText untuk Tagihan
} from 'lucide-react';
import { UserProfileCard } from './UserProfileCard';

interface SidebarProps { isOpen: boolean; onClose: () => void; }

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuUtama = [
    { name: 'Dashboard', path: '/dashboardOwner', icon: LayoutDashboard },
    { name: 'Profil Toko', path: '/profileToko', icon: Store },
    { name: 'Karyawan', path: '/Karyawan', icon: Users },
    { name: 'Layanan', path: '/Layanan', icon: Shirt },
  ];

  const menuBisnis = [
    { name: 'Langganan', path: '/Langganan', icon: CreditCard },
    { name: 'Tagihan', path: '/tagihan', icon: FileText }, // HALAMAN PROSES PESANAN
    { name: 'Riwayat Transaksi', path: '/riwayat-transaksi', icon: Receipt }, // HALAMAN HISTORI
    { name: 'Laporan & Analisi', path: '/laporan-analisis', icon: BarChart3 },
  ];

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 lg:hidden transition-opacity" onClick={onClose} />}
      <aside className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-5 transition-transform duration-300 lg:translate-x-0 lg:static ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}>
        <div>
          <div className="flex items-center justify-between mb-8 px-2">
            <Link to="/dashboardOwner" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20"><Droplets className="w-5 h-5" /></div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Go<span className="text-blue-600">Laundry</span></span>
            </Link>
            <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 lg:hidden"><X className="w-5 h-5" /></button>
          </div>

          <div className="mb-6">
            <p className="px-3 text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3">Menu Utama</p>
            <nav className="space-y-1">
              {menuUtama.map((item) => (
                <Link key={item.name} to={item.path} onClick={onClose} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${location.pathname === item.path ? 'bg-blue-50 text-gray-900 font-bold' : 'text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-900'}`}>
                  <item.icon className={`w-5 h-5 ${location.pathname === item.path ? 'text-blue-600' : 'text-gray-400'}`} /> {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="px-3 text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3">Bisnis</p>
            <nav className="space-y-1">
              {menuBisnis.map((item) => (
                <Link key={item.name} to={item.path} onClick={onClose} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${location.pathname === item.path ? 'bg-blue-50 text-gray-900 font-bold' : 'text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-900'}`}>
                  <item.icon className={`w-5 h-5 ${location.pathname === item.path ? 'text-blue-600' : 'text-gray-400'}`} /> {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div>
          <Link to="/" onClick={onClose} className="flex items-center gap-3 px-3 py-2.5 mb-4 rounded-xl font-medium text-sm text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all group">
            <LogOut className="w-5 h-5 group-hover:text-red-600 transition-colors" /> Logout
          </Link>
          <UserProfileCard name="Budi Laundry" plan="Premium Plan" initial="B" />
        </div>
      </aside>
    </>
  );
};