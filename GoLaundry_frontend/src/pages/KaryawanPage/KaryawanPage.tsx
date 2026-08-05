import React, { useState } from 'react';
import { Plus, Edit, Trash2, AlertTriangle } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/ownerComponent/DashboardLayout';
import { type EmployeeFormData, EmployeeFormModal } from '../../features/authOwnerLaundry/karyawan/EmployeeFormModal';

export const KaryawanPage: React.FC = () => {
  // State Modal Tambah/Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'tambah' | 'edit'>('tambah');
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeFormData | null>(null);

  // BARU: State untuk Modal Konfirmasi Hapus
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: '', nama: '' });

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

  // Handler Buka Modal Tambah & Edit
  const handleOpenAdd = () => {
    setModalMode('tambah');
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (employee: EmployeeFormData) => {
    setModalMode('edit');
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  // BARU: Handler untuk membuka Modal Hapus
  const handleDeleteClick = (idKaryawan: string | undefined, nama: string) => {
    if (!idKaryawan) return;
    setDeleteModal({ isOpen: true, id: idKaryawan, nama: nama });
  };

  // BARU: Handler Eksekusi Hapus (Dipanggil dari tombol "Ya, Hapus" di modal)
  const confirmDelete = () => {
    setEmployees(employees.filter(emp => emp.idKaryawan !== deleteModal.id));
    setDeleteModal({ isOpen: false, id: '', nama: '' }); // Tutup modal setelah dihapus
  };

  // Handler Simpan Data (Dari Modal Tambah/Edit)
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

          {/* TAMPILAN DESKTOP & TABLET */}
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
                        {/* Panggil handleDeleteClick, bukan logic Hapus langsung */}
                        <button onClick={() => handleDeleteClick(employee.idKaryawan, employee.nama)} className="flex items-center gap-1.5 px-3 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-sm font-medium">
                          <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline">Hapus</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TAMPILAN MOBILE */}
          <div className="block md:hidden p-4 space-y-4">
            {employees.map((employee) => (
              <div key={employee.idKaryawan} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col gap-4">
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
                <div className="flex items-center gap-2 pt-2">
                  <button onClick={() => handleOpenEdit(employee)} className="flex-1 flex justify-center items-center gap-2 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-sm font-semibold">
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  {/* Panggil handleDeleteClick, bukan logic Hapus langsung */}
                  <button onClick={() => handleDeleteClick(employee.idKaryawan, employee.nama)} className="flex-1 flex justify-center items-center gap-2 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-sm font-semibold">
                    <Trash2 className="w-4 h-4" /> Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* MODAL TAMBAH & EDIT */}
      <EmployeeFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitData}
        mode={modalMode}
        initialData={selectedEmployee}
      />

      {/* BARU: MODAL KONFIRMASI HAPUS */}
      {deleteModal.isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setDeleteModal({ isOpen: false, id: '', nama: '' })}
          />
          <div className="relative bg-white rounded-2xl w-full max-w-sm p-6 sm:p-8 shadow-2xl text-center flex flex-col items-center animate-in fade-in zoom-in duration-200">
            
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-5">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Karyawan?</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Apakah Anda yakin ingin menghapus data karyawan <span className="font-bold text-gray-800">{deleteModal.nama}</span>? Data yang sudah dihapus tidak dapat dikembalikan.
            </p>
            
            <div className="flex gap-3 w-full">
              <button 
                onClick={() => setDeleteModal({ isOpen: false, id: '', nama: '' })}
                className="flex-1 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm"
              >
                Batal
              </button>
              <button 
                onClick={confirmDelete}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-md shadow-red-500/20 text-sm"
              >
                Ya, Hapus
              </button>
            </div>

          </div>
        </div>
      )}

    </DashboardLayout>
  );
};

export default KaryawanPage;