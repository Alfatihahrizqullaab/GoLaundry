import React, { useState, useEffect } from 'react';
import { X, CreditCard, CheckCircle2 } from 'lucide-react';

export interface PaymentFormData {
  idPembayaran: string;
  idPemesananPaketLangganan: string;
  idLayanan: string;
  metodePembayaran: string;
  statusPembayaran: string;
  nominalPembayaran: number;
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PaymentFormData) => void;
  // Menerima data dari "Pemesanan" yang sudah terbuat sebelumnya
  orderData: { idPemesanan: string; namaPaket: string; harga: number; idLayanan: string } | null;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onSubmit, orderData }) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    idPembayaran: '',
    idPemesananPaketLangganan: '',
    idLayanan: '',
    metodePembayaran: 'DANA',
    statusPembayaran: 'Berhasil',
    nominalPembayaran: 0,
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen && orderData) {
      setFormData({
        idPembayaran: `PAY-${Math.floor(Math.random() * 100000)}`,
        idPemesananPaketLangganan: orderData.idPemesanan,
        idLayanan: orderData.idLayanan,
        metodePembayaran: 'DANA',
        statusPembayaran: 'Berhasil',
        nominalPembayaran: orderData.harga,
      });
      setIsSuccess(false);
    }
  }, [isOpen, orderData]);

  if (!isOpen || !orderData) return null;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => { onSubmit(formData); }, 2000);
  };

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  const isEwallet = ['DANA', 'GoPay', 'OVO'].includes(formData.metodePembayaran);
  const paymentDestination = isEwallet ? '0833232432421' : '430353452234505';
  const destinationLabel = isEwallet ? 'Nomor HP (E-Wallet)' : 'Nomor Rekening (Virtual Account)';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col transition-all">
        
        {isSuccess ? (
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pembayaran Berhasil!</h3>
            <p className="text-gray-500">Pembayaran untuk {orderData.namaPaket} telah diverifikasi.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Selesaikan Pembayaran</h3>
              </div>
              <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"><X className="w-5 h-5" /></button>
            </div>

            <div className="p-5 overflow-y-auto bg-slate-50">
              <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-xl flex justify-between items-center">
                <div>
                  <p className="text-sm text-blue-600 font-semibold mb-1">Tagihan Pemesanan</p>
                  <p className="text-lg font-bold text-slate-800">{orderData.idPemesanan}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-blue-600 font-semibold mb-1">Total Bayar</p>
                  <p className="text-lg font-bold text-slate-800">{formatRupiah(orderData.harga)}</p>
                </div>
              </div>

              <form id="paymentForm" onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Pilih Metode Pembayaran</label>
                  <select name="metodePembayaran" value={formData.metodePembayaran} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm cursor-pointer font-medium">
                    <optgroup label="E-Wallet">
                      <option value="DANA">DANA</option>
                      <option value="GoPay">GoPay</option>
                      <option value="OVO">OVO</option>
                    </optgroup>
                    <optgroup label="Transfer Bank">
                      <option value="BRI">Bank BRI</option>
                      <option value="BCA">Bank BCA</option>
                      <option value="Mandiri">Bank Mandiri</option>
                    </optgroup>
                  </select>
                </div>

                <div className="p-4 bg-gray-100 border border-gray-200 rounded-xl">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Tujuan Pembayaran</p>
                  <p className="text-sm text-gray-600 mb-2">{destinationLabel}:</p>
                  <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg border border-gray-200">
                    <span className="font-mono font-bold text-lg text-slate-800">{paymentDestination}</span>
                    <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-md">SALIN</span>
                  </div>
                </div>
              </form>
            </div>

            <div className="p-5 border-t border-gray-100 bg-white flex justify-end gap-3 rounded-b-2xl">
              <button type="button" onClick={onClose} className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm">Nanti Saja</button>
              <button type="submit" form="paymentForm" className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-md shadow-blue-600/20 text-sm">Saya Sudah Bayar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};