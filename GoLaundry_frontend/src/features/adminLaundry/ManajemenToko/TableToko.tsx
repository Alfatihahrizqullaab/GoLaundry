import React, { memo } from 'react';
import { Check, Ban } from 'lucide-react';

export interface TokoData {
  id: string;
  namaToko: string;
  owner: string;
  kontak: string;
  tanggal: string;
  status: string;
}

interface TokoTableProps {
  data: TokoData[];
  onAction: (id: string, aksi: string) => void;
}

// Bungkus dengan React.memo
export const TokoTable: React.FC<TokoTableProps> = memo(({ data, onAction }) => {
  console.log("Tabel/Card dirender!"); // Tes render

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'Aktif': 
        return <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-[10px] md:text-xs text-center">Aktif</span>;
      case 'Menunggu Verifikasi': 
        return <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-[10px] md:text-xs text-center">Menunggu Verifikasi</span>;
      case 'Nonaktif': 
        return <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-[10px] md:text-xs text-center">Nonaktif</span>;
      default: 
        return <span>{status}</span>;
    }
  };

  return (
    <div className="w-full">
      
      {/* ========================================================= */}
      {/* 1. TAMPILAN MOBILE (KARTU VERTIKAL)                         */}
      {/* ========================================================= */}
      <div className="block md:hidden divide-y divide-gray-100">
        {data.length === 0 ? (
          <div className="py-8 text-center text-slate-400 font-medium bg-white text-sm">Tidak ada data toko ditemukan.</div>
        ) : (
          data.map((toko) => (
            <div key={toko.id} className="p-4 bg-white flex flex-col gap-4 hover:bg-slate-50 transition-colors">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h4 className="font-extrabold text-slate-800 text-base">{toko.namaToko}</h4>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">{toko.owner}</p>
                </div>
                {renderStatusBadge(toko.status)}
              </div>
              
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-gray-100">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase mb-0.5">Kontak</span>
                  <span className="text-sm font-semibold text-slate-700">{toko.kontak}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase mb-0.5">Tanggal Daftar</span>
                  <span className="text-sm font-semibold text-slate-700">{toko.tanggal}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <button onClick={() => onAction(toko.id, 'Detail')} className="flex-1 px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg text-xs font-bold transition-colors text-center">Detail</button>
                {toko.status === 'Aktif' && (
                  <button onClick={() => onAction(toko.id, 'Nonaktifkan')} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg text-xs font-bold transition-colors"><Ban className="w-4 h-4" /> Nonaktifkan</button>
                )}
                {toko.status === 'Menunggu Verifikasi' && (
                  <button onClick={() => onAction(toko.id, 'Setujui')} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg text-xs font-bold transition-colors"><Check className="w-4 h-4" /> Setujui</button>
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
              <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider w-1/3">Nama Toko & Owner</th>
              <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Kontak</th>
              <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tanggal Daftar</th>
              <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 ? (
              <tr><td colSpan={5} className="py-8 text-center text-slate-400 font-medium bg-white">Tidak ada data toko ditemukan.</td></tr>
            ) : (
              data.map((toko) => (
                <tr key={toko.id} className="hover:bg-slate-50/50 transition-colors bg-white">
                  <td className="py-5 px-6">
                    <h4 className="font-bold text-slate-800 text-sm mb-0.5">{toko.namaToko}</h4>
                    <p className="text-xs text-slate-500">{toko.owner}</p>
                  </td>
                  <td className="py-5 px-6 text-sm text-slate-600">{toko.kontak}</td>
                  <td className="py-5 px-6 text-sm text-slate-600">{toko.tanggal}</td>
                  <td className="py-5 px-6">{renderStatusBadge(toko.status)}</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center justify-end gap-3">
                      <button onClick={() => onAction(toko.id, 'Detail')} className="px-4 py-1.5 text-blue-600 bg-blue-50/50 hover:bg-blue-50 rounded-lg text-xs font-bold transition-colors">Detail</button>
                      {toko.status === 'Aktif' && <button onClick={() => onAction(toko.id, 'Nonaktifkan')} className="flex items-center gap-1.5 px-3 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg text-xs font-bold transition-colors"><Ban className="w-3.5 h-3.5" /> Nonaktifkan</button>}
                      {toko.status === 'Menunggu Verifikasi' && <button onClick={() => onAction(toko.id, 'Setujui')} className="flex items-center gap-1.5 px-3 py-1.5 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg text-xs font-bold transition-colors"><Check className="w-3.5 h-3.5" /> Setujui</button>}
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