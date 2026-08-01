import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Kolom Kiri - Ilustrasi & Branding */}
      <div className="hidden lg:flex w-5/12 bg-blue-600 p-12 lg:p-16 flex-col relative overflow-hidden text-white">
        {/* Ornamen Background */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl opacity-30 z-0" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-blue-800 rounded-full blur-3xl opacity-30 z-0" />

        {/* Teks Sambutan Dinamis (dari props) */}
        <div className="relative z-10 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl max-w-md leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Logo GoLaundry Bawah */}
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

      {/* Kolom Kanan - Container Form */}
      <div className="w-full lg:w-7/12 p-6 md:p-12 flex items-center justify-center relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-gray-100 p-8 sm:p-14"
        >
          {/* Header Card (Logo GoLaundry untuk versi dalam form) */}
          <div className="mb-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 mx-auto lg:mx-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30 shrink-0">
                <Droplets className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-gray-900">
                Go<span className="text-blue-600">Laundry</span>
              </span>
            </div>
            
            {/* Konten Form Spesifik Masuk Di Sini */}
            {children}
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}