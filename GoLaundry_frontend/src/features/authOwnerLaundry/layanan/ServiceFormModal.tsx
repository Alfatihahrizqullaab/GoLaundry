import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export interface ServiceFormData {
  idLayanan?: string; 
  namaLayanan: string;
  harga: string;
  satuan: string;
  estimasi: string;
  deskripsi: string;
}

interface ServiceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ServiceFormData) => void;
  initialData?: ServiceFormData | null;
  mode: 'tambah' | 'edit';
}

export const ServiceFormModal: React.FC<ServiceFormModalProps> = ({ 
  isOpen, onClose, onSubmit, initialData, mode 
}) => {
  const [formData, setFormData] = useState<ServiceFormData>({
    namaLayanan: '', harga: '', satuan: 'kg', estimasi: '', deskripsi: ''
  });

  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setFormData(initialData);
    } else {
      setFormData({ namaLayanan: '', harga: '', satuan: 'kg', estimasi: '', deskripsi: '' });
    }
  }, [mode, initialData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">
            {mode === 'edit' ? 'Edit Layanan' : 'Tambah Layanan Baru'}
          </h3>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto">
          <form id="serviceForm" onSubmit={handleSubmitForm} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Nama Layanan</label>
              <input type="text" name="namaLayanan" required value={formData.namaLayanan} onChange={handleChange} placeholder="Misal: Cuci Reguler" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Harga (Rp)</label>
                <input type="number" name="harga" required value={formData.harga} onChange={handleChange} placeholder="Misal: 7000" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Satuan</label>
                <select name="satuan" required value={formData.satuan} onChange={handleChange} className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm cursor-pointer">
                  <option value="kg">Per Kilogram (kg)</option>
                  <option value="pcs">Per Potong (pcs)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Estimasi Waktu</label>
              <input type="text" name="estimasi" required value={formData.estimasi} onChange={handleChange} placeholder="Misal: 2 Hari" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm" />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Deskripsi Singkat</label>
              <textarea name="deskripsi" required rows={3} value={formData.deskripsi} onChange={handleChange} placeholder="Misal: Cuci bersih, kering, setrika rapi." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm resize-y" />
            </div>
          </form>
        </div>

        <div className="p-5 sm:p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 rounded-b-2xl">
          <button type="button" onClick={onClose} className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm">Batal</button>
          <button type="submit" form="serviceForm" className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-md shadow-blue-600/20 text-sm">Simpan Layanan</button>
        </div>

      </div>
    </div>
  );
};