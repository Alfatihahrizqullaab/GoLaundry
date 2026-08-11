import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplets, Shirt } from 'lucide-react';
import { LoginForm } from '../../features/auth/LoginForm';

export const LoginKaryawanPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  const navigate = useNavigate();

  const handleLoginSubmit = (email: string, pass: string) => {
    console.log(`Login Karyawan - Email: ${email}`);
    navigate('/karyawan/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-orange-600 to-orange-400 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-10 -right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        </div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-lg">
            <Droplets className="w-6 h-6" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-white">GoLaundry</span>
        </div>
        <div className="relative z-10 space-y-4 max-w-md">
          <h1 className="text-4xl font-extrabold text-white leading-tight">Area Produksi & Cuci</h1>
          <p className="text-orange-100 text-sm leading-relaxed">Pantau antrean pakaian, update status proses cucian, hingga selesai dan siap diambil pelanggan.</p>
        </div>
        <div className="relative z-10"><p className="text-orange-200 text-sm font-medium">© 2026 GoLaundry Indonesia.</p></div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-50 lg:bg-white relative">
        <div className="w-full max-w-md bg-white lg:bg-transparent p-8 lg:p-0 rounded-3xl shadow-xl lg:shadow-none border border-slate-100 lg:border-none">
          <div className="mb-8 text-center lg:text-left">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
              <Shirt className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800">Login Karyawan</h2>
            <p className="text-sm text-slate-500 mt-2">Silakan masuk menggunakan akun produksi Anda.</p>
          </div>
          <LoginForm roleName="Karyawan" onSubmit={handleLoginSubmit} />
        </div>
      </div>
    </div>
  );
};