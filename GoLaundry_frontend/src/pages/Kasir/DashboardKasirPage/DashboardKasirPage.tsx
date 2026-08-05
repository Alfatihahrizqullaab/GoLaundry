import React, { useState } from 'react';
import { ShoppingCart, Clock, Search, Printer, Plus, Scale, PackageCheck, AlertCircle } from 'lucide-react';

// Import komponen terpisah dari folder features
import { ModalPesananOffline } from '../../../features/kasirLaundry/ModalPesananOffline/ModalPesananOffline';
import { ModalTimbangOnline } from '../../../features/kasirLaundry/ModalTimbangOnline/ModalTimbangOnline';

export const DashboardKasirPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  // State Manajemen Modal
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);
  const [timbangModalData, setTimbangModalData] = useState<any>(null); // null = tertutup, isi data = terbuka

  // Data Dummy Transaksi
  const [transactions] = useState([
    { id: '#ORD-99242', waktu: 'Baru saja', pelanggan: 'Siti Aminah', layanan: 'Cuci Reguler', tipe: 'Online', berat: '-', total: 0, statusBayar: 'Belum Lunas', statusPesanan: 'Menunggu Ditimbang' },
    { id: '#ORD-99238', waktu: 'Hari ini, 09:30', pelanggan: 'Budi Santoso', layanan: 'Cuci Komplit', tipe: 'Offline', berat: '3 kg', total: 45000, statusBayar: 'Lunas', statusPesanan: 'Diproses' },
    { id: '#ORD-99239', waktu: 'Kemarin, 16:45', pelanggan: 'Andi Wijaya', layanan: 'Setrika Saja', tipe: 'Offline', berat: '5 kg', total: 50000, statusBayar: 'DP Rp 20.000', statusPesanan: 'Selesai (Siap Ambil)' },
  ]);

  const formatRupiah = (angka: number) => {
    if (angka === 0) return '-';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  const handleCetakStruk = (id: string) => {
    alert(`Menghubungkan ke printer thermal untuk struk ${id}...`);
  };

  const handleAmbilBarang = (id: string) => {
    alert(`Pesanan ${id} berhasil ditandai sebagai 'Sudah Diambil'.`);
  };

  return (
    <>
      <div className="w-full relative">
        {/* HEADER & TOMBOL AKSI UTAMA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Dashboard Kasir</h1>
            <p className="text-sm text-slate-500 mt-1">Kelola antrean timbangan, transaksi offline, dan pengambilan</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="relative flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-orange-500 text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-sm">
              <Scale className="w-5 h-5" /> Antrean Online 
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">1</span>
            </button>
            
            {/* Tombol pemicu Modal Pesanan Offline */}
            <button 
              onClick={() => setIsOfflineModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
            >
              <Plus className="w-5 h-5" /> Pesanan Baru (Offline)
            </button>
          </div>
        </div>

        {/* KARTU STATISTIK (Ringkasan) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0"><AlertCircle className="w-6 h-6" /></div>
            <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Perlu Ditimbang</p><h3 className="text-2xl font-extrabold text-slate-800">1</h3></div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0"><Clock className="w-6 h-6" /></div>
            <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Sedang Diproses</p><h3 className="text-2xl font-extrabold text-slate-800">12</h3></div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0"><PackageCheck className="w-6 h-6" /></div>
            <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Siap Diambil</p><h3 className="text-2xl font-extrabold text-slate-800">5</h3></div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 flex-shrink-0"><ShoppingCart className="w-6 h-6" /></div>
            <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Hari Ini</p><h3 className="text-2xl font-extrabold text-slate-800">24</h3></div>
          </div>
        </div>

        {/* AREA TABEL TRANSAKSI */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-slate-800">Daftar Transaksi Berjalan</h2>
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Cari nama atau nomor pesanan..." className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[1100px]">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-100">
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">No. Pesanan</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pelanggan</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Layanan</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Berat/Qty</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total & Status</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Proses</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((trx) => (
                  <tr key={trx.id} className="hover:bg-slate-50/80 transition-colors border-b border-gray-50 last:border-0">
                    <td className="py-4 px-6">
                      <span className="font-extrabold text-slate-800 block text-sm">{trx.id}</span>
                      <span className="text-xs text-slate-400 font-medium">{trx.waktu}</span>
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-slate-700">{trx.pelanggan}</td>
                    <td className="py-4 px-6 text-sm text-slate-600 font-medium">{trx.layanan}</td>
                    <td className="py-4 px-6 text-sm font-bold text-slate-800">
                      {trx.berat === '-' ? <span className="text-orange-500 text-xs italic">Menunggu</span> : trx.berat}
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-extrabold text-slate-800 block text-sm">{formatRupiah(trx.total)}</span>
                      <span className={`inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-bold ${trx.statusBayar === 'Lunas' ? 'bg-emerald-100 text-emerald-700' : trx.statusBayar.includes('DP') ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>{trx.statusBayar}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${trx.statusPesanan === 'Menunggu Ditimbang' ? 'bg-orange-100 text-orange-700 border border-orange-200' : trx.statusPesanan === 'Selesai (Siap Ambil)' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-50 text-blue-600'}`}>{trx.statusPesanan}</span>
                    </td>
                    
                    {/* AREA TOMBOL AKSI YANG SUDAH BERFUNGSI SEMUA */}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        {/* Tombol Timbang (Memicu Modal) */}
                        {trx.statusPesanan === 'Menunggu Ditimbang' && (
                          <button onClick={() => setTimbangModalData(trx)} className="px-4 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-bold hover:bg-orange-600 shadow-sm shadow-orange-500/30">
                            Timbang
                          </button>
                        )}
                        
                        {/* Tombol Ambil Barang */}
                        {trx.statusPesanan === 'Selesai (Siap Ambil)' && (
                          <button onClick={() => handleAmbilBarang(trx.id)} className="px-4 py-1.5 bg-emerald-500 text-white rounded-lg text-xs font-bold hover:bg-emerald-600 shadow-sm shadow-emerald-500/30">
                            Ambil Barang
                          </button>
                        )}

                        {/* Tombol Cetak Struk */}
                        {trx.statusPesanan !== 'Menunggu Ditimbang' && (
                          <button onClick={() => handleCetakStruk(trx.id)} className="p-1.5 text-gray-400 hover:text-slate-700 hover:bg-gray-100 rounded-lg transition-colors">
                            <Printer className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* RENDER MODAL YANG SUDAH KITA IMPORT */}
      <ModalPesananOffline 
        isOpen={isOfflineModalOpen} 
        onClose={() => setIsOfflineModalOpen(false)} 
      />

      <ModalTimbangOnline 
        isOpen={!!timbangModalData} 
        dataPesanan={timbangModalData} 
        onClose={() => setTimbangModalData(null)} 
      />
    </>
  );
};

export default DashboardKasirPage;