import { motion } from 'framer-motion';
import { UploadCloud, ChevronRight } from 'lucide-react';
import { LocationPicker } from '../LocationPicker/LocationPicker';

interface StoreInfoStepProps {
  onNext: () => void;
  latitude: string;
  longitude: string;
  isLocating: boolean;
  onGetLocation: () => void;
}

export const StoreInfoStep = ({ onNext, latitude, longitude, isLocating, onGetLocation }: StoreInfoStepProps) => {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-sm font-medium text-gray-900">Nama Laundry</label>
          <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="GoClean Laundry Express" />
        </div>
        
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-sm font-medium text-gray-900">Alamat Lengkap</label>
          <textarea required rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm resize-none" placeholder="Jl. Sudirman No. 123..." />
        </div>

        {/* Memanggil Komponen Lokasi di Sini */}
        <LocationPicker 
          latitude={latitude} 
          longitude={longitude} 
          isLocating={isLocating} 
          onGetLocation={onGetLocation} 
        />

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-900">Kota/Kabupaten</label>
          <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="Palembang" />
        </div>
        
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-900">Nomor Telepon Toko</label>
          <input required type="tel" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="021-9876543" />
        </div>

        <div className="space-y-1.5 md:col-span-2">
          <label className="text-sm font-medium text-gray-900">Upload Logo Toko (Opsional)</label>
          <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform">
              <UploadCloud size={20} />
            </div>
            <span className="text-sm font-medium text-gray-900">Klik untuk upload logo</span>
          </div>
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <button 
          type="button" 
          onClick={onNext}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2"
        >
          Selanjutnya <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};