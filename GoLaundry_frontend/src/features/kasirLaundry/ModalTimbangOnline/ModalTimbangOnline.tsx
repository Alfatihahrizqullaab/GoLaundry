import React from 'react';
import { Scale } from 'lucide-react';

interface ModalTimbangOnlineProps {
  isOpen: boolean;
  onClose: () => void;
  dataPesanan: any;
}

export const ModalTimbangOnline: React.FC<ModalTimbangOnlineProps> = ({ isOpen, onClose, dataPesanan }) => {
  if (!isOpen || !dataPesanan) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Scale className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-lg text-slate-800 mb-1">Timbang Pesanan Online</h3>
          <p className="text-sm text-slate-500 mb-6">{dataPesanan.id} ({dataPesanan.pelanggan})</p>
          
          <div className="text-left mb-6">
            <label className="block text-xs font-bold text-slate-500 mb-2">Masukkan Berat Asli Cucian (Kg)</label>
            <input type="number" placeholder="Contoh: 3.5" className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-lg font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
          </div>

          <div className="flex gap-3">
            <button onClick={onClose} className="flex-1 py-3 text-sm font-bold text-slate-500 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
              Batal
            </button>
            <button onClick={onClose} className="flex-1 py-3 bg-orange-500 text-white rounded-xl text-sm font-bold hover:bg-orange-600 transition-colors">
              Update Tagihan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};