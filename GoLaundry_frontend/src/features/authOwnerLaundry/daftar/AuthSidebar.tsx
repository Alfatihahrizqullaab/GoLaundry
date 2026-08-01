import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';

export const AuthSidebar = ({ step }: { step: number }) => {
  return (
    <div className="hidden lg:flex w-5/12 bg-blue-600 p-12 flex-col justify-between relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-blue-800 rounded-full blur-3xl opacity-30 z-0" />

      <div className="relative z-10">
        <Link to="/" className="flex items-center gap-2 group mb-16">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-lg">
            <Droplets size={24} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">GoLaundry</span>
        </Link>

        <h1 className="text-4xl font-bold leading-tight mb-6">
          Langkah Awal Menuju Digitalisasi Laundry Anda
        </h1>
        
        {/* Progress Indicator Sidebar */}
        <div className="space-y-8 mt-12">
          <div className={`flex gap-4 items-start transition-opacity ${step === 1 ? 'opacity-100' : 'opacity-50'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${step === 1 ? 'bg-white text-blue-600' : 'bg-white/20 text-white'}`}>1</div>
            <div>
              <h3 className="font-semibold text-lg">Informasi Toko</h3>
              <p className="text-blue-100 text-sm">Detail lokasi dan operasional laundry Anda.</p>
            </div>
          </div>
          
          <div className="w-0.5 h-8 bg-white/20 ml-4 -my-4"></div>

          <div className={`flex gap-4 items-start transition-opacity ${step === 2 ? 'opacity-100' : 'opacity-50'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${step === 2 ? 'bg-white text-blue-600' : 'bg-white/20 text-white'}`}>2</div>
            <div>
              <h3 className="font-semibold text-lg">Akun Pemilik</h3>
              <p className="text-blue-100 text-sm">Data diri untuk akses ke dashboard GoLaundry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};