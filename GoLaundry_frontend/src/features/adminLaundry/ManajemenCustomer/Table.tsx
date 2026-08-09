import React, { memo } from 'react';
import { UserX, ShieldCheck, Mail, Phone } from 'lucide-react';

export interface CustomerData {
  id: string;
  nama: string;
  email: string;
  kontak: string;
  role: string;
  tanggal: string;
  status: string;
}

interface CustomerTableProps {
  data: CustomerData[];
  onAction: (id: string, aksi: string) => void;
}

// Dibungkus React.memo
export const CustomerTable: React.FC<CustomerTableProps> = memo(({ data, onAction }) => {
  
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'Aktif': return <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-xs">Aktif</span>;
      case 'Suspend': return <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-xs">Suspend</span>;
      default: return <span>{status}</span>;
    }
  };

  const renderRoleBadge = (role: string) => {
    return role === 'Owner' 
      ? <span className="text-purple-600 bg-purple-50 px-2 py-0.5 rounded text-xs font-bold border border-purple-100">Owner</span>
      : <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs font-bold border border-blue-100">Customer</span>;
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse min-w-[900px]">
        <thead>
          <tr className="border-b border-gray-100 bg-white">
            <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider w-1/3">Pengguna</th>
            <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Role</th>
            <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tanggal Daftar</th>
            <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
            <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.length === 0 ? (
            <tr><td colSpan={5} className="py-8 text-center text-slate-400 font-medium bg-white">Tidak ada pengguna ditemukan.</td></tr>
          ) : (
            data.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/50 transition-colors bg-white">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                      {user.nama.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{user.nama}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="flex items-center gap-1 text-[11px] text-slate-500"><Mail className="w-3 h-3" /> {user.email}</span>
                        <span className="flex items-center gap-1 text-[11px] text-slate-500"><Phone className="w-3 h-3" /> {user.kontak}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">{renderRoleBadge(user.role)}</td>
                <td className="py-4 px-6 text-sm text-slate-600">{user.tanggal}</td>
                <td className="py-4 px-6">{renderStatusBadge(user.status)}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => onAction(user.id, 'Detail')}
                      className="px-3 py-1.5 text-blue-600 bg-blue-50/50 hover:bg-blue-50 rounded-lg text-xs font-bold transition-colors"
                    >
                      Detail
                    </button>
                    
                    {user.status === 'Aktif' ? (
                      <button 
                        onClick={() => onAction(user.id, 'Suspend')}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg text-xs font-bold transition-colors"
                        title="Tangguhkan Akun"
                      >
                        <UserX className="w-3.5 h-3.5" /> Suspend
                      </button>
                    ) : (
                      <button 
                        onClick={() => onAction(user.id, 'Aktifkan')}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-xs font-bold transition-colors"
                        title="Aktifkan Akun"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" /> Aktifkan
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
});