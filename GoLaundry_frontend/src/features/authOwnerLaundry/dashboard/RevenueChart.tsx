import React from 'react';

export const RevenueChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-900 text-base">Pendapatan Mingguan</h3>
        <select className="bg-slate-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-none">
          <option>Minggu Ini</option>
          <option>Bulan Ini</option>
        </select>
      </div>

      {/* SVG Wave Area Chart Mockup */}
      <div className="relative h-64 w-full">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[11px] font-medium text-gray-400">
          <span>1000k</span>
          <span>p750k</span>
          <span>p500k</span>
          <span>p250k</span>
        </div>

        {/* Chart Graphic Area */}
        <div className="pl-12 h-full w-full">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            <line x1="0" y1="0" x2="500" y2="0" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="0" y1="66" x2="500" y2="66" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="0" y1="133" x2="500" y2="133" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="0" y1="200" x2="500" y2="200" stroke="#f1f5f9" strokeWidth="1" />

            {/* Area Fill */}
            <path
              d="M 0 150 Q 80 200 150 130 T 300 120 T 450 50 L 500 60 L 500 200 L 0 200 Z"
              fill="url(#blueGradient)"
            />

            {/* Line Path */}
            <path
              d="M 0 150 Q 80 200 150 130 T 300 120 T 450 50 L 500 60"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};