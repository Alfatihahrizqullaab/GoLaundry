import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';

interface AccountInfoStepProps {
  onBack: () => void;
  isSubmitting: boolean;
}

export const AccountInfoStep = ({ onBack, isSubmitting }: AccountInfoStepProps) => {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-sm font-medium text-gray-900">Nama Lengkap Pemilik</label>
          <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="John Doe" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-900">Email</label>
          <input required type="email" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="john@example.com" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-900">No. WhatsApp</label>
          <input required type="tel" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="08123456789" />
        </div>
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-sm font-medium text-gray-900">Username</label>
          <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="johndoe" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-900">Password</label>
          <input required type="password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="••••••••" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-900">Konfirmasi Password</label>
          <input required type="password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" placeholder="••••••••" />
        </div>
      </div>

      <div className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
        <input required type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
        <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
          Saya menyetujui <a href="#" className="text-blue-600 font-medium hover:underline">Syarat dan Ketentuan</a> serta <a href="#" className="text-blue-600 font-medium hover:underline">Kebijakan Privasi</a> yang berlaku di GoLaundry, dan menyatakan bahwa data yang saya berikan adalah benar.
        </label>
      </div>

      <div className="pt-4 flex items-center justify-between gap-4">
        <button 
          type="button" 
          onClick={onBack}
          className="px-6 py-3 rounded-xl font-semibold text-gray-500 hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
          <ChevronLeft size={18} /> Kembali
        </button>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="flex-1 bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Memproses...' : <><CheckCircle2 size={18} /> Daftar Sekarang</>}
        </button>
      </div>
    </motion.div>
  );
};