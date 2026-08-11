import React, { memo } from 'react';

export const VerificationList: React.FC = memo(() => {
  return (
    <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
      <div className="flex justify-between items-center mb-5 md:mb-6">
        <h3 className="font-bold text-slate-800 text-base md:text-lg">Menunggu Verifikasi</h3>
        <span className="bg-red-50 text-red-600 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-red-100">
          3 Toko
        </span>
      </div>

      <div className="space-y-4 flex-1">
        {/* Item 1 */}
        <div className="pb-4 border-b border-gray-50 flex justify-between items-center group cursor-pointer">
          <div>
            <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">Klin Wash</h4>
            <p className="text-[11px] md:text-xs text-slate-500 mt-1">Owner: Ahmad D. • Hari ini</p>
          </div>
          <button className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Cek</button>
        </div>
        
        {/* Item 2 */}
        <div className="pb-4 border-b border-gray-50 flex justify-between items-center group cursor-pointer">
          <div>
            <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">Tirta Bersih</h4>
            <p className="text-[11px] md:text-xs text-slate-500 mt-1">Owner: Susi S. • Kemarin</p>
          </div>
          <button className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Cek</button>
        </div>
        
        {/* Item 3 */}
        <div className="pb-4 border-b border-gray-50 flex justify-between items-center group cursor-pointer">
          <div>
            <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">Wangi Laundry</h4>
            <p className="text-[11px] md:text-xs text-slate-500 mt-1">Owner: Budi W. • 2 hari lalu</p>
          </div>
          <button className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Cek</button>
        </div>
      </div>

      <button className="w-full py-2.5 md:py-3 mt-4 text-xs md:text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors border border-transparent hover:border-blue-100">
        Lihat Semua Antrean
      </button>
    </div>
  );
});