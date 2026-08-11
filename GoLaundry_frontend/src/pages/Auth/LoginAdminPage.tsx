import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { LoginForm } from '../../features/auth/LoginForm';

export const LoginAdminPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  const navigate = useNavigate();

  const handleLoginSubmit = (email: string, pass: string) => {
    console.log(`Login Admin - Email: ${email}`);
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      <div className="hidden lg:flex w-1/2 bg-[#131b2f] p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </div>
        <div className="flex items-center gap-3 relative z-10">
          <ShieldCheck className="w-10 h-10 text-blue-500" />
          <span className="font-bold text-2xl tracking-tight text-white">GoLaundry<span className="text-blue-500">HQ</span></span>
        </div>
        <div className="relative z-10 space-y-4 max-w-md">
          <h1 className="text-4xl font-extrabold text-white leading-tight">Sistem Administrasi Pusat</h1>
          <p className="text-slate-400 text-sm leading-relaxed">Manajemen pengguna, pengaturan paket berlangganan, dan pemantauan performa mitra GoLaundry.</p>
        </div>
        <div className="relative z-10"><p className="text-slate-500 text-sm font-medium">© 2026 GoLaundry HQ.</p></div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-50 lg:bg-white relative">
        <div className="w-full max-w-md bg-white lg:bg-transparent p-8 lg:p-0 rounded-3xl shadow-xl lg:shadow-none border border-slate-100 lg:border-none">
          <div className="mb-8 text-center lg:text-left">
            <div className="w-12 h-12 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800">Login Administrator</h2>
            <p className="text-sm text-slate-500 mt-2">Akses khusus untuk Super Admin dan tim pusat.</p>
          </div>
          <LoginForm roleName="Admin" onSubmit={handleLoginSubmit} />
        </div>
      </div>
    </div>
  );
};