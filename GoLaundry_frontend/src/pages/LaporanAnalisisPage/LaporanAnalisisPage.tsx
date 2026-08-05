import React, { useState } from 'react';

import { 
  Calendar, 
  TrendingUp, 
  TrendingDown, 
  Lightbulb, 
  BarChart3, 
  Target,
  ArrowRight,
  Package,
  Users
} from 'lucide-react';

import { DashboardLayout } from '../../components/layout/ownerComponent/DashboardLayout';

export const LaporanAnalisisPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ringkasan' | 'analisis'>('ringkasan');
  const [dateRange, setDateRange] = useState('Bulan Ini');

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  return (
    <DashboardLayout title="Laporan & Analisis">
      <div className="w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Laporan & Analisis Bisnis</h2>
            <p className="text-sm text-slate-500 mt-1">Pantau performa laundry Anda dan dapatkan rekomendasi cerdas.</p>
          </div>
          
          {/* Date Filter */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
            <Calendar className="w-4 h-4 text-gray-500" />
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-transparent text-sm font-semibold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="Bulan Ini">Bulan Ini (Agustus 2026)</option>
              <option value="Bulan Lalu">Bulan Lalu (Juli 2026)</option>
              <option value="Tahun Ini">Tahun Ini (2026)</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden mb-8">
          
          {/* TAB NAVIGATION */}
          <div className="flex border-b border-gray-100 px-2 sm:px-6">
            <button 
              onClick={() => setActiveTab('ringkasan')}
              className={`flex items-center gap-2 py-4 px-4 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'ringkasan' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BarChart3 className="w-4 h-4" /> 
              Ringkasan Data
            </button>
            <button 
              onClick={() => setActiveTab('analisis')}
              className={`flex items-center gap-2 py-4 px-4 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'analisis' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Lightbulb className="w-4 h-4" /> 
              Rencana & Rekomendasi
            </button>
          </div>

          {/* TAB 1: RINGKASAN DATA */}
          {activeTab === 'ringkasan' && (
            <div className="p-6 animate-in fade-in duration-300">
              
              {/* Statistic Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-5 rounded-2xl border border-gray-100 bg-slate-50">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-lg">
                      <TrendingUp className="w-3 h-3" /> +12.5%
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Total Pendapatan</p>
                  <h3 className="text-2xl font-bold text-slate-800">{formatRupiah(15450000)}</h3>
                </div>

                <div className="p-5 rounded-2xl border border-gray-100 bg-slate-50">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                      <Package className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-lg">
                      <TrendingUp className="w-3 h-3" /> +5.2%
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Total Pesanan Selesai</p>
                  <h3 className="text-2xl font-bold text-slate-800">342 <span className="text-sm font-medium text-slate-500">transaksi</span></h3>
                </div>

                <div className="p-5 rounded-2xl border border-gray-100 bg-slate-50">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-lg">
                      <TrendingDown className="w-3 h-3" /> -2.1%
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Pelanggan Baru</p>
                  <h3 className="text-2xl font-bold text-slate-800">45 <span className="text-sm font-medium text-slate-500">orang</span></h3>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="w-full h-72 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-400 mb-8">
                <BarChart3 className="w-12 h-12 mb-3 opacity-50" />
                <p className="font-medium">Area Grafik Pendapatan</p>
                <p className="text-xs mt-1">Gunakan library seperti Recharts untuk menampilkan grafik di sini.</p>
              </div>
            </div>
          )}

          {/* TAB 2: RENCANA & REKOMENDASI (ACTIONABLE INSIGHTS) */}
          {activeTab === 'analisis' && (
            <div className="p-6 animate-in fade-in duration-300 bg-slate-50/50">
              <div className="max-w-4xl space-y-6">
                
                {/* Insight Card 1: Positive */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex-shrink-0 flex items-center justify-center mt-1">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-1">Lonjakan Permintaan Cuci Express</h4>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        Data menunjukkan layanan <b>Cuci Express (24 Jam)</b> menyumbang 45% dari total pendapatan bulan ini, meningkat drastis dibandingkan bulan lalu.
                      </p>
                      <div className="bg-slate-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-blue-600" />
                          <span className="font-bold text-sm text-slate-800">Rencana Tindakan:</span>
                        </div>
                        <ul className="text-sm text-slate-600 space-y-2 ml-6 list-disc marker:text-blue-600">
                          <li>Pertimbangkan untuk menambah shift karyawan setrika di malam hari agar kapasitas express meningkat.</li>
                          <li>Naikkan harga Cuci Express sebesar Rp 1.000/kg bulan depan untuk memaksimalkan margin keuntungan.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insight Card 2: Warning/Improvement */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex-shrink-0 flex items-center justify-center mt-1">
                      <TrendingDown className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-1">Penurunan Order Layanan Bed Cover</h4>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        Pesanan cuci Bed Cover turun 15% sejak awal bulan. Ini mungkin karena pergantian musim atau kurangnya promosi.
                      </p>
                      <div className="bg-slate-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-4 h-4 text-orange-500" />
                          <span className="font-bold text-sm text-slate-800">Ide Strategi:</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <p className="text-sm text-slate-600 flex-1">
                            Buat paket promo *Bundling*: "Cuci 2 Bed Cover, Gratis Cuci 1 Selimut" khusus untuk akhir pekan ini.
                          </p>
                          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 hover:bg-orange-200 rounded-lg text-xs font-bold transition-colors whitespace-nowrap">
                            Buat Promo Sekarang <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </DashboardLayout>
  );
};

export default LaporanAnalisisPage;