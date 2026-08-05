import React, { useState } from 'react';
import { Search, CreditCard } from 'lucide-react';
import { PaymentModal, type PaymentFormData } from '../../../features/authOwnerLaundry/langganan/PaymentModal';

export const TagihanPage: React.FC = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<{ idPemesanan: string; namaPaket: string; harga: number; idLayanan: string } | null>(null);

  // Data pesanan yang masih "Menunggu Pembayaran"
  const [orders, setOrders] = useState([
    {
      idPemesananPaketLangganan: 'ORD-89234',
      idLayanan: 'SRV-PKG-02',
      namaPaket: 'Pro',
      tanggalPemesanan: '04 Ags 2026, 14:30',
      status: 'Menunggu Pembayaran',
      nominalBayar: 99000,
    }
  ]);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  const handleLanjutBayar = (order: any) => {
    setSelectedOrder({
      idPemesanan: order.idPemesananPaketLangganan,
      namaPaket: order.namaPaket,
      harga: order.nominalBayar,
      idLayanan: order.idLayanan
    });
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSubmit = (data: PaymentFormData) => {
    // Menghapus data dari daftar tagihan (karena sudah dibayar)
    setOrders(prev => prev.filter(ord => ord.idPemesananPaketLangganan !== selectedOrder?.idPemesanan));
    setIsPaymentModalOpen(false);
    
    // Di aplikasi nyata, data ini akan dilempar ke tabel database "PembayaranPaketLangganan"
    // sehingga akan muncul otomatis di halaman "Riwayat Transaksi"
  };

  return (
    <>
      <div className="w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Tagihan Aktif</h2>
            <p className="text-sm text-slate-500 mt-1">Selesaikan pembayaran untuk mengaktifkan paket Anda.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/50 border-b border-gray-100">
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">ID Pemesanan</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Paket / Layanan</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Tagihan</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">Status</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gray-500 font-medium">
                      Horee! Tidak ada tagihan yang belum dibayar.
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.idPemesananPaketLangganan} className="hover:bg-slate-50/80 transition-colors border-b border-gray-50">
                      <td className="py-4 px-6 font-bold text-slate-800 text-sm">{order.idPemesananPaketLangganan}</td>
                      <td className="py-4 px-6">
                        <span className="font-semibold text-blue-600 block text-sm">{order.namaPaket}</span>
                        <span className="text-xs text-slate-500">{order.tanggalPemesanan}</span>
                      </td>
                      <td className="py-4 px-6 text-sm font-bold text-slate-800">{formatRupiah(order.nominalBayar)}</td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button 
                          onClick={() => handleLanjutBayar(order)}
                          className="flex items-center justify-center gap-1.5 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-xs font-bold shadow-sm mx-auto"
                        >
                          <CreditCard className="w-4 h-4" /> Bayar Sekarang
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onSubmit={handlePaymentSubmit}
        orderData={selectedOrder}
      />
    </>
  );
};