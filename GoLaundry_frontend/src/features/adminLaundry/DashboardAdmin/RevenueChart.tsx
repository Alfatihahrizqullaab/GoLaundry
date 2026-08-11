import React, { memo } from 'react';

export interface ChartData {
  month: string;
  value: number;
  height: string;
}

interface RevenueChartProps {
  data: ChartData[];
}

export const RevenueChart: React.FC<RevenueChartProps> = memo(({ data }) => {
  return (
    <div className="lg:col-span-2 bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <h3 className="font-bold text-slate-800 mb-6 md:mb-8 text-base md:text-lg">Pertumbuhan Pendapatan Langganan (Juta Rp)</h3>
      
      {/* Wrapper untuk overflow jika di layar sangat kecil */}
      <div className="w-full overflow-x-auto custom-scrollbar pb-2">
        <div className="min-w-[400px] h-56 md:h-64 flex items-end justify-between gap-2 relative border-l border-b border-gray-100 pb-2 pl-4 md:pl-6 ml-4">
          
          {/* Garis Y-Axis Markers */}
          <div className="absolute left-0 bottom-0 w-full h-full flex flex-col justify-between pb-2 text-[9px] md:text-[10px] font-medium text-slate-400 -ml-6 md:-ml-8">
            <span className="text-right w-5 md:w-6">120</span>
            <span className="text-right w-5 md:w-6">90</span>
            <span className="text-right w-5 md:w-6">60</span>
            <span className="text-right w-5 md:w-6">30</span>
            <span className="text-right w-5 md:w-6">0</span>
          </div>
          
          {/* Garis Dashed horizontal */}
          <div className="absolute left-2 md:left-4 bottom-0 w-full h-full flex flex-col justify-between pb-2 pointer-events-none">
            <div className="border-t border-dashed border-gray-200 w-full"></div>
            <div className="border-t border-dashed border-gray-200 w-full"></div>
            <div className="border-t border-dashed border-gray-200 w-full"></div>
            <div className="border-t border-dashed border-gray-200 w-full"></div>
            <div className="border-t border-transparent w-full"></div>
          </div>

          {/* Bars Dinamis */}
          {data.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center w-full z-10 group cursor-pointer">
              {/* Tooltip Hover */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-slate-800 text-white text-[10px] md:text-xs font-bold py-1 px-2 rounded-lg transition-opacity pointer-events-none whitespace-nowrap">
                Rp {item.value} Juta
              </div>
              
              <div 
                className="w-3/5 md:w-1/2 max-w-[40px] bg-blue-600 rounded-t-md transition-all duration-500 hover:bg-blue-700 hover:scale-105 origin-bottom" 
                style={{ height: item.height }}
              ></div>
              <span className="absolute -bottom-6 text-[10px] md:text-xs font-medium text-slate-500">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-6 md:h-8"></div> {/* Spacer labels X-Axis */}
    </div>
  );
});