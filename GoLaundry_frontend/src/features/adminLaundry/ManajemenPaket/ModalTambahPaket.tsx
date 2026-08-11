import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

interface ModalTambahPaketProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalTambahPaket: React.FC<ModalTambahPaketProps> = ({ isOpen, onClose }) => {
  const [namaPaket, setNamaPaket] = useState('');
  const [harga, setHarga] = useState('');
  const [tipe, setTipe] = useState('1 Bulan');
  const [deskripsi, setDeskripsi] = useState('');

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Menyimpan Paket: ${namaPaket} - Rp ${harga} - Tipe: ${tipe}`);
    setNamaPaket(''); setHarga(''); setDeskripsi(''); setTipe('1 Bulan');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      {/* max-h-[90vh] dan overflow-y-auto memastikan form bisa discroll di layar HP yang pendek */}
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl flex flex-col max-h-[95vh]">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100 bg-slate-50 shrink-0">
          <h3 className="font-bold text-lg text-slate-800">Buat Paket Baru</h3>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Form Body - Scrollable */}
        <form onSubmit={handleSave} className="p-4 sm:p-6 space-y-4 overflow-y-auto custom-scrollbar">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5">Nama Paket Langganan</label>
            <input 
              type="text" 
              required
              placeholder="Contoh: Premium" 
              value={namaPaket}
              onChange={(e) => setNamaPaket(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" 
            />
          </div>

          {/* grid-cols-1 di HP, sm:grid-cols-2 di Tablet/Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">Harga (Rp)</label>
              <input 
                type="number" 
                required
                min="0"
                placeholder="0" 
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">Tipe (Durasi)</label>
              <select 
                value={tipe}
                onChange={(e) => setTipe(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <option value="Selamanya">Selamanya</option>
                <option value="1 Bulan">1 Bulan</option>
                <option value="3 Bulan">3 Bulan</option>
                <option value="1 Tahun">1 Tahun</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5">Deskripsi / Fasilitas (Pisahkan dengan baris baru)</label>
            <textarea 
              required
              rows={4}
              placeholder="Misal:&#10;Manajemen 5 Karyawan&#10;Laporan Keuangan Dasar&#10;Support 24/7" 
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none" 
            />
          </div>
        </form>

        {/* Footer Modal */}
        <div className="p-4 sm:p-5 border-t border-gray-100 flex flex-col-reverse sm:flex-row justify-end gap-3 shrink-0 bg-white">
          <button type="button" onClick={onClose} className="w-full sm:w-auto px-5 py-2.5 text-sm font-bold text-slate-500 hover:bg-slate-50 rounded-xl transition-colors">
            Batal
          </button>
          <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">
            <Save className="w-4 h-4" /> Simpan Paket
          </button>
        </div>

      </div>
    </div>
  );
};