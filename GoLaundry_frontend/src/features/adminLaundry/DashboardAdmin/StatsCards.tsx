import React, { memo } from 'react';
import { Store, Activity, CreditCard, TrendingUp } from 'lucide-react';

// Dibungkus memo agar tidak re-render jika tidak perlu
export const StatsCards: React.FC = memo(() => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      
      {/* Card 1 */}
      <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
            <Store className="w-6 h-6" />
          </div>
          <span className="text-[11px] md:text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">+120 bln ini</span>
        </div>
        <div>
          <p className="text-xs md:text-sm font-medium text-slate-500 mb-1">Total Toko Terdaftar</p>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">1,248</h3>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center shrink-0">
            <Activity className="w-6 h-6" />
          </div>
          <span className="text-[11px] md:text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">88% dari total</span>
        </div>
        <div>
          <p className="text-xs md:text-sm font-medium text-slate-500 mb-1">Toko Aktif</p>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">1,102</h3>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center shrink-0">
            <CreditCard className="w-6 h-6" />
          </div>
          <span className="text-[11px] md:text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">+45 bln ini</span>
        </div>
        <div>
          <p className="text-xs md:text-sm font-medium text-slate-500 mb-1">Owner Premium</p>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">456</h3>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <span className="text-[11px] md:text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">+15% bln ini</span>
        </div>
        <div>
          <p className="text-xs md:text-sm font-medium text-slate-500 mb-1">Total Pendapatan (MRR)</p>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Rp 125JT</h3>
        </div>
      </div>

    </div>
  );
});