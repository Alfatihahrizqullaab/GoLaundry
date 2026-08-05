import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/ownerComponent/DashboardLayout';
import { Search, Filter, CheckCircle2 } from 'lucide-react';

export const RiwayatTransaksiPage: React.FC = () => {
  // Hanya berisi data yang sudah lunas
  const [transactions] = useState([
    {
      idPembayaran: 'PAY-10044',
      idPemesananPaketLangganan: 'ORD-89233',
      namaPaket: 'Pro',
      tanggalPembayaran: '04 Jul 2026, 09:15',
      metodePembayaran: 'DANA',
      statusPembayaran: 'Berhasil',
      nominalPembayaran: 99000,
    },
    {
      idPembayaran: 'PAY-10043',
      idPemesananPaketLangganan: 'ORD-89232',
      namaPaket: 'Basic',
      tanggalPembayaran: '04 Jun 2026, 10:00',
      metodePembayaran: 'Bank BRI',
      statusPembayaran: 'Berhasil',
      nominalPembayaran: 0,
    }
  ]);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  return (
    <DashboardLayout title="Riwayat Transaksi">
      <div className="w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Catatan Pembayaran</h2>
            <p className="text-sm text-slate-500 mt-1">Histori transaksi paket langganan yang sudah selesai.</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Cari ID Pembayaran..." className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50/50 border-b border-gray-100">
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">ID Pembayaran</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Paket & Pesanan</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Tanggal Lunas</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Metode</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Nominal</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((trx) => (
                  <tr key={trx.idPembayaran} className="hover:bg-slate-50/80 transition-colors border-b border-gray-50 last:border-0">
                    <td className="py-4 px-6 font-bold text-slate-800 text-sm">{trx.idPembayaran}</td>
                    
                    <td className="py-4 px-6">
                      <span className="font-semibold text-blue-600 block text-sm">{trx.namaPaket}</span>
                      <span className="text-xs text-slate-500">Ord: {trx.idPemesananPaketLangganan}</span>
                    </td>

                    <td className="py-4 px-6 text-sm text-slate-600 font-medium">{trx.tanggalPembayaran}</td>
                    
                    <td className="py-4 px-6 text-sm text-slate-600 font-medium">{trx.metodePembayaran}</td>

                    <td className="py-4 px-6 text-sm font-bold text-slate-800">{formatRupiah(trx.nominalPembayaran)}</td>

                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {trx.statusPembayaran}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default RiwayatTransaksiPage;