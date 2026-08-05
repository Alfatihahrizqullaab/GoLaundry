import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export const DashboardLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    // Efek ini akan berjalan otomatis SETIAP KALI pathname (halaman) berubah
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    // Bikin title dinamis simpel berdasarkan path
    let currentTitle = "Dashboard";
    if (pathname.includes("profileToko")) currentTitle = "Profil Toko";
    else if (pathname.includes("Karyawan")) currentTitle = "Karyawan";
    else if (pathname.includes("Layanan")) currentTitle = "Layanan";
    else if (pathname.includes("Langganan")) currentTitle = "Langganan";
    else if (pathname.includes("riwayat-transaksi")) currentTitle = "Riwayat Transaksi";
    else if (pathname.includes("tagihan")) currentTitle = "Tagihan";
    else if (pathname.includes("laporan-analisis")) currentTitle = "Laporan & Analisis";

    return (
        <div className="min-h-screen bg-slate-50/50 flex">
            {/* Sidebar Navigation */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main Container */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Navbar onMenuClick={() => setIsSidebarOpen(true)} title={currentTitle} />
                
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};