import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplets, ShoppingCart } from 'lucide-react';
import { LoginForm } from '../../features/auth/LoginForm';

export const LoginKasirPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  const navigate = useNavigate();

  const handleLoginSubmit = (email: string, pass: string) => {
    console.log(`Login Kasir - Email: ${email}`);
    navigate('/kasir/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 to-blue-500 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
            <Droplets className="w-6 h-6" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-white">GoLaundry</span>
        </div>
        <div className="relative z-10 space-y-4 max-w-md">
          <h1 className="text-4xl font-extrabold text-white leading-tight">Portal Kasir Laundry</h1>
          <p className="text-blue-100 text-sm leading-relaxed">Kelola transaksi, timbang cucian, dan proses pembayaran pelanggan dengan cepat dan efisien.</p>
        </div>
        <div className="relative z-10"><p className="text-blue-200 text-sm font-medium">© 2026 GoLaundry Indonesia.</p></div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-50 lg:bg-white relative">
        <div className="w-full max-w-md bg-white lg:bg-transparent p-8 lg:p-0 rounded-3xl shadow-xl lg:shadow-none border border-slate-100 lg:border-none">
          <div className="mb-8 text-center lg:text-left">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800">Login Kasir</h2>
            <p className="text-sm text-slate-500 mt-2">Silakan masuk menggunakan akun kasir Anda.</p>
          </div>
          <LoginForm roleName="Kasir" onSubmit={handleLoginSubmit} />
        </div>
      </div>
    </div>
  );
};