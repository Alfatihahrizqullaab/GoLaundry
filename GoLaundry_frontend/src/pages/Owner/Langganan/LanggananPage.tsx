import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export const LanggananPage: React.FC = () => {
  const navigate = useNavigate();
  const [activePackage] = useState<string>('Premium');

  const packages = [
    { 
      idLayanan: 'SRV-PKG-01', 
      name: 'Basic', 
      price: 0, 
      priceLabel: 'Gratis', 
      features: ['Max 50 Transaksi/bln', '1 Akun Kasir', 'Laporan Standar'] 
    },
    { 
      idLayanan: 'SRV-PKG-02', 
      name: 'Pro', 
      price: 99000, 
      priceLabel: 'Rp 99.000/bln', 
      features: ['Unlimited Transaksi', '3 Akun Kasir', 'Manajemen Karyawan', 'Laporan Lanjutan'] 
    },
    { 
      idLayanan: 'SRV-PKG-03', 
      name: 'Premium', 
      price: 199000, 
      priceLabel: 'Rp 199.000/bln', 
      features: ['Semua Fitur Pro', 'Unlimited Akun', 'Fitur Broadcast Promo', 'Dukungan Prioritas'] 
    }
  ];

  // Handler ini sekarang langsung melakukan redirect tanpa pop-up
  const handleBuatPesanan = (pkg: { name: string; price: number; idLayanan: string }) => {
    // Di aplikasi nyata, di sini kamu melakukan proses fetch POST ke API.
    // Setelah selesai, langsung arahkan ke halaman Tagihan.
    navigate('/tagihan', { 
      state: { 
        newOrder: pkg.name,
        harga: pkg.price,
        idLayanan: pkg.idLayanan
      } 
    });
  };

  return (
    <>
      <div className="w-full flex flex-col items-center pt-8 pb-12">
        
        <div className="text-center max-w-2xl mb-12">
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Paket Langganan GoLaundry</h1>
          <p className="text-slate-500 text-lg">Pilih paket yang sesuai dengan kebutuhan bisnis laundry Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-4">
          {packages.map((pkg) => {
            const isActive = activePackage === pkg.name;
            return (
              <div 
                key={pkg.name} 
                className={`relative flex flex-col bg-white rounded-3xl p-8 transition-all duration-300 ${
                  isActive ? 'border-2 border-blue-600 shadow-xl scale-105 md:z-10' : 'border border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                {isActive && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                    PAKET AKTIF
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{pkg.name}</h3>
                  <div className="text-3xl font-extrabold text-slate-900">{pkg.priceLabel}</div>
                </div>
                
                <ul className="flex-1 space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5"><Check className="w-5 h-5 text-emerald-500 stroke-[3]" /></div>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleBuatPesanan(pkg)}
                  disabled={isActive}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-colors ${
                    isActive 
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {isActive ? 'Paket Saat Ini' : 'Pilih Paket'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LanggananPage;