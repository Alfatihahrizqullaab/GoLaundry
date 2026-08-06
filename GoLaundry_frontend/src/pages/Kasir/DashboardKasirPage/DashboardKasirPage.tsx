import React, { useState } from 'react';
import { ShoppingCart, Clock, Search, Printer, Plus, Scale, PackageCheck, AlertCircle } from 'lucide-react';

import { ModalPesananOffline } from '../../../features/kasirLaundry/ModalPesananOffline/ModalPesananOffline';
import { ModalTimbangOnline } from '../../../features/kasirLaundry/ModalTimbangOnline/ModalTimbangOnline';

export const DashboardKasirPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);
  const [timbangModalData, setTimbangModalData] = useState<any>(null);

  const [transactions, setTransactions] = useState([
    { id: '#ORD-99242', waktu: 'Baru saja', pelanggan: 'Siti Aminah', layanan: 'Cuci Reguler', tipe: 'Online', berat: '-', total: 0, statusBayar: 'Belum Lunas', statusPesanan: 'Menunggu Ditimbang' },
    { id: '#ORD-99238', waktu: 'Hari ini, 09:30', pelanggan: 'Budi Santoso', layanan: 'Cuci Komplit', tipe: 'Offline', berat: '3 kg', total: 45000, statusBayar: 'Belum Lunas', statusPesanan: 'Diproses' },
    { id: '#ORD-99239', waktu: 'Kemarin, 16:45', pelanggan: 'Andi Wijaya', layanan: 'Setrika Saja', tipe: 'Offline', berat: '5 kg', total: 50000, statusBayar: 'DP Rp 20.000', statusPesanan: 'Selesai (Siap Ambil)' },
    { id: '#ORD-99240', waktu: 'Kemarin, 14:00', pelanggan: 'Rina Melati', layanan: 'Bed Cover', tipe: 'Online', berat: '2 Pcs', total: 60000, statusBayar: 'Lunas', statusPesanan: 'Selesai (Siap Ambil)' },
  ]);

  const formatRupiah = (angka: number) => {
    if (angka === 0) return '-';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  const handleCetakStruk = (id: string, statusBayar: string) => {
    if (statusBayar === 'Lunas') alert(`Mencetak Struk LUNAS untuk ${id}...`);
    else alert(`Mencetak Struk SEMENTARA (Sisa Tagihan) untuk ${id}...`);
  };

  const handlePelunasan = (id: string) => {
    const konfirmasi = window.confirm(`Proses pelunasan untuk pesanan ${id}?`);
    if (konfirmasi) {
      setTransactions(transactions.map(trx => trx.id === id ? { ...trx, statusBayar: 'Lunas' } : trx));
      alert(`Pembayaran berhasil! Silakan cetak struk Lunas.`);
    }
  };

  const handleAmbilBarang = (id: string) => {
    alert(`Pesanan ${id} diserahkan ke pelanggan dan ditandai 'Sudah Diambil'. Transaksi ini akan dipindah ke halaman Riwayat.`);
  };

  return (
    <>
      <div className="w-full relative pb-10">
        
        {/* HEADER & TOMBOL AKSI UTAMA - Mengecil otomatis di layar kecil */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Dashboard Kasir</h1>
            <p className="text-sm text-slate-500 mt-1">Kelola antrean timbangan, transaksi offline, dan pengambilan</p>
          </div>
          
          {/* Container tombol disejajarkan ke samping (flex-row) */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 w-full md:w-auto">
            
            {/* Tombol Antrean Online */}
            <button className="relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-white border-2 border-orange-500 text-orange-600 rounded-xl text-[11px] sm:text-sm font-bold hover:bg-orange-50 transition-colors shadow-sm">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> 
              <span>Antrean Online</span>
              <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-500 text-[9px] sm:text-[10px] font-bold text-white">1</span>
            </button>
            
            {/* Tombol Pesanan Baru (Offline) */}
            <button 
              onClick={() => setIsOfflineModalOpen(true)} 
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-blue-600 border-2 border-blue-600 text-white rounded-xl text-[11px] sm:text-sm font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> 
              <span>Pesanan Baru (Offline)</span>
            </button>
            
          </div>
        </div>

        {/* KARTU STATISTIK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0"><AlertCircle className="w-6 h-6" /></div>
            <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Perlu Ditimbang</p><h3 className="text-xl font-extrabold text-slate-800">1</h3></div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0"><Clock className="w-6 h-6" /></div>
            <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Sedang Diproses</p><h3 className="text-xl font-extrabold text-slate-800">12</h3></div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0"><PackageCheck className="w-6 h-6" /></div>
            <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Siap Diambil</p><h3 className="text-xl font-extrabold text-slate-800">5</h3></div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 flex-shrink-0"><ShoppingCart className="w-6 h-6" /></div>
            <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Hari Ini</p><h3 className="text-xl font-extrabold text-slate-800">24</h3></div>
          </div>
        </div>

        {/* AREA TRANSAKSI BERJALAN */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
          <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-lg font-bold text-slate-800">Daftar Transaksi Berjalan</h2>
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Cari nama atau nomor pesanan..." className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            </div>
          </div>

          {/* === TAMPILAN MOBILE (KARTU VERTIKAL) === */}
          <div className="block lg:hidden divide-y divide-gray-100">
            {transactions.map((trx) => (
              <div key={trx.id} className="p-4 space-y-4 hover:bg-slate-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-extrabold text-slate-800 block">{trx.id}</span>
                    <span className="text-xs text-slate-400">{trx.waktu}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-center ${trx.statusPesanan === 'Menunggu Ditimbang' ? 'bg-orange-100 text-orange-700' : trx.statusPesanan === 'Selesai (Siap Ambil)' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-50 text-blue-600'}`}>
                    {trx.statusPesanan}
                  </span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-gray-100 text-sm space-y-2">
                  <div className="flex justify-between"><span className="text-slate-500">Pelanggan</span><span className="font-bold text-slate-700">{trx.pelanggan}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Layanan</span><span className="font-medium text-slate-700">{trx.layanan}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Berat/Qty</span><span className="font-bold text-slate-700">{trx.berat === '-' ? <span className="text-orange-500 text-xs italic">Menunggu</span> : trx.berat}</span></div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-slate-500">Total Harga</span>
                    <div className="text-right">
                      <span className="font-extrabold text-slate-800 block">{formatRupiah(trx.total)}</span>
                      <span className={`inline-block text-[10px] font-bold ${trx.statusBayar === 'Lunas' ? 'text-emerald-600' : trx.statusBayar.includes('DP') ? 'text-blue-600' : 'text-red-500'}`}>{trx.statusBayar}</span>
                    </div>
                  </div>
                </div>

                {/* Tombol Aksi Mobile */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {trx.statusPesanan === 'Menunggu Ditimbang' && (
                    <button onClick={() => setTimbangModalData(trx)} className="flex-1 py-2 bg-orange-500 text-white rounded-lg text-xs font-bold hover:bg-orange-600 shadow-sm">Timbang</button>
                  )}
                  {trx.statusPesanan !== 'Menunggu Ditimbang' && trx.statusBayar !== 'Lunas' && (
                    <button onClick={() => handlePelunasan(trx.id)} className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 shadow-sm">Pelunasan</button>
                  )}
                  {trx.statusPesanan === 'Selesai (Siap Ambil)' && trx.statusBayar === 'Lunas' && (
                    <button onClick={() => handleAmbilBarang(trx.id)} className="flex-1 py-2 bg-emerald-500 text-white rounded-lg text-xs font-bold hover:bg-emerald-600 shadow-sm">Ambil Barang</button>
                  )}
                  {trx.statusPesanan !== 'Menunggu Ditimbang' && (
                    <button onClick={() => handleCetakStruk(trx.id, trx.statusBayar)} className="p-2 border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg shadow-sm" title="Cetak Struk"><Printer className="w-4 h-4" /></button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* === TAMPILAN DESKTOP (TABEL HORIZONTAL) === */}
          <div className="hidden lg:block overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[1100px]">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-100">
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">No. Pesanan</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pelanggan</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Berat/Qty</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total & Status Bayar</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Proses Cucian</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">Aksi Kasir</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((trx) => (
                  <tr key={trx.id} className="hover:bg-slate-50/80 transition-colors border-b border-gray-50 last:border-0">
                    <td className="py-4 px-6">
                      <span className="font-extrabold text-slate-800 block text-sm">{trx.id}</span>
                      <span className="text-xs text-slate-400 font-medium">{trx.waktu}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm font-bold text-slate-700 block">{trx.pelanggan}</span>
                      <span className="text-xs text-slate-500">{trx.layanan}</span>
                    </td>
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
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        {trx.statusPesanan === 'Menunggu Ditimbang' && <button onClick={() => setTimbangModalData(trx)} className="px-4 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-bold hover:bg-orange-600 shadow-sm shadow-orange-500/30">Timbang</button>}
                        {trx.statusPesanan !== 'Menunggu Ditimbang' && trx.statusBayar !== 'Lunas' && <button onClick={() => handlePelunasan(trx.id)} className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 shadow-sm shadow-blue-500/30">Pelunasan</button>}
                        {trx.statusPesanan === 'Selesai (Siap Ambil)' && trx.statusBayar === 'Lunas' && <button onClick={() => handleAmbilBarang(trx.id)} className="px-4 py-1.5 bg-emerald-500 text-white rounded-lg text-xs font-bold hover:bg-emerald-600 shadow-sm shadow-emerald-500/30">Ambil Barang</button>}
                        {trx.statusPesanan !== 'Menunggu Ditimbang' && <button onClick={() => handleCetakStruk(trx.id, trx.statusBayar)} className="p-1.5 text-gray-400 hover:text-slate-700 hover:bg-gray-100 rounded-lg transition-colors" title="Cetak Struk"><Printer className="w-5 h-5" /></button>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ModalPesananOffline isOpen={isOfflineModalOpen} onClose={() => setIsOfflineModalOpen(false)} />
      <ModalTimbangOnline isOpen={!!timbangModalData} dataPesanan={timbangModalData} onClose={() => setTimbangModalData(null)} />
    </>
  );
};

export default DashboardKasirPage;