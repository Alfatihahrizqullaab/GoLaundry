import React from 'react';
import { Clock } from 'lucide-react';

export const SubscriptionAlert: React.FC = () => {
  return (
    <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start sm:items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-amber-900 text-sm sm:text-base">
            Masa Aktif Paket Premium Akan Berakhir
          </h3>
          <p className="text-amber-700 text-xs sm:text-sm mt-0.5">
            Paket Anda akan berakhir dalam 5 hari. Perpanjang sekarang agar tidak kehilangan fitur eksklusif.
          </p>
        </div>
      </div>

      <button className="w-full sm:w-auto px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-orange-600/20 shrink-0">
        Perpanjang Paket
      </button>
    </div>
  );
};