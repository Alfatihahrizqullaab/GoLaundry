import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const RootLayout: React.FC = () => {
    return(
        <div className="min-h-screen font-sans text-gray-900 bg-[#f8fbff]">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default RootLayout