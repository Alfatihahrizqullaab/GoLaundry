import React from "react";
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
    return(
        <div className="min-h-screen font-sans text-gray-900 bg-[#f8fbff]">
            <Outlet></Outlet>
        </div>
    )
}

export default RootLayout