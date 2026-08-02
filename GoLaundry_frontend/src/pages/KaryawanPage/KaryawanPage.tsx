import React, { useState } from 'react';
import { Plus, Edit, Trash2, User } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/ownerComponent/DashboardLayout';

// Tipe data untuk Karyawan
interface Employee {
  id: string;
  name: string;
  photoUrl: string | null; // URL foto, null jika belum ada foto
  position: string;
  phone: string;
  status: 'Aktif' | 'Cuti';
}

export const KaryawanPage: React.FC = () => {
  // Data dummy karyawan (sudah ditambahkan properti foto)
  const [employees] = useState<Employee[]>([
    {
      id: '1',
      name: 'Agus Subandono',
      photoUrl: 'https://ui-avatars.com/api/?name=Agus+Subandono&background=eff6ff&color=2563eb',
      position: 'Kasir',
      phone: '0812-xxxx-xxxx',
      status: 'Aktif'
    },
    {
      id: '2',
      name: 'Siti Rahmawati',
      photoUrl: 'https://ui-avatars.com/api/?name=Siti+Rahmawati&background=eff6ff&color=2563eb',
      position: 'Karyawan Produksi',
      phone: '0813-xxxx-xxxx',
      status: 'Aktif'
    },
    {
      id: '3',
      name: 'Joko Anwar',
      photoUrl: 'https://ui-avatars.com/api/?name=Joko+Anwar&background=fff7ed&color=ea580c',
      position: 'Kurir',
      phone: '0857-xxxx-xxxx',
      status: 'Cuti'
    }
  ]);

  return (
    // Mengatur title Navbar menjadi "Karyawan"
    <DashboardLayout title="Karyawan">
      <div className="w-full">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
          
          {/* Header Card: Judul & Tombol Tambah */}
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-slate-800">Daftar Karyawan</h2>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1a56ff] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 w-full sm:w-auto justify-center">
              <Plus className="w-5 h-5" />
              Tambah Karyawan
            </button>
          </div>

          {/* Table Container (Bisa di-scroll horizontal di Mobile) */}
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[800px]">
              {/* Header Tabel */}
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-gray-100">
                    Nama Pegawai
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-gray-100">
                    Posisi / Jabatan
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-gray-100">
                    No. Telepon
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-gray-100">
                    Status
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-gray-100 text-center">
                    Aksi
                  </th>
                </tr>
              </thead>
              
              {/* Body Tabel */}
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-slate-50/80 transition-colors group">
                    {/* Kolom Nama & Foto (Digabung agar rapi) */}
                    <td className="py-4 px-6 border-b border-gray-50">
                      <div className="flex items-center gap-3">
                        {/* Foto Profil */}
                        {employee.photoUrl ? (
                          <img 
                            src={employee.photoUrl} 
                            alt={`Foto ${employee.name}`} 
                            className="w-10 h-10 rounded-full object-cover border border-gray-200"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-gray-200">
                            <User className="w-5 h-5" />
                          </div>
                        )}
                        <span className="font-semibold text-slate-800">{employee.name}</span>
                      </div>
                    </td>
                    
                    {/* Kolom Jabatan */}
                    <td className="py-4 px-6 border-b border-gray-50 text-sm text-slate-600 font-medium">
                      {employee.position}
                    </td>
                    
                    {/* Kolom Telepon */}
                    <td className="py-4 px-6 border-b border-gray-50 text-sm text-slate-600">
                      {employee.phone}
                    </td>
                    
                    {/* Kolom Status (Badge) */}
                    <td className="py-4 px-6 border-b border-gray-50">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                        employee.status === 'Aktif' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {employee.status}
                      </span>
                    </td>
                    
                    {/* Kolom Aksi (Edit & Hapus) */}
                    <td className="py-4 px-6 border-b border-gray-50">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                          title="Hapus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KaryawanPage;