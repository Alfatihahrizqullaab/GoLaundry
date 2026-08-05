import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ModalPesananOfflineProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalPesananOffline: React.FC<ModalPesananOfflineProps> = ({ isOpen, onClose }) => {
  // Variabel wajib yang tidak boleh diubah (tetap dipertahankan sesuai strukturmu)
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  // --- STATE UNTUK LOGIKA PERHITUNGAN HARGA ---
  // Default harga adalah Rp 8.000 (Cuci Komplit Reguler)
  const [hargaLayanan, setHargaLayanan] = useState<number>(8000); 
  const [berat, setBerat] = useState<number>(0);

  // Perhitungan otomatis secara real-time
  const estimasiTotal = hargaLayanan * berat;

  // Fungsi untuk memformat angka jadi Rupiah
  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR', 
      minimumFractionDigits: 0 
    }).format(angka);
  };

  // Fungsi reset state saat modal ditutup agar form kembali kosong saat dibuka lagi
  const handleClose = () => {
    setHargaLayanan(8000);
    setBerat(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-slate-50/50">
          <h3 className="font-bold text-lg text-slate-800">Buat Pesanan Baru (Offline)</h3>
          <button onClick={handleClose} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Form Input */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">Nama Pelanggan</label>
              <input type="text" placeholder="Masukkan nama..." className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">No. WhatsApp</label>
              <input type="text" placeholder="08..." className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5">Pilih Layanan</label>
            <select 
              value={hargaLayanan}
              onChange={(e) => setHargaLayanan(Number(e.target.value))}
              className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="8000">Cuci Komplit (Reguler) - Rp 8.000/kg</option>
              <option value="12000">Cuci Express (1 Hari) - Rp 12.000/kg</option>
              <option value="30000">Bed Cover - Rp 30.000/pcs</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">Berat (Kg) / Qty</label>
              <div className="relative">
                <input 
                  type="number" 
                  min="0"
                  value={berat === 0 ? '' : berat} 
                  onChange={(e) => setBerat(Number(e.target.value))}
                  placeholder="0" 
                  className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" 
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">Kg</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">Status Pembayaran</label>
              <select className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                <option value="belum">Belum Lunas</option>
                <option value="dp">Bayar DP</option>
                <option value="lunas">Lunas</option>
              </select>
            </div>
          </div>

          {/* Area Estimasi Total yang sudah terhubung dengan State */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-xl flex justify-between items-center transition-all">
            <span className="text-sm font-bold text-blue-800">Estimasi Total Harga:</span>
            <span className="text-xl font-extrabold text-blue-700">
              {formatRupiah(estimasiTotal)}
            </span>
          </div>
        </div>

        {/* Footer Modal */}
        <div className="p-5 border-t border-gray-100 flex justify-end gap-3 bg-slate-50/50">
          <button onClick={handleClose} className="px-5 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors">
            Batal
          </button>
          <button onClick={handleClose} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">
            Simpan & Cetak
          </button>
        </div>

      </div>
    </div>
  );
};