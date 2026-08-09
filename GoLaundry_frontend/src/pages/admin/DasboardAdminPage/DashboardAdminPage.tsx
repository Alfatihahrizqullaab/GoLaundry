import React, { useState } from 'react';
import { Store, Activity, CreditCard, TrendingUp } from 'lucide-react';

export const DashboardAdminPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  // Data Dummy untuk Chart Pendapatan Langganan
  const chartData = [
    { month: 'Jan', value: 15, height: '12%' },
    { month: 'Feb', value: 25, height: '20%' },
    { month: 'Mar', value: 40, height: '33%' },
    { month: 'Apr', value: 55, height: '45%' },
    { month: 'Mei', value: 80, height: '66%' },
    { month: 'Jun', value: 120, height: '100%' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      
      {/* 4 KARTU STATISTIK ATAS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
              <Store className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-slate-500">+120 bln ini</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Total Toko Terdaftar</p>
            <h3 className="text-3xl font-bold text-slate-800">1,248</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-slate-500">88% dari total</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Toko Aktif</p>
            <h3 className="text-3xl font-bold text-slate-800">1,102</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-slate-500">+45 bln ini</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Owner Premium</p>
            <h3 className="text-3xl font-bold text-slate-800">456</h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-slate-500">+15% bln ini</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Total Pendapatan (MRR)</p>
            <h3 className="text-3xl font-bold text-slate-800">Rp 125JT</h3>
          </div>
        </div>

      </div>

      {/* AREA BAWAH: CHART & LIST VERIFIKASI */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* BAGIAN KIRI: Bar Chart Pendapatan */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-8 text-lg">Pertumbuhan Pendapatan Langganan (Juta Rp)</h3>
          
          {/* Custom CSS Bar Chart */}
          <div className="h-64 flex items-end justify-between gap-2 relative border-l border-b border-gray-100 pb-2 pl-4">
            
            {/* Garis Y-Axis Markers */}
            <div className="absolute left-0 bottom-0 w-full h-full flex flex-col justify-between pb-2 text-[10px] text-slate-400 -ml-6">
              <span className="text-right w-4">120</span>
              <span className="text-right w-4">90</span>
              <span className="text-right w-4">60</span>
              <span className="text-right w-4">30</span>
              <span className="text-right w-4">0</span>
            </div>
            <div className="absolute left-2 bottom-0 w-full h-full flex flex-col justify-between pb-2 pointer-events-none">
              <div className="border-t border-dashed border-gray-200 w-full"></div>
              <div className="border-t border-dashed border-gray-200 w-full"></div>
              <div className="border-t border-dashed border-gray-200 w-full"></div>
              <div className="border-t border-dashed border-gray-200 w-full"></div>
              <div className="border-t border-transparent w-full"></div>
            </div>

            {/* Bars */}
            {chartData.map((data, index) => (
              <div key={index} className="relative flex flex-col items-center w-full z-10 group">
                <div 
                  className="w-4/5 md:w-3/5 bg-blue-600 rounded-t-sm transition-all duration-500 hover:bg-blue-700" 
                  style={{ height: data.height }}
                ></div>
                <span className="absolute -bottom-6 text-xs text-slate-500">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="h-6"></div> {/* Spacer for x-axis labels */}
        </div>

        {/* BAGIAN KANAN: List Menunggu Verifikasi */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800 text-lg">Menunggu Verifikasi</h3>
            <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full">3 Toko</span>
          </div>

          <div className="space-y-4 flex-1">
            {/* Item 1 */}
            <div className="pb-4 border-b border-gray-50">
              <h4 className="font-bold text-slate-800 text-sm">Klin Wash</h4>
              <p className="text-xs text-slate-500 mt-1">Owner: Ahmad D. • Hari ini</p>
            </div>
            {/* Item 2 */}
            <div className="pb-4 border-b border-gray-50">
              <h4 className="font-bold text-slate-800 text-sm">Tirta Bersih</h4>
              <p className="text-xs text-slate-500 mt-1">Owner: Susi S. • Kemarin</p>
            </div>
            {/* Item 3 */}
            <div className="pb-4 border-b border-gray-50">
              <h4 className="font-bold text-slate-800 text-sm">Wangi Laundry</h4>
              <p className="text-xs text-slate-500 mt-1">Owner: Budi W. • 2 hari lalu</p>
            </div>
          </div>

          <button className="w-full py-3 mt-4 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
            Lihat Semua
          </button>
        </div>

      </div>
    </div>
  );
};

export default DashboardAdminPage;