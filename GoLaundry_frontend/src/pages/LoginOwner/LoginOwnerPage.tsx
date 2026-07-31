import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, ChevronRight, Eye, EyeOff } from 'lucide-react'; // LogIn dihapus

export function LoginOwnerPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // State untuk form
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi proses pemanggilan API Backend untuk Login
    setTimeout(() => {
      navigate('/dashboard'); 
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Kolom Kiri - Ilustrasi & Branding (Disembunyikan di Mobile) */}
      <div className="hidden lg:flex w-5/12 bg-blue-600 p-12 lg:p-16 flex-col relative overflow-hidden text-white">
        {/* Ornamen Background */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl opacity-30 z-0" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-blue-800 rounded-full blur-3xl opacity-30 z-0" />

        {/* Bagian Teks Sambutan */}
        <div className="relative z-10 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Selamat Datang Kembali!
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl max-w-md leading-relaxed">
              Pantau performa bisnis laundry Anda hari ini. Kelola pesanan, cek pendapatan, dan pantau kinerja karyawan dari satu tempat.
            </p>
          </motion.div>
        </div>

        {/* Logo GoLaundry Raksasa (Responsif) */}
        <div className="relative z-10 mt-32">
          <Link to="/" className="flex items-center gap-4 md:gap-5 group w-fit">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-xl transition-transform group-hover:scale-105">
              <Droplets className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            </div>
            <span className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-md">
              Go<span className="text-blue-200">Laundry</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Kolom Kanan - Form Login */}
      <div className="w-full lg:w-7/12 p-6 md:p-12 flex items-center justify-center relative">
        
        {/* LOGO MOBILE YANG ADA DI POJOK KIRI ATAS SUDAH DIHAPUS SESUAI PERMINTAAN */}

        {/* Card Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-gray-100 p-8 sm:p-14"
        >
          <div className="mb-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 mx-auto lg:mx-0">
                {/* Kotak Ikon Biru */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30 shrink-0">
                    <Droplets className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                
                {/* Teks GoLaundry */}
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-gray-900">
                    Go<span className="text-blue-600">Laundry</span>
                </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Masuk ke Akun</h2>
            <p className="text-gray-500 text-base">Masukkan email dan password Anda untuk melanjutkan.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Email atau Username</label>
              <input 
                required 
                type="text" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-base" 
                placeholder="nama@email.com" 
              />
            </div>

            {/* Input Password dengan fitur Show/Hide */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-900">Password</label>
                <Link to="/forgot-password" className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                  Lupa Password?
                </Link>
              </div>
              <div className="relative">
                <input 
                  required 
                  type={showPassword ? "text" : "password"} 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-base pr-12" 
                  placeholder="••••••••" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none p-1"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 pt-2">
              <input 
                type="checkbox" 
                id="remember" 
                checked={formData.remember}
                onChange={(e) => setFormData({...formData, remember: e.target.checked})}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer" 
              />
              <label htmlFor="remember" className="text-base text-gray-600 cursor-pointer select-none">
                Ingat saya di perangkat ini
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2 animate-pulse">Memverifikasi...</span>
                ) : (
                  <>
                    Masuk Dashboard
                    <ChevronRight size={20} />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="text-center mt-10">
            <p className="text-base text-gray-500">
              Belum punya akun laundry?{' '}
              <Link to="/RegistrationOwnerPage" className="text-blue-600 font-semibold hover:underline">
                Daftar sekarang.
              </Link>
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}