import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Eye, EyeOff } from 'lucide-react';
import { AuthLayout } from '../../components/layout/landingComponent/LoginLayoutOwner'; // Sesuaikan lokasi import-nya

export function LoginOwnerPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      navigate('/dashboard'); 
    }, 1500);
  };

  return (
    <AuthLayout
      title="Selamat Datang Kembali!"
      subtitle="Pantau performa bisnis laundry Anda hari ini. Kelola pesanan, cek pendapatan, dan pantau kinerja karyawan dari satu tempat."
    >
      {/* Teks Judul Form Spesifik Login */}
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Masuk ke Akun</h2>
      <p className="text-gray-500 text-base mb-10">Masukkan email dan password Anda untuk melanjutkan.</p>

      {/* Form Login */}
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
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
    </AuthLayout>
  );
}