import React from 'react';
import { TrendingUp, Activity, Clock, Users } from 'lucide-react';

import { SubscriptionAlert } from '../../../features/authOwnerLaundry/dashboard/SubscriptionAlert';
import { StatCard } from '../../../features/authOwnerLaundry/dashboard/StatCard';
import { RevenueChart } from '../../../features/authOwnerLaundry/dashboard/RevenueChart';
import { PopularServices } from '../../../features/authOwnerLaundry/dashboard/PopularServices';

export const DashboardPage: React.FC = () => {
  return (
    <>
      {/* 1. Subscription Alert Banner */}
      <SubscriptionAlert />

      {/* 2. Grid Stat Cards (4 Columns Responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Pendapatan Hari Ini"
          value="Rp 1.250.000"
          badge="+15%"
          icon={TrendingUp}
          iconBgColor="bg-blue-50"
          iconColor="text-blue-600"
        />
        <StatCard
          title="Transaksi Hari Ini"
          value="42"
          badge="+8%"
          icon={Activity}
          iconBgColor="bg-emerald-50"
          iconColor="text-emerald-500"
        />
        <StatCard
          title="Sedang Diproses"
          value="18"
          icon={Clock}
          iconBgColor="bg-orange-50"
          iconColor="text-orange-500"
        />
        <StatCard
          title="Total Customer"
          value="1,245"
          badge="+2%"
          icon={Users}
          iconBgColor="bg-purple-50"
          iconColor="text-purple-600"
        />
      </div>

      {/* 3. Section Charts & Services List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <PopularServices />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;