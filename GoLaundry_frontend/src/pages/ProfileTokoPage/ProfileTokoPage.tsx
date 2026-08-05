import React, { useState } from 'react';
import { Store } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/ownerComponent/DashboardLayout';

export const ProfileTokoPage: React.FC = () => {
    const [ formData, setFromData ] = useState({
        namaToko: 'Budi Laundry',
        nomorTelepon: '081234567890',
        alamat: 'Jl. Sudirman No. 12, Jakarta Selatan',
        jamBuka: '08:00',
        jamTutup: '20:00'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFromData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Data yang akan disubmit:', formData);
        alert('Profil toko berhasil diperbarui!');
    }

    return(
        <DashboardLayout title='Profile Toko'>
            <div className="max-w-8xl mx-auto w-full">
                <div className='bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100/50'>
                    {/* Header Profil (Logo & Info) */}
                    <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-gray-100 mb-8'>
                        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 rounded-full flex items-center justify-center border-[3px] border-gray-100/50 shadow-sm shrink-0">
                            <Store className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
                        </div>

                        <div className='text-center sm:text-left flex flex-col justify-center h-full pt-2'>
                            <h2 className="text-2xl font-bold text-slate-800 mb-1">{formData.namaToko}</h2>
                            <p className="text-sm font-medium text-slate-500 mb-4">Premium Member sejak 2023</p>
                            <button 
                                type="button"
                                className="px-5 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors w-fit mx-auto sm:mx-0"
                            >
                                Ubah Logo
                            </button>
                        </div>
                    </div>

                    {/* Form edit data toko */}
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Nama Toko</label>
                                <input 
                                    type="text" 
                                    name="namaToko"
                                    value={formData.namaToko}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm text-slate-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Nomor Telepon</label>
                                <input 
                                    type="text" 
                                    name="nomorTelepon"
                                    value={formData.nomorTelepon}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm text-slate-800"
                                />
                            </div>   
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Alamat Lengkap</label>
                            <textarea 
                                name="alamat"
                                rows={3}
                                value={formData.alamat}
                                onChange={handleChange}
                                className="w-full sm:h-40 px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm text-slate-800 resize-y"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Jam Operasional</label>
                                    <div className="flex items-center gap-3">
                                        {/* Input Jam Buka */}
                                        <input 
                                            type="time" 
                                            name="jamBuka"
                                            value={formData.jamBuka}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm text-slate-800"
                                        />
                                        <span className="text-sm font-semibold text-slate-400">s/d</span>
                                        {/* Input Jam Tutup */}
                                        <input 
                                            type="time" 
                                            name="jamTutup"
                                            value={formData.jamTutup}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm text-slate-800"
                                        />
                                    </div>
                                </div>
                            <div className="pt-6 flex justify-end">
                                <button 
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
                                >
                                    Simpan Perubahan
                                </button>
                            </div>
                        </div>
                            
                    </form>
                </div>
            </div>
        </DashboardLayout>
    )
}