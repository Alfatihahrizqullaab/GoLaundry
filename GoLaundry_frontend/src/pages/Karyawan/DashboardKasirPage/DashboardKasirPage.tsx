import React, { useState } from 'react';
import { Clock, CheckCircle2, Search, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DashboardKaryawanPage: React.FC = () => {
  // ATURAN PATEN: Jangan diubah, tetap ada
  const [total_max, setTotal_max] = useState<number>(0); 
  const [nama_max, setNama_max] = useState<string>('');  

  // Alur urutan proses produksi laundry
  const alurProses = [
    "Pesanan Diterima",
    "Sedang Dicuci",
    "Sedang Dikeringkan",
    "Sedang Disetrika",
    "Selesai (Siap Ambil)"
  ];

  // Data Dummy Pekerjaan (Persis seperti di gambar)
  const [jobs, setJobs] = useState([
    { id: '#ORD-99238', layanan: 'Cuci Reguler', pelanggan: 'Budi Santoso', masuk: '10:30', status: 'Sedang Dicuci' },
    { id: '#ORD-99239', layanan: 'Cuci Express', pelanggan: 'Siti Aminah', masuk: '09:15', status: 'Sedang Dikeringkan' },
    { id: '#ORD-99240', layanan: 'Setrika Saja', pelanggan: 'Andi Wijaya', masuk: '11:45', status: 'Pesanan Diterima' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Logika untuk menentukan tombol "Lanjut" berikutnya
  const getNextStatus = (currentStatus: string) => {
    const currentIndex = alurProses.indexOf(currentStatus);
    if (currentIndex >= 0 && currentIndex < alurProses.length - 1) {
      return alurProses[currentIndex + 1];
    }
    return null;
  };

  // Logika untuk persentase Progress Bar
  const getProgressPercentage = (status: string) => {
    switch (status) {
      case 'Pesanan Diterima': return '10%';
      case 'Sedang Dicuci': return '35%';
      case 'Sedang Dikeringkan': return '65%';
      case 'Sedang Disetrika': return '90%';
      case 'Selesai (Siap Ambil)': return '100%';
      default: return '0%';
    }
  };

  // Fungsi saat tombol proses diklik
  const handleNextProcess = (id: string, currentStatus: string) => {
    const nextStatus = getNextStatus(currentStatus);
    if (nextStatus) {
      setJobs(jobs.map(job => job.id === id ? { ...job, status: nextStatus } : job));
    }
  };

  // Filter pencarian
  const filteredJobs = jobs.filter(job => 
    job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.pelanggan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fbff] font-sans">
      
      {/* ========================================= */}
      {/* HEADER BIRU SEPERTI DI GAMBAR             */}
      {/* ========================================= */}
      <header className="bg-blue-600 text-white px-4 md:px-8 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg hidden sm:flex">
            K
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold leading-tight">Dashboard Karyawan</h1>
            <p className="text-blue-200 text-xs md:text-sm">Bagian Produksi Laundry</p>
          </div>
        </div>
        
        <Link to="/" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors text-sm font-medium">
          <span className="hidden sm:inline">Keluar</span>
          <LogOut className="w-5 h-5" />
        </Link>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        
        {/* ========================================= */}
        {/* KARTU STATISTIK ATAS                      */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Sedang Diproses</p>
              <h3 className="text-3xl font-bold text-slate-800">
                {jobs.filter(j => j.status !== 'Selesai (Siap Ambil)').length}
              </h3>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Selesai Hari Ini</p>
              <h3 className="text-3xl font-bold text-slate-800">
                {jobs.filter(j => j.status === 'Selesai (Siap Ambil)').length}
              </h3>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* JUDUL & PENCARIAN                         */}
        {/* ========================================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-slate-800">Daftar Pekerjaan</h2>
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari nomor pesanan..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>
        </div>

        {/* ========================================= */}
        {/* LIST DAFTAR PEKERJAAN (KARTU VERTIKAL)    */}
        {/* ========================================= */}
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const nextStatus = getNextStatus(job.status);
            
            return (
              <div key={job.id} className="bg-white p-5 md:p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:shadow-md">
                
                {/* Info Kiri */}
                <div className="w-full md:w-1/3 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-extrabold text-slate-800 text-lg">{job.id}</h3>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-lg border border-slate-200">
                      {job.layanan}
                    </span>
                  </div>
                  <p className="text-slate-700 font-medium">{job.pelanggan}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Masuk: {job.masuk}</span>
                  </div>
                </div>

                {/* Status & Progress Bar (Tengah) */}
                <div className="w-full md:w-1/3">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-slate-500">Status Saat Ini:</span>
                    <span className="text-sm font-bold text-blue-700">{job.status}</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                      style={{ width: getProgressPercentage(job.status) }}
                    ></div>
                  </div>
                </div>

                {/* Tombol Aksi Kanan */}
                <div className="w-full md:w-auto md:min-w-[220px] flex justify-end">
                  {nextStatus ? (
                    <button 
                      onClick={() => handleNextProcess(job.id, job.status)}
                      className="w-full md:w-auto px-5 py-3 bg-[#1a56ff] text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 active:scale-95"
                    >
                      Lanjut: {nextStatus}
                    </button>
                  ) : (
                    <span className="w-full md:w-auto px-5 py-3 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-bold flex items-center justify-center gap-2 text-center">
                      <CheckCircle2 className="w-5 h-5" /> Selesai
                    </span>
                  )}
                </div>
                
              </div>
            );
          })}

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
              <p className="text-slate-500 font-medium">Tidak ada pekerjaan yang ditemukan.</p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
};

export default DashboardKaryawanPage;