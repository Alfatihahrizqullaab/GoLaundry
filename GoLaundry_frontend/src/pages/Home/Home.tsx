import React from 'react';
import Button from '../../components/common/Button/Button';

const Home: React.FC = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section id="beranda" className="pt-20 pb-16 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Platform Manajemen Laundry #1 di Indonesia
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Kelola Bisnis<br/>Laundry Anda<br/>
              <span className="text-blue-600 relative">
                Lebih Mudah
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-400" preserveAspectRatio="none" viewBox="0 0 100 10" fill="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
              </span><br/>
              Bersama<br/>GoLaundry
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Digitalisasi operasional laundry mulai dari pemesanan, pembayaran, pelacakan status, hingga laporan bisnis dalam satu platform modern.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" className="text-lg px-8 py-3">Daftarkan Laundry Sekarang &rarr;</Button>
              <Button variant="outline" className="text-lg px-8 py-3 flex gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Lihat Demo
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
             <div className="w-full h-[500px] bg-gradient-to-tr from-blue-100 to-white rounded-3xl border border-white shadow-2xl relative overflow-hidden">
               <div className="absolute right-10 top-10 w-64 h-[400px] bg-white rounded-3xl border-8 border-gray-800 shadow-xl z-10 p-4">
                  <div className="text-xs font-bold mb-2">Status Pesanan INV-2023910</div>
                  <div className="space-y-4">
                     <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-400"></div> Dijemput</div>
                     <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-500"></div> Sedang Dicuci</div>
                     <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gray-200"></div> Selesai</div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Sisa konten section (Stats, Features, How it Works, dll) persis sama seperti sebelumnya */}
    </main>
  );
};

export default Home;