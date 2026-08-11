import React, { useState } from 'react';
import { StatsCards } from '../../../features/adminLaundry/DashboardAdmin/StatsCards';
import { RevenueChart, type ChartData } from '../../../features/adminLaundry/DashboardAdmin/RevenueChart';
import { VerificationList } from '../../../features/adminLaundry/DashboardAdmin/VerificationList';

export const DashboardAdminPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  // Data Dummy untuk Chart Pendapatan Langganan (State ditaruh di parent)
  const [chartData] = useState<ChartData[]>([
    { month: 'Jan', value: 15, height: '12%' },
    { month: 'Feb', value: 25, height: '20%' },
    { month: 'Mar', value: 40, height: '33%' },
    { month: 'Apr', value: 55, height: '45%' },
    { month: 'Mei', value: 80, height: '66%' },
    { month: 'Jun', value: 120, height: '100%' },
  ]);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-4 md:space-y-6 pb-6">
      
      {/* 4 KARTU STATISTIK ATAS */}
      <StatsCards />

      {/* AREA BAWAH: CHART & LIST VERIFIKASI */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Bar Chart mengambil 2 kolom di layar besar */}
        <RevenueChart data={chartData} />
        
        {/* List Verifikasi mengambil 1 kolom sisa */}
        <VerificationList />
      </div>

    </div>
  );
};

export default DashboardAdminPage;