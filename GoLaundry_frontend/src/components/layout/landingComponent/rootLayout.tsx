import React from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const RootLayout: React.FC = () => {
    const { pathname } = useLocation();

    // Efek ini akan berjalan otomatis SETIAP KALI pathname (halaman) berubah
    useEffect(() => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Pakai 'instant' agar tidak ada animasi geser lambat saat ganti halaman
        });
    }, [pathname]);

    return(
        <div className="min-h-screen font-sans text-gray-900 bg-[#f8fbff]">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default RootLayout