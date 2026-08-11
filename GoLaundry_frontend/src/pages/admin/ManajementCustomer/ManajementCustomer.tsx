import React, { useState, useCallback, useMemo } from 'react';
import { CustomerToolbar } from '../../../features/adminLaundry/ManajemenCustomer/Toolbar';
import { CustomerTable, type CustomerData } from '../../../features/adminLaundry/ManajemenCustomer/Table';

export const ManajemenCustomerPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  // State untuk Filter & Search
  const [roleFilter, setRoleFilter] = useState('Semua Role');
  const [statusFilter, setStatusFilter] = useState('Semua Status');
  const [searchQuery, setSearchQuery] = useState('');

  // Data Dummy Pengguna
  const [userList, setUserList] = useState<CustomerData[]>([
    { id: 'OWN-001', nama: 'Budi Santoso', email: 'budi@laundry.com', kontak: '0812345678', role: 'Owner', tanggal: '10 Jan 2024', status: 'Aktif' },
    { id: 'CUST-001', nama: 'Siti Aminah', email: 'siti@gmail.com', kontak: '08511223344', role: 'Customer', tanggal: '12 Jan 2024', status: 'Aktif' },
    { id: 'OWN-002', nama: 'Ahmad D', email: 'ahmad@klinwash.com', kontak: '0856789012', role: 'Owner', tanggal: '15 Jan 2024', status: 'Suspend' },
    { id: 'CUST-002', nama: 'Andi Wijaya', email: 'andi.w@yahoo.com', kontak: '0898765432', role: 'Customer', tanggal: '20 Jan 2024', status: 'Aktif' },
  ]);

  // GUNAKAN useCallback untuk mengunci fungsi aksi
  const handleAksi = useCallback((id: string, aksi: string) => {
    const konfirmasi = window.confirm(`Apakah Anda yakin ingin melakukan aksi "${aksi}" pada pengguna ${id}?`);
    
    if (konfirmasi) {
      if (aksi === 'Suspend') {
        setUserList(prev => prev.map(user => user.id === id ? { ...user, status: 'Suspend' } : user));
      } else if (aksi === 'Aktifkan') {
        setUserList(prev => prev.map(user => user.id === id ? { ...user, status: 'Aktif' } : user));
      } else {
        alert(`Membuka halaman detail untuk ${id}`);
      }
    }
  }, []);

  // GUNAKAN useMemo untuk filter performa tinggi
  const filteredUsers = useMemo(() => {
    return userList.filter((user) => {
      const matchRole = roleFilter === 'Semua Role' || user.role === roleFilter;
      const matchStatus = statusFilter === 'Semua Status' || user.status === statusFilter;
      const matchSearch = user.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.kontak.includes(searchQuery);
      return matchRole && matchStatus && matchSearch;
    });
  }, [userList, roleFilter, statusFilter, searchQuery]); 

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">Manajemen Owner & Customer</h2>
        <p className="text-xs md:text-sm text-slate-500 mt-1">Kelola data pemilik toko dan pelanggan aplikasi</p>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <CustomerToolbar 
          roleFilter={roleFilter}
          setRoleFilter={setRoleFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <CustomerTable 
          data={filteredUsers} 
          onAction={handleAksi} 
        />
      </div>
    </div>
  );
};

export default ManajemenCustomerPage;