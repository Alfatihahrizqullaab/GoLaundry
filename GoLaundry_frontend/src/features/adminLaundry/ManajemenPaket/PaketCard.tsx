import React, { memo } from 'react';
import { Ban, CheckCircle2 } from 'lucide-react';

export interface PaketData {
  id: string;
  nama: string;
  harga: number;
  tipe: string;
  status: string;
  deskripsi: string[]; 
}

interface PaketCardProps {
  paket: PaketData;
  onEdit: (id: string) => void;
  onDisable: (id: string) => void;
}

export const PaketCard: React.FC<PaketCardProps> = memo(({ paket, onEdit, onDisable }) => {
  const formatRupiah = (angka: number) => {
    if (angka === 0) return 'Gratis';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow relative">
      
      {/* Badge Status */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
        <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg ${
          paket.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
        }`}>
          {paket.status}
        </span>
      </div>

      <div className="mb-5 sm:mb-6">
        <h3 className="font-bold text-lg text-slate-800 mb-2">{paket.nama}</h3>
        <div className="flex flex-wrap items-baseline gap-1.5">
          <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">{formatRupiah(paket.harga)}</span>
          <span className="text-xs sm:text-sm font-medium text-slate-400">/ {paket.tipe}</span>
        </div>
      </div>

      {/* Area Deskripsi Poin-poin */}
      <div className="flex-1 mb-6 sm:mb-8">
        <ul className="space-y-2.5 sm:space-y-3">
          {paket.deskripsi.map((poin, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-tight">{poin}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Area Tombol Aksi */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
        <button 
          onClick={() => onEdit(paket.id)}
          className="flex-1 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-sm font-bold transition-colors border border-gray-200/60"
        >
          Edit
        </button>
        <button 
          onClick={() => onDisable(paket.id)}
          className="p-2.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl transition-colors"
          title="Nonaktifkan Paket"
        >
          <Ban className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
});