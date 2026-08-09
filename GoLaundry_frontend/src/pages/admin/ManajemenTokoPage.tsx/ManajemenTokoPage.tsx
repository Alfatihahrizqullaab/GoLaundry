import React, { useState } from 'react';
import { TokoToolbar } from '../../../features/adminLaundry/ManajemenToko/Toolbar';
import { TokoTable, type TokoData } from '../../../features/adminLaundry/ManajemenToko/TableToko';

export const ManajemenTokoPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  // State untuk Data dan Filter
  const [statusFilter, setStatusFilter] = useState('Semua Status');
  const [searchQuery, setSearchQuery] = useState('');

  // Data Dummy Master
  const [tokoList, setTokoList] = useState<TokoData[]>([
    { id: 'TK-001', namaToko: 'Budi Laundry', owner: 'Budi Santoso', kontak: '0812345678', tanggal: '10 Jan 2024', status: 'Aktif' },
    { id: 'TK-002', namaToko: 'Klin Wash', owner: 'Ahmad D', kontak: '0856789012', tanggal: '12 Jan 2024', status: 'Menunggu Verifikasi' },
    { id: 'TK-003', namaToko: 'Tirta Bersih', owner: 'Susi S', kontak: '0898765432', tanggal: '15 Jan 2024', status: 'Nonaktif' },
  ]);

  // Logika Aksi Kasir (Bisa dihubungkan ke API nanti)
  const handleAksi = (id: string, aksi: string) => {
    alert(`Melakukan aksi "${aksi}" pada toko ID: ${id}`);
    
    // Simulasi update state jika menyetujui toko
    if (aksi === 'Setujui') {
      setTokoList(prev => prev.map(toko => 
        toko.id === id ? { ...toko, status: 'Aktif' } : toko
      ));
    }
  };

  // Logika Filter Data
  const filteredToko = tokoList.filter((toko) => {
    const matchStatus = statusFilter === 'Semua Status' || toko.status === statusFilter;
    const matchSearch = toko.namaToko.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        toko.owner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Manajemen Toko</h2>
      
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Render Komponen Toolbar */}
        <TokoToolbar 
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Render Komponen Table */}
        <TokoTable 
          data={filteredToko} 
          onAction={handleAksi} 
        />
      </div>
    </div>
  );
};

export default ManajemenTokoPage;