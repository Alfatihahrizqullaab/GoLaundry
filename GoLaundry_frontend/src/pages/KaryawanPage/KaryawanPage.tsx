import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/ownerComponent/DashboardLayout';
import { type EmployeeFormData, EmployeeFormModal } from '../../components/dashboardOwner/EmployeeFormModal';

export const KaryawanPage: React.FC = () => {
  // State Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'tambah' | 'edit'>('tambah');
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeFormData | null>(null);

  // State Data Dummy
  const [employees, setEmployees] = useState<EmployeeFormData[]>([
    {
      idKaryawan: 'KRY-001',
      nama: 'Agus Subandono',
      usia: '28',
      posisi: 'Kasir',
      alamat: 'Jl. Melati No. 10',
      fotoKaryawan: null,
      photoURL: 'https://ui-avatars.com/api/?name=Agus+Subandono&background=eff6ff&color=2563eb',
      status: 'Aktif'
    },
    {
      idKaryawan: 'KRY-002', 
      nama: 'Siti Rahmawati',
      usia: '25',
      posisi: 'Karyawan',
      alamat: 'Jl. Kenangan No. 9',
      fotoKaryawan: null,
      photoURL: 'https://ui-avatars.com/api/?name=Siti+Rahmawati&background=eff6ff&color=2563eb',
      status: 'Aktif'
    }
  ]);

  // Handler Buka Modal Tambah
  const handleOpenAdd = () => {
    setModalMode('tambah');
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  // Handler Buka Modal Edit
  const handleOpenEdit = (employee: EmployeeFormData) => {
    setModalMode('edit');
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  // Handler Hapus Karyawan
  const handleDelete = (idKaryawan: string | undefined, nama: string) => {
    if (!idKaryawan) return;
    const isConfirm = window.confirm(`Apakah Anda yakin ingin menghapus ${nama}?`);
    if (isConfirm) {
      setEmployees(employees.filter(emp => emp.idKaryawan !== idKaryawan));
    }
  };

  // Handler Simpan Data
  const handleSubmitData = (data: EmployeeFormData) => {
    if (modalMode === 'tambah') {
      const newId = `KRY-${Math.floor(Math.random() * 10000)}`;
      
      const newData: EmployeeFormData = { 
        ...data, 
        idKaryawan: newId,
        status: 'Aktif', 
        photoURL: `https://ui-avatars.com/api/?name=${data.nama.replace(/ /g, '+')}&background=eff6ff&color=2563eb` 
      };
      setEmployees([...employees, newData]);
    } else {
      const updatedData = employees.map(emp => 
        emp.idKaryawan === data.idKaryawan ? { ...emp, ...data } : emp
      );
      setEmployees(updatedData);
    }
    setIsModalOpen(false);
  };

  return (
    <DashboardLayout title="Karyawan">
      <div className="w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
          
          {/* Header Card */}
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-slate-800">Daftar Karyawan</h2>
            <button 
              onClick={handleOpenAdd}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
            >
              <Plus className="w-5 h-5" /> Tambah Karyawan
            </button>
          </div>

          {/* =========================================
              TAMPILAN DESKTOP & TABLET (TABEL HORIZONTAL)
              Disembunyikan di layar HP (hidden md:block)
              ========================================= */}
          <div className="hidden md:block overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase border-b border-gray-100">Nama Pegawai</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase border-b border-gray-100">Posisi / Jabatan</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase border-b border-gray-100">ID Karyawan</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase border-b border-gray-100">Status</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase border-b border-gray-100 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.idKaryawan} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 border-b border-gray-50">
                      <div className="flex items-center gap-3">
                        <img src={employee.photoURL} alt="Foto" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                        <div>
                          <span className="font-semibold text-slate-800 block">{employee.nama}</span>
                          <span className="text-xs text-slate-500">Usia: {employee.usia} Thn</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-50 text-sm text-slate-600 font-medium">
                      {employee.posisi}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-50 text-sm text-slate-600 font-medium">
                      {employee.idKaryawan}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-50">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${employee.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-50">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => handleOpenEdit(employee)} className="flex items-center gap-1.5 px-3 py-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-sm font-medium">
                          <Edit className="w-4 h-4" /> <span className="hidden sm:inline">Edit</span>
                        </button>
                        <button onClick={() => handleDelete(employee.idKaryawan, employee.nama)} className="flex items-center gap-1.5 px-3 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-sm font-medium">
                          <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline">Hapus</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* =========================================
              TAMPILAN MOBILE (LIST CARD KE BAWAH)
              Hanya muncul di layar HP (block md:hidden)
              ========================================= */}
          <div className="block md:hidden p-4 space-y-4">
            {employees.map((employee) => (
              <div key={employee.idKaryawan} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col gap-4">
                
                {/* Info Utama: Foto, Nama, Usia, Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={employee.photoURL} alt="Foto" className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm" />
                    <div>
                      <span className="font-bold text-slate-800 block text-base">{employee.nama}</span>
                      <span className="text-xs text-slate-500 font-medium">Usia: {employee.usia} Thn</span>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${employee.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                    {employee.status}
                  </span>
                </div>

                {/* Info Tambahan: Jabatan & ID */}
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100/50">
                  <div>
                    <span className="block text-[11px] text-slate-400 font-bold uppercase tracking-wide mb-0.5">Posisi / Jabatan</span>
                    <span className="text-sm text-slate-700 font-semibold">{employee.posisi}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-bold uppercase tracking-wide mb-0.5">ID Karyawan</span>
                    <span className="text-sm text-slate-700 font-semibold">{employee.idKaryawan}</span>
                  </div>
                </div>

                {/* Tombol Aksi */}
                <div className="flex items-center gap-2 pt-2">
                  <button 
                    onClick={() => handleOpenEdit(employee)} 
                    className="flex-1 flex justify-center items-center gap-2 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-sm font-semibold"
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(employee.idKaryawan, employee.nama)} 
                    className="flex-1 flex justify-center items-center gap-2 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-sm font-semibold"
                  >
                    <Trash2 className="w-4 h-4" /> Hapus
                  </button>
                </div>

              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Komponen Modal */}
      <EmployeeFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitData}
        mode={modalMode}
        initialData={selectedEmployee}
      />
    </DashboardLayout>
  );
};

export default KaryawanPage;