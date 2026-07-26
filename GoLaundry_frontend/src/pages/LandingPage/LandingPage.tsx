import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, PlayCircle, BarChart3, Clock, Users, DollarSign, 
  Settings, Smartphone, CheckCircle2, Star, ChevronDown, Check,
  Zap, Shield, Clock4, Droplets
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';

// Utility for Tailwind class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Data definitions
const features = [
  { icon: <Settings className="text-blue-500" />, title: "Manajemen Laundry", desc: "Kelola semua outlet dan operasional dari satu dashboard." },
  { icon: <Smartphone className="text-green-500" />, title: "Pemesanan Online", desc: "Customer dapat memesan langsung via aplikasi atau web." },
  { icon: <Clock className="text-orange-500" />, title: "Update Status Real-time", desc: "Lacak status pengerjaan secara transparan." },
  { icon: <BarChart3 className="text-purple-500" />, title: "Dashboard Analitik", desc: "Pantau performa bisnis dengan grafik interaktif." },
  { icon: <Users className="text-pink-500" />, title: "Pengelolaan Karyawan", desc: "Atur shift, absensi, dan hak akses karyawan." },
  { icon: <Zap className="text-yellow-500" />, title: "Pengelolaan Kasir", desc: "Sistem POS khusus laundry yang terintegrasi." },
  { icon: <DollarSign className="text-emerald-500" />, title: "Laporan Pendapatan", desc: "Laporan keuangan otomatis dan akurat." },
  { icon: <Shield className="text-indigo-500" />, title: "Paket Fleksibel", desc: "Sesuaikan sistem dengan skala bisnis Anda." }
];

const steps = [
  { title: "Daftar Akun & Toko", desc: "Isi formulir pendaftaran dengan detail bisnis laundry Anda." },
  { title: "Verifikasi Admin", desc: "Tim kami akan memverifikasi data Anda dalam 1x24 jam." },
  { title: "Login Dashboard", desc: "Akses penuh ke dashboard manajemen GoLaundry." },
  { title: "Atur Layanan", desc: "Tambahkan layanan, harga, dan akun karyawan." },
  { title: "Mulai Beroperasi", desc: "Terima pesanan online dan kelola operasional dengan mudah." }
];

const pricing = [
  {
    name: "Basic",
    price: "Rp 99.000",
    period: "/bulan",
    desc: "Cocok untuk laundry pemula dengan 1 outlet.",
    features: ["1 Outlet", "Maks 5 Karyawan", "Manajemen Pesanan Dasar", "Akses Kasir (POS)", "Dukungan via Email"],
    popular: false
  },
  {
    name: "Professional",
    price: "Rp 249.000",
    period: "/bulan",
    desc: "Pilihan terbaik untuk bisnis yang sedang berkembang.",
    features: ["Hingga 3 Outlet", "Karyawan Tidak Terbatas", "Dashboard Analitik Lengkap", "Pemesanan Online Customer", "Dukungan Prioritas 24/7"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Solusi khusus untuk jaringan franchise laundry.",
    features: ["Outlet Tidak Terbatas", "White-label Aplikasi", "Custom API Integration", "Dedicated Account Manager", "Training On-site"],
    popular: false
  }
];

const testimonials = [
  {
    name: "Budi Santoso",
    shop: "Budi Clean Laundry",
    text: "Sejak pakai GoLaundry, omset naik 30% karena customer lebih mudah pesan dan pantau status cucian mereka. Laporan keuangannya juga sangat membantu!",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&auto=format"
  },
  {
    name: "Siti Aminah",
    shop: "Kinclong Express",
    text: "Dulu sering repot rekap nota manual, sekarang semua otomatis. Karyawan juga lebih disiplin karena ada sistem absensi di aplikasinya.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&auto=format"
  },
  {
    name: "Andi Wijaya",
    shop: "Wash & Go",
    text: "Tampilan dashboardnya sangat modern dan mudah dipahami. Support tim GoLaundry juga sangat cepat kalau ada kendala. Sangat direkomendasikan!",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format"
  }
];

const faqs = [
  { q: "Apakah GoLaundry gratis?", a: "Kami menyediakan masa percobaan gratis selama 14 hari. Setelah itu, Anda dapat memilih paket langganan yang sesuai dengan kebutuhan bisnis Anda." },
  { q: "Berapa lama proses verifikasi toko?", a: "Proses verifikasi toko biasanya memakan waktu maksimal 1x24 jam hari kerja." },
  { q: "Apakah laporan bisnis hanya tersedia pada paket premium?", a: "Laporan dasar tersedia di semua paket. Namun, laporan analitik mendalam dan prediksi tren hanya ada di paket Professional dan Enterprise." },
  { q: "Bagaimana cara customer melakukan pemesanan online?", a: "Customer dapat memesan melalui halaman web khusus outlet Anda yang kami sediakan, atau mendownload aplikasi customer GoLaundry." }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white mb-4">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900">{q}</span>
        <ChevronDown className={cn("transition-transform text-gray-500", open && "rotate-180")} size={20} />
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-500">
          {a}
        </div>
      )}
    </div>
  );
}

const LandingPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <section id="beranda" className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        {/* Background blobs untuk memberi warna seperti di image_4a292c.png */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-green-100 rounded-full blur-3xl opacity-50 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Bagian Teks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
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
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-500">Laundry Bergabung</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">15.000+</div>
                  <div className="text-sm text-gray-500">Transaksi Diproses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                  <div className="text-sm text-gray-500">Tingkat Kepuasan</div>
                </div>
              </div>
            </motion.div>
            
            {/* Bagian Mockup Gambar Kanan */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:ml-10 hidden md:block"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-gray-100 p-2 overflow-hidden z-10">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-4">
                  
                  {/* Mockup Topbar */}
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><Droplets size={16}/></div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Dashboard Utama</div>
                        <div className="text-xs text-gray-500">Hari ini, 24 Okt</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs font-medium text-gray-900">Sistem Online</span>
                    </div>
                  </div>
                  
                  {/* Mockup Content */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-xs text-gray-500 mb-1">Pendapatan Hari Ini</div>
                      <div className="text-xl font-bold text-gray-900 mb-2">Rp 1.250.000</div>
                      <div className="text-xs text-green-500 flex items-center gap-1"><ArrowRight size={10} className="-rotate-45" /> +15% dari kemarin</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-xs text-gray-500 mb-1">Pesanan Aktif</div>
                      <div className="text-xl font-bold text-gray-900 mb-2">24</div>
                      <div className="text-xs text-orange-500 flex items-center gap-1"><Clock4 size={10} /> 8 Butuh diproses</div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-32 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-semibold text-gray-900">Grafik Mingguan</div>
                      <div className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600">Minggu ini</div>
                    </div>
                    <div className="flex items-end justify-between h-16 gap-2">
                      {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                        <div key={i} className="w-full bg-blue-100 rounded-sm relative group cursor-pointer hover:bg-blue-200 transition-colors">
                          <div className="absolute bottom-0 w-full bg-blue-600 rounded-sm" style={{ height: `${h}%` }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Phone Mockup */}
              <div className="absolute -bottom-8 -left-8 w-40 bg-white rounded-[2rem] shadow-2xl border-4 border-slate-800 p-2 z-20">
                <div className="bg-gray-50 h-[280px] rounded-2xl overflow-hidden flex flex-col relative">
                  <div className="absolute top-0 w-full h-4 bg-black flex justify-center">
                    <div className="w-12 h-3 bg-black rounded-b-xl"></div>
                  </div>
                  <div className="mt-6 px-3">
                    <div className="text-[10px] text-gray-500">Status Pesanan</div>
                    <div className="text-xs font-bold text-gray-900 mb-3">INV-2023910</div>
                    <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Check size={10} /></div>
                        <div className="text-[10px] font-medium text-gray-900">Dijemput</div>
                      </div>
                      <div className="w-0.5 h-3 bg-green-200 ml-2.5 -my-2"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Settings size={10} className="animate-spin-slow" /></div>
                        <div className="text-[10px] font-medium text-gray-900">Sedang Dicuci</div>
                      </div>
                      <div className="w-0.5 h-3 bg-gray-200 ml-2.5 -my-2"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div></div>
                        <div className="text-[10px] text-gray-500">Selesai</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="fitur" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mengapa Memilih GoLaundry?</h2>
            <p className="text-gray-500 text-lg">Platform komprehensif yang didesain khusus untuk menjawab semua kebutuhan operasional bisnis laundry Anda.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="cara-kerja" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara Kerja GoLaundry</h2>
            <p className="text-gray-500 text-lg">Mulai digitalisasi laundry Anda hanya dalam 5 langkah mudah.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4 border-4 border-white shadow-md">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="paket" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paket Langganan</h2>
            <p className="text-gray-500 text-lg">Harga transparan tanpa biaya tersembunyi. Sesuaikan dengan kebutuhan bisnis Anda.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {pricing.map((p, i) => (
              <div 
                key={i} 
                className={cn(
                  "relative bg-white rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2",
                  p.popular 
                    ? "border-2 border-blue-600 shadow-xl shadow-blue-900/10 scale-105 z-10" 
                    : "border border-gray-200 shadow-md"
                )}
              >
                {p.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Paling Populer
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{p.price}</span>
                    <span className="text-gray-500">{p.period}</span>
                  </div>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                      <span className="text-gray-900">{f}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={cn(
                  "w-full py-3 rounded-xl font-semibold transition-colors",
                  p.popular 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                )}>
                  Berlangganan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dipercaya oleh Ratusan Owner</h2>
            <p className="text-gray-500 text-lg">Lihat bagaimana GoLaundry membantu mereka mengembangkan bisnis.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-gray-700 mb-6 line-clamp-4">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.shop}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg">Pertanyaan yang sering diajukan mengenai GoLaundry.</p>
          </div>
          
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Mengembangkan Bisnis Laundry Anda?</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Bergabunglah dengan ratusan owner laundry lainnya dan rasakan kemudahan mengelola bisnis bersama GoLaundry.
          </p>
          <Link 
            to="/register" 
            className="inline-flex justify-center items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl shadow-black/10"
          >
            Daftarkan Laundry Sekarang
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;