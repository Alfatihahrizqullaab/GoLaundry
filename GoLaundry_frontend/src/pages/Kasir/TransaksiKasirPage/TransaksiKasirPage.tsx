import React, { useState } from 'react';
import { Search, Printer, Calendar, Filter, DollarSign, Wallet, CreditCard, FileText, Eye } from 'lucide-react';

export const TransaksiKasirPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  const [historyTransactions] = useState([
    { id: '#ORD-99230', tanggal: '05 Agustus 2026, 14:20', pelanggan: 'Bapak Joko', layanan: 'Cuci Komplit', metode: 'Tunai', total: 45000, statusBayar: 'Lunas', statusPesanan: 'Sudah Diambil' },
    { id: '#ORD-99229', tanggal: '05 Agustus 2026, 13:10', pelanggan: 'Ibu Sarah', layanan: 'Bed Cover', metode: 'QRIS', total: 90000, statusBayar: 'Lunas', statusPesanan: 'Sudah Diambil' },
    { id: '#ORD-99228', tanggal: '05 Agustus 2026, 10:05', pelanggan: 'Dina (Kos)', layanan: 'Setrika Saja', metode: 'Tunai', total: 25000, statusBayar: 'Lunas', statusPesanan: 'Sudah Diambil' },
  ]);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  return (
    <div className="w-full relative pb-10">
      
      {/* HEADER - Responsif */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Riwayat Transaksi</h1>
          <p className="text-sm text-slate-500 mt-1">Rekapitulasi pesanan selesai dan setoran shift kasir</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm">
            <Calendar className="w-4 h-4 text-slate-400" /> Hari Ini
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2 bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-slate-900 transition-colors shadow-md">
            <Printer className="w-4 h-4" /> Cetak Rekap Shift
          </button>
        </div>
      </div>

      {/* KARTU REKAP PENDAPATAN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-5 rounded-2xl shadow-md text-white">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-blue-100">Total Pemasukan</p>
            <div className="p-1.5 bg-white/20 rounded-lg"><DollarSign className="w-4 h-4 text-white" /></div>
          </div>
          <h3 className="text-2xl font-extrabold">Rp 255.000</h3>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0"><Wallet className="w-5 h-5" /></div>
          <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Uang Tunai</p><h3 className="text-lg font-extrabold text-slate-800">Rp 105.000</h3></div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 flex-shrink-0"><CreditCard className="w-5 h-5" /></div>
          <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Non-Tunai (QRIS)</p><h3 className="text-lg font-extrabold text-slate-800">Rp 150.000</h3></div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0"><FileText className="w-5 h-5" /></div>
          <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pesanan Selesai</p><h3 className="text-lg font-extrabold text-slate-800">5 <span className="text-xs font-medium text-slate-500 normal-case">trx</span></h3></div>
        </div>
      </div>

      {/* AREA ARSIP TRANSAKSI */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
        
        {/* Toolbar Pencarian & Filter */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/30">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Cari no. struk atau nama..." className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <select className="flex-1 md:flex-none px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
              <option>Semua Bayar</option>
              <option>Tunai</option>
              <option>QRIS</option>
            </select>
            <button className="p-2.5 bg-white border border-gray-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* === TAMPILAN MOBILE (KARTU VERTIKAL) === */}
        <div className="block lg:hidden divide-y divide-gray-100">
          {historyTransactions.map((trx) => (
            <div key={trx.id} className="p-4 space-y-3 hover:bg-slate-50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-extrabold text-slate-800 block">{trx.id}</span>
                  <span className="text-xs text-slate-400">{trx.tanggal}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200">
                  {trx.statusPesanan}
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-gray-100 text-sm space-y-2">
                <div className="flex justify-between"><span className="text-slate-500">Pelanggan</span><span className="font-bold text-slate-700">{trx.pelanggan}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Layanan</span><span className="font-medium text-slate-700">{trx.layanan}</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-500">Metode</span><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${trx.metode === 'Tunai' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>{trx.metode}</span></div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-bold text-slate-800">Total Dibayar</span>
                  <span className="font-extrabold text-blue-700">{formatRupiah(trx.total)}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button className="flex-1 py-2 flex items-center justify-center gap-2 border border-gray-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-gray-50 shadow-sm"><Eye className="w-4 h-4" /> Detail</button>
                <button className="flex-1 py-2 flex items-center justify-center gap-2 border border-gray-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-gray-50 shadow-sm"><Printer className="w-4 h-4" /> Cetak</button>
              </div>
            </div>
          ))}
        </div>

        {/* === TAMPILAN DESKTOP (TABEL HORIZONTAL) === */}
        <div className="hidden lg:block overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-100">
                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tanggal & No. Pesanan</th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pelanggan</th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Layanan & Metode</th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Harga</th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {historyTransactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-slate-50/80 transition-colors border-b border-gray-50 last:border-0">
                  <td className="py-4 px-6"><span className="font-extrabold text-slate-800 block text-sm">{trx.id}</span><span className="text-xs text-slate-500 font-medium">{trx.tanggal}</span></td>
                  <td className="py-4 px-6 text-sm font-bold text-slate-700">{trx.pelanggan}</td>
                  <td className="py-4 px-6"><span className="text-sm text-slate-600 block mb-1">{trx.layanan}</span><span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${trx.metode === 'Tunai' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>{trx.metode}</span></td>
                  <td className="py-4 px-6 text-sm font-extrabold text-slate-800">{formatRupiah(trx.total)}</td>
                  <td className="py-4 px-6"><span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-500 border border-slate-200">{trx.statusPesanan}</span></td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Lihat Detail"><Eye className="w-5 h-5" /></button>
                      <button className="p-1.5 text-gray-400 hover:text-slate-700 hover:bg-gray-100 rounded-lg transition-colors" title="Cetak Ulang Struk"><Printer className="w-5 h-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransaksiKasirPage;