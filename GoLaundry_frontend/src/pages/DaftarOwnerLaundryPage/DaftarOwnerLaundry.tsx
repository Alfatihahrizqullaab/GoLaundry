import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplets } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { AuthSidebar } from '../../features/authOwnerLaundry/AuthSidebar/AuthSidebar';
import { StoreInfoStep } from '../../features/authOwnerLaundry/StoreInfoStep/StoreInfoStep';
import { AccountInfoStep } from '../../features/authOwnerLaundry/AccountInfoStep/AccountInfoStep';

export function RegistrationOwnerPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State Koordinat
  const [latitude, setLatitude] = useState<string>("-2.990934");
  const [longitude, setLongitude] = useState<string>("104.756554");
  const [isLocating, setIsLocating] = useState(false);

  const handleGetLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setLatitude("-2.983333");
      setLongitude("104.766667");
      setIsLocating(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      navigate('/success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sisi Kiri (Sidebar Info) */}
      <AuthSidebar step={step} />

      {/* Sisi Kanan (Form Wrapper) */}
      <div className="w-full lg:w-7/12 p-6 md:p-12 lg:p-16 flex items-center justify-center relative">
        

        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-gray-200 p-8 overflow-hidden">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {step === 1 ? 'Daftarkan Toko Laundry Anda' : 'Buat Akun Pemilik'}
            </h2>
            <p className="text-gray-500 text-sm">
              {step === 1 
                ? 'Lengkapi detail alamat dan titik lokasi agar pelanggan mudah menemukan Anda.' 
                : 'Selangkah lagi. Buat kredensial untuk masuk ke sistem manajemen Anda.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <StoreInfoStep 
                  onNext={() => setStep(2)} 
                  latitude={latitude}
                  longitude={longitude}
                  isLocating={isLocating}
                  onGetLocation={handleGetLocation}
                />
              )}

              {step === 2 && (
                <AccountInfoStep 
                  onBack={() => setStep(1)} 
                  isSubmitting={isSubmitting} 
                />
              )}
            </AnimatePresence>
          </form>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Sudah memiliki akun? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Login di sini.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}