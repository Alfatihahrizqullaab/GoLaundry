import React from 'react';

interface ServiceItem {
  id: string;
  name: string;
  orders: number;
  percentage: number;
  colorClass: string;
}

export const PopularServices: React.FC = () => {
  const services: ServiceItem[] = [
    { id: '1', name: 'Cuci Reguler', orders: 150, percentage: 85, colorClass: 'bg-blue-600' },
    { id: '2', name: 'Cuci Express', orders: 90, percentage: 55, colorClass: 'bg-emerald-500' },
    { id: '3', name: 'Setrika Saja', orders: 60, percentage: 38, colorClass: 'bg-orange-500' },
    { id: '4', name: 'Bed Cover', orders: 45, percentage: 28, colorClass: 'bg-purple-600' },
    { id: '5', name: 'Dry Cleaning', orders: 30, percentage: 20, colorClass: 'bg-indigo-600' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 text-base mb-6">Layanan Terpopuler</h3>

      <div className="space-y-5">
        {services.map((item) => (
          <div key={item.id} className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-gray-800">{item.name}</span>
              <span className="font-semibold text-gray-500 text-xs">{item.orders} order</span>
            </div>

            {/* Progress Bar Background & Active Bar */}
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${item.colorClass}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};