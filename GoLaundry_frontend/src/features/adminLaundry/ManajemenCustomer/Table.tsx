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
      case 'Aktif': return <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-[10px] md:text-xs">Aktif</span>;
      case 'Suspend': return <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-[10px] md:text-xs">Suspend</span>;
      default: return <span>{status}</span>;
    }
  };

  const renderRoleBadge = (role: string) => {
    return role === 'Owner' 
      ? <span className="text-purple-600 bg-purple-50 px-2 py-0.5 rounded text-[10px] md:text-xs font-bold border border-purple-100">Owner</span>
      : <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-[10px] md:text-xs font-bold border border-blue-100">Customer</span>;
  };

  return (
    <div className="w-full">
      
      {/* ========================================================= */}
      {/* 1. TAMPILAN MOBILE (KARTU VERTIKAL)                         */}
      {/* ========================================================= */}
      <div className="block md:hidden divide-y divide-gray-100">
        {data.length === 0 ? (
          <div className="py-8 text-center text-slate-400 font-medium bg-white text-sm">Tidak ada pengguna ditemukan.</div>
        ) : (
          data.map((user) => (
            <div key={user.id} className="p-4 bg-white flex flex-col gap-4 hover:bg-slate-50 transition-colors">
              
              <div className="flex justify-between items-start gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">
                    {user.nama.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base">{user.nama}</h4>
                    <div className="mt-1">{renderRoleBadge(user.role)}</div>
                  </div>
                </div>
                {renderStatusBadge(user.status)}
              </div>
              
              <div className="bg-slate-50 p-3 rounded-xl border border-gray-100 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" /> 
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" /> 
                  <span>{user.kontak}</span>
                </div>
                <div className="pt-2 border-t border-gray-200 mt-2 text-xs font-medium text-slate-500">
                  Terdaftar: {user.tanggal}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <button 
                  onClick={() => onAction(user.id, 'Detail')}
                  className="flex-1 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg text-xs font-bold transition-colors text-center"
                >
                  Detail
                </button>
                {user.status === 'Aktif' ? (
                  <button 
                    onClick={() => onAction(user.id, 'Suspend')}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg text-xs font-bold transition-colors"
                  >
                    <UserX className="w-4 h-4" /> Suspend
                  </button>
                ) : (
                  <button 
                    onClick={() => onAction(user.id, 'Aktifkan')}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-xs font-bold transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4" /> Aktifkan
                  </button>
                )}
              </div>

            </div>
          ))
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. TAMPILAN DESKTOP (TABEL HORIZONTAL)                      */}
      {/* ========================================================= */}
      <div className="hidden md:block overflow-x-auto w-full">
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
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">
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
      
    </div>
  );
});