import React, { useState } from 'react';
import { Plus, Edit, Trash2, Clock } from 'lucide-react';
// Import Komponen General dari folder components
 
// Import Komponen Spesifik dari folder features
import { ServiceFormModal, type ServiceFormData } from '../../../features/authOwnerLaundry/layanan/ServiceFormModal';

export const LayananPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'tambah' | 'edit'>('tambah');
  const [selectedService, setSelectedService] = useState<ServiceFormData | null>(null);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: '', nama: '' });

  // Data Dummy seperti di gambar desain
  const [services, setServices] = useState<ServiceFormData[]>([
    { idLayanan: 'SRV-001', namaLayanan: 'Cuci Reguler', harga: '7000', satuan: 'kg', estimasi: '2 Hari', deskripsi: 'Cuci bersih, kering, setrika rapi.' },
    { idLayanan: 'SRV-002', namaLayanan: 'Cuci Express', harga: '12000', satuan: 'kg', estimasi: '24 Jam', deskripsi: 'Selesai dalam 1 hari.' },
    { idLayanan: 'SRV-003', namaLayanan: 'Setrika Saja', harga: '5000', satuan: 'kg', estimasi: '1 Hari', deskripsi: 'Hanya setrika pakaian.' },
    { idLayanan: 'SRV-004', namaLayanan: 'Bed Cover', harga: '25000', satuan: 'pcs', estimasi: '3 Hari', deskripsi: 'Cuci bed cover ukuran apapun.' },
    { idLayanan: 'SRV-005', namaLayanan: 'Dry Cleaning', harga: '40000', satuan: 'pcs', estimasi: '3 Hari', deskripsi: 'Cuci kering untuk jas/gaun.' }
  ]);

  const formatRupiah = (angka: string) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(Number(angka));
  };

  const handleOpenAdd = () => { setModalMode('tambah'); setSelectedService(null); setIsModalOpen(true); };
  const handleOpenEdit = (service: ServiceFormData) => { setModalMode('edit'); setSelectedService(service); setIsModalOpen(true); };
  
  const handleDeleteClick = (idLayanan: string | undefined, nama: string) => {
    if (idLayanan) setDeleteModal({ isOpen: true, id: idLayanan, nama: nama });
  };
  
  const confirmDelete = () => {
    setServices(services.filter(srv => srv.idLayanan !== deleteModal.id));
    setDeleteModal({ isOpen: false, id: '', nama: '' });
  };

  const handleSubmitData = (data: ServiceFormData) => {
    if (modalMode === 'tambah') {
      const newData: ServiceFormData = { ...data, idLayanan: `SRV-${Math.floor(Math.random() * 10000)}` };
      setServices([...services, newData]);
    } else {
      setServices(services.map(srv => srv.idLayanan === data.idLayanan ? { ...srv, ...data } : srv));
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full">
        
        {/* Header Title & Tombol Tambah */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-slate-800">Katalog Layanan</h2>
          <button onClick={handleOpenAdd} className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center shadow-sm">
            <Plus className="w-5 h-5" /> Tambah Layanan
          </button>
        </div>

        {/* Grid Card untuk Layanan (Sangat Responsif) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.idLayanan} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative group">
              
              {/* Action Buttons: Edit & Delete */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <button onClick={() => handleOpenEdit(service)} className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDeleteClick(service.idLayanan, service.namaLayanan)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Data Content */}
              <h3 className="text-lg font-bold text-slate-800 mb-2 pr-16">{service.namaLayanan}</h3>
              
              <div className="flex items-end gap-1 mb-3">
                <span className="text-2xl font-bold text-blue-600">{formatRupiah(service.harga)}</span>
                <span className="text-sm font-medium text-slate-500 mb-1">/ {service.satuan}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Estimasi: {service.estimasi}</span>
              </div>
              
              <p className="text-sm text-slate-500 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                {service.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Komponen Modal Tambah/Edit */}
      <ServiceFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleSubmitData} 
        mode={modalMode} 
        initialData={selectedService} 
      />

      {/* Komponen Modal Hapus */}
      {deleteModal.isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" onClick={() => setDeleteModal({ isOpen: false, id: '', nama: '' })} />
          <div className="relative bg-white rounded-2xl w-full max-w-sm p-6 sm:p-8 shadow-2xl text-center flex flex-col items-center animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-5">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Layanan?</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Apakah Anda yakin ingin menghapus layanan <span className="font-bold text-gray-800">{deleteModal.nama}</span>?
            </p>
            <div className="flex gap-3 w-full">
              <button onClick={() => setDeleteModal({ isOpen: false, id: '', nama: '' })} className="flex-1 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm">
                Batal
              </button>
              <button onClick={confirmDelete} className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-md shadow-red-500/20 text-sm">
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LayananPage;