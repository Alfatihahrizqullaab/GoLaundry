import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import { ArrowRight, PlayCircle, Settings, Clock4, Droplets, Check } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
    return(
        <section id="beranda" className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-200 h-200 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-150 h-150 bg-green-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 font-medium text-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              Platform Manajemen Laundry #1 di Indonesia
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-gray-900 mb-6">
              Kelola Bisnis Laundry Anda <span className="text-blue-600 relative inline-block">
                Lebih Mudah
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-400 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span> Bersama GoLaundry
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Digitalisasi operasional laundry mulai dari pemesanan, pembayaran, pelacakan status, hingga laporan bisnis dalam satu platform modern.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/register" className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
                Daftarkan Laundry Sekarang
                <ArrowRight size={18} />
              </Link>
              <button className="inline-flex justify-center items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                <PlayCircle size={18} className="text-blue-600" />
                Lihat Demo
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/60">
              <div><div className="text-2xl font-bold text-gray-900 mb-1">500+</div><div className="text-sm text-gray-500">Laundry Bergabung</div></div>
              <div><div className="text-2xl font-bold text-gray-900 mb-1">15.000+</div><div className="text-sm text-gray-500">Transaksi Diproses</div></div>
              <div><div className="text-2xl font-bold text-gray-900 mb-1">98%</div><div className="text-sm text-gray-500">Tingkat Kepuasan</div></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative lg:ml-10 hidden md:block"
          >
            {/* Bagian kode desain Mockup Gambar & HP tetap di sini */}
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-gray-100 p-2 overflow-hidden z-10">
              <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><Droplets size={16}/></div>
                    <div><div className="text-sm font-semibold text-gray-900">Dashboard Utama</div><div className="text-xs text-gray-500">Hari ini, 24 Okt</div></div>
                  </div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-xs font-medium text-gray-900">Sistem Online</span></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Pendapatan Hari Ini</div><div className="text-xl font-bold text-gray-900 mb-2">Rp 1.250.000</div><div className="text-xs text-green-500 flex items-center gap-1"><ArrowRight size={10} className="-rotate-45" /> +15% dari kemarin</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Pesanan Aktif</div><div className="text-xl font-bold text-gray-900 mb-2">24</div><div className="text-xs text-orange-500 flex items-center gap-1"><Clock4 size={10} /> 8 Butuh diproses</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-32 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-2"><div className="text-xs font-semibold text-gray-900">Grafik Mingguan</div><div className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600">Minggu ini</div></div>
                  <div className="flex items-end justify-between h-16 gap-2">
                    {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (<div key={i} className="w-full bg-blue-100 rounded-sm relative group cursor-pointer hover:bg-blue-200 transition-colors"><div className="absolute bottom-0 w-full bg-blue-600 rounded-sm" style={{ height: `${h}%` }}></div></div>))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-40 bg-white rounded-[2rem] shadow-2xl border-4 border-slate-800 p-2 z-20">
              <div className="bg-gray-50 h-[280px] rounded-2xl overflow-hidden flex flex-col relative">
                <div className="absolute top-0 w-full h-4 bg-black flex justify-center"><div className="w-12 h-3 bg-black rounded-b-xl"></div></div>
                <div className="mt-6 px-3">
                  <div className="text-[10px] text-gray-500">Status Pesanan</div><div className="text-xs font-bold text-gray-900 mb-3">INV-2023910</div>
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100 space-y-3">
                    <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Check size={10} /></div><div className="text-[10px] font-medium text-gray-900">Dijemput</div></div>
                    <div className="w-0.5 h-3 bg-green-200 ml-2.5 -my-2"></div>
                    <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Settings size={10} className="animate-spin-slow" /></div><div className="text-[10px] font-medium text-gray-900">Sedang Dicuci</div></div>
                    <div className="w-0.5 h-3 bg-gray-200 ml-2.5 -my-2"></div>
                    <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div></div><div className="text-[10px] text-gray-500">Selesai</div></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
        </section>
    )
}