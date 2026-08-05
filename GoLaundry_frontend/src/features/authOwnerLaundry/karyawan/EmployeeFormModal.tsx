import React, { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';

export interface EmployeeFormData {
  idKaryawan?: string; // Dibuat opsional karena saat 'tambah' ID-nya belum ada
  nama: string;
  usia: string;
  alamat: string;
  posisi: string;
  photoURL: string;
  status: string;
  fotoKaryawan: File | null;
}

interface EmployeeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EmployeeFormData) => void;
  initialData?: EmployeeFormData | null;
  mode: 'tambah' | 'edit';
}

export const EmployeeFormModal: React.FC<EmployeeFormModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  initialData, 
  mode 
}) => {
  const [formData, setFormData] = useState<EmployeeFormData>({
    idKaryawan: '',
    nama: '',
    usia: '',
    alamat: '',
    posisi: '',
    photoURL: '',
    status: '',
    fotoKaryawan: null
  });

  // Effect: Isi Form otomatis jika masuk mode edit
  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setFormData(initialData);
    } else {
      // Kosongkan jika mode tambah
      setFormData({
        idKaryawan: '', 
        nama: '', 
        usia: '', 
        alamat: '', 
        posisi: '', 
        status: '', 
        photoURL: '', 
        fotoKaryawan: null
      });
    }
  }, [mode, initialData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fotoKaryawan: e.target.files![0] }));
    }
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Kirim data kembali ke halaman utama
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">
            {mode === 'edit' ? 'Edit Data Karyawan' : 'Tambah Karyawan Baru'}
          </h3>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto">
          <form id="employeeForm" onSubmit={handleSubmitForm} className="space-y-5">
            
            {/* Input ID Karyawan SUDAH DIHAPUS DARI SINI */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Nama Lengkap</label>
                <input type="text" name="nama" required value={formData.nama} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Usia</label>
                <input type="number" name="usia" required value={formData.usia} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Posisi / Jabatan</label>
              {/* pr-10 ditambahkan agar panah tidak mepet border */}
              <select 
                name="posisi" 
                required  
                value={formData.posisi} 
                onChange={handleChange} 
                className="w-full pl-3 pr-10 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm cursor-pointer"
              >
                <option value="" disabled>Pilih posisi karyawan...</option>
                <option value="Kasir">Kasir</option>
                <option value="Karyawan">Karyawan</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Alamat Lengkap</label>
              <textarea name="alamat" required rows={3} value={formData.alamat} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm resize-y" />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Foto Karyawan {mode === 'edit' && '(Opsional)'}</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <div className="flex text-sm text-gray-600 justify-center mt-2">
                    <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Unggah file</span>
                      <input type="file" accept="image/*" onChange={handleFileChange} className="sr-only" />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">{formData.fotoKaryawan ? formData.fotoKaryawan.name : "PNG, JPG up to 5MB"}</p>
                </div>
              </div>
            </div>

          </form>
        </div>

        <div className="p-5 sm:p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 rounded-b-2xl">
          <button type="button" onClick={onClose} className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm">
            Batal
          </button>
          <button type="submit" form="employeeForm" className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-md shadow-blue-600/20 text-sm">
            Simpan Data
          </button>
        </div>
        
      </div>
    </div>
  );
};