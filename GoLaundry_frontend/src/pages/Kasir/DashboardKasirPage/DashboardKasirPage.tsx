import React, { useState } from 'react';
import { ShoppingCart, Clock, Store, CheckCircle, Search, Printer, Plus } from 'lucide-react';

export const DashboardKasirPage: React.FC = () => {
  // Aturan paten: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  const [transactions] = useState([
    { id: '#ORD-99238', waktu: 'Hari ini, 10:30', pelanggan: 'Budi Santoso', layanan: 'Cuci Reguler', tipe: 'Offline', total: 45000, status: 'Belum Lunas' },
    { id: '#ORD-99239', waktu: 'Hari ini, 09:15', pelanggan: 'Siti Aminah', layanan: 'Cuci Express', tipe: 'Online', total: 60000, status: 'Lunas' },
    { id: '#ORD-99240', waktu: 'Kemarin, 16:45', pelanggan: 'Andi Wijaya', layanan: 'Setrika Saja', tipe: 'Online', total: 25000, status: 'Lunas' },
    { id: '#ORD-99241', waktu: 'Kemarin, 14:20', pelanggan: 'Rina Melati', layanan: 'Bed Cover', tipe: 'Offline', total: 80000, status: 'Belum Lunas' },
  ]);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  return (
    <>
      <div className="w-full">
        {/* HEADER & TOMBOL PEMESANAN */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Dashboard Kasir</h1>
            <p className="text-sm text-slate-500 mt-1">Kelola transaksi dan pembayaran pelanggan</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-sm">
              <Plus className="w-5 h-5" /> Pesanan Online
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">
              <ShoppingCart className="w-5 h-5" /> Pesanan Offline
            </button>
          </div>
        </div>

        {/* KARTU STATISTIK */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-1">Pesanan Hari Ini</p>
              <h3 className="text-3xl font-extrabold text-slate-800">24</h3>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-1">Pesanan Online</p>
              <h3 className="text-3xl font-extrabold text-slate-800">16</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-1">Pesanan Offline</p>
              <h3 className="text-3xl font-extrabold text-slate-800">8</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-1">Transaksi Selesai</p>
              <h3 className="text-3xl font-extrabold text-slate-800">18</h3>
            </div>
          </div>
        </div>

        {/* AREA TABEL TRANSAKSI */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-slate-800">Daftar Transaksi</h2>
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Cari nama atau nomor pesanan..." 
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-100">
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">No. Pesanan</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pelanggan</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Layanan</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tipe</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total</th>
                  <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
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
                    <td className="py-4 px-6 text-sm text-slate-500 font-medium">{trx.layanan}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-md text-xs font-bold ${
                        trx.tipe === 'Offline' ? 'bg-orange-100 text-orange-700' : 'bg-purple-100 text-purple-700'
                      }`}>
                        {trx.tipe}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm font-extrabold text-slate-800">{formatRupiah(trx.total)}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        trx.status === 'Lunas' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {trx.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        {trx.status === 'Belum Lunas' && (
                          <button className="px-4 py-1.5 bg-[#1a56ff] text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors">
                            Bayar
                          </button>
                        )}
                        <button className="p-1.5 text-gray-400 hover:text-slate-700 hover:bg-gray-100 rounded-lg transition-colors">
                          <Printer className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardKasirPage;