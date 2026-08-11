import React, { useState, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { ModalTambahPaket } from '../../../features/adminLaundry/ManajemenPaket/ModalTambahPaket';
import { PaketCard, type PaketData } from '../../../features/adminLaundry/ManajemenPaket/PaketCard';

export const ManajemenPaketPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data Dummy Paket Langganan
  const [paketList] = useState<PaketData[]>([
    { 
      id: 'PKT-1', 
      nama: 'Basic', 
      harga: 0, 
      tipe: 'Selamanya', 
      status: 'Aktif',
      deskripsi: ['Maksimal 50 Transaksi / Bulan', '1 Akun Kasir', 'Laporan Standar'] 
    },
    { 
      id: 'PKT-2', 
      nama: 'Pro', 
      harga: 99000, 
      tipe: '1 Bulan', 
      status: 'Aktif',
      deskripsi: ['Transaksi Tidak Terbatas', '3 Akun Kasir', 'Manajemen Karyawan Produksi', 'Laporan Keuangan Lengkap'] 
    },
    { 
      id: 'PKT-3', 
      nama: 'Premium', 
      harga: 199000, 
      tipe: '1 Bulan', 
      status: 'Aktif',
      deskripsi: ['Semua Fitur Pro', 'Unlimited Akun Kasir', 'Notifikasi WhatsApp Otomatis', 'Prioritas Dukungan 24/7'] 
    }
  ]);

  const handleEdit = useCallback((id: string) => {
    alert(`Membuka form edit untuk paket ID: ${id}`);
  }, []);

  const handleDisable = useCallback((id: string) => {
    alert(`Menonaktifkan paket ID: ${id}`);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Halaman (Tombol full-width di Mobile) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manajemen Paket Langganan</h2>
          <p className="text-sm text-slate-500 mt-1">Kelola harga dan fasilitas paket berlangganan untuk pemilik laundry.</p>
        </div>
        
        {/* w-full di HP, w-auto di PC */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto flex justify-center items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
        >
          <Plus className="w-4 h-4" /> Buat Paket Baru
        </button>
      </div>
      
      {/* Grid Kartu Paket: 1 Kolom (HP) -> 2 Kolom (Tablet) -> 3 Kolom (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {paketList.map((paket) => (
          <PaketCard 
            key={paket.id} 
            paket={paket} 
            onEdit={handleEdit} 
            onDisable={handleDisable} 
          />
        ))}
      </div>

      {/* Render Modal Form */}
      <ModalTambahPaket 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
};

export default ManajemenPaketPage;