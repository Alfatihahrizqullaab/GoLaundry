import React, { memo } from 'react';
import { Search } from 'lucide-react';

interface CustomerToolbarProps {
  roleFilter: string;
  setRoleFilter: (val: string) => void;
  statusFilter: string;
  setStatusFilter: (val: string) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

// Dibungkus React.memo agar tidak ikut render saat tabel berubah
export const CustomerToolbar: React.FC<CustomerToolbarProps> = memo(({
  roleFilter,
  setRoleFilter,
  statusFilter,
  setStatusFilter,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 items-start md:items-center bg-slate-50/30">
      
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        {/* Dropdown Role */}
        <div className="relative w-full sm:w-40">
          <select 
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer"
          >
            <option value="Semua Role">Semua Role</option>
            <option value="Owner">Owner</option>
            <option value="Customer">Customer</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Dropdown Status */}
        <div className="relative w-full sm:w-48">
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer"
          >
            <option value="Semua Status">Semua Status</option>
            <option value="Aktif">Aktif</option>
            <option value="Suspend">Suspend</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="relative w-full md:flex-1 max-w-md">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input 
          type="text" 
          placeholder="Cari nama, email, atau kontak..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
        />
      </div>
    </div>
  );
});