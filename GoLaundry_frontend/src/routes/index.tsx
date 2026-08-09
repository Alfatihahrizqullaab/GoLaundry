import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/layout/landingComponent/rootLayout";
import { DashboardLayout } from "../components/layout/ownerComponent/DashboardLayout";
import { DashboardKasirLayout } from "../components/layout/kasirComponent/DashboardKasirLayout";
import { DashboardAdminLayout } from "../components/layout/adminComponent/DashboardAdminLayout";

import LandingPage from "../pages/LandingPage/LandingPage";

import { RegistrationOwnerPage } from "../pages/DaftarOwnerLaundryPage/DaftarOwnerLaundry";
import { LoginOwnerPage } from "../pages/LoginOwner/LoginOwnerPage";

import { ProfileTokoPage } from "../pages/Owner/ProfileTokoPage/ProfileTokoPage";
import DashboardPage from "../pages/Owner/DashboardPageOwner/DashboardPageOwner";
import KaryawanPage from "../pages/Owner/KaryawanPage/KaryawanPage";
import LayananPage from "../pages/Owner/LayananPage/LayananPage";
import LanggananPage from "../pages/Owner/Langganan/LanggananPage";
import RiwayatPembayaranPage from "../pages/Owner/RiwayatTransaksiPage/RiwayatTransaksiPage";
import LaporanAnalisisPage from "../pages/Owner/LaporanAnalisisPage/LaporanAnalisisPage";
import { TagihanPage } from "../pages/Owner/TagihanPage/TagihanPage";


import DashboardKasirPage from "../pages/Kasir/DashboardKasirPage/DashboardKasirPage";
import TransaksiKasirPage from "../pages/Kasir/TransaksiKasirPage/TransaksiKasirPage";

import DashboardKaryawanPage from "../pages/Karyawan/DashboardKasirPage/DashboardKasirPage";
import DashboardAdminPage from "../pages/admin/DasboardAdminPage/DashboardAdminPage";
import ManajemenTokoPage from "../pages/admin/ManajemenTokoPage.tsx/ManajemenTokoPage";
import ManajemenCustomerPage from "../pages/admin/ManajementCustomer/ManajementCustomer";

// Import file ErrorPage jika kamu sudah membuatnya
// import ErrorPage from "../components/ErrorPage/ErrorPage"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: '/RegistrationOwnerPage',
        element: <RegistrationOwnerPage/>
      },
      {
        path: '/LoginOwnerPage',
        element: <LoginOwnerPage/>
      }
    ]
  },

  // untuk owner
  { 
    
    element: <DashboardLayout/>,
    children: [
      {
        path: "/dashboardOwner",
        element: <DashboardPage/>
      },
      {
        path: "/profileToko",
        element: <ProfileTokoPage /> 
      },
      {
        path: "/Karyawan",
        element: <KaryawanPage></KaryawanPage>
      },
      {
        path: "/Layanan",
        element: <LayananPage/>
      },
      {
        path: "/Langganan",
        element: <LanggananPage/>
      },
      {
        path: "/riwayat-transaksi",
        element: <RiwayatPembayaranPage/>
      },
      {
        path: "/tagihan",
        element: <TagihanPage/>
      },
      {
        path: "/laporan-analisis",
        element: <LaporanAnalisisPage/>
      }
    ]

  },
  {
    element: <DashboardKasirLayout />, 
    children: [
      {
        path: "/kasir/dashboard",
        element: <DashboardKasirPage />
      },
      {
        path: "/kasir/transaksi",
        element: <TransaksiKasirPage />
      }
    ]
  },

  {
    path: "/DashboardKaryawan",
    element: <DashboardKaryawanPage/>
  },


  // ADMIN
  {
    element:<DashboardAdminLayout/>,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashboardAdminPage/>
      },
      {
        path: "/admin/managementToko",
        element: <ManajemenTokoPage/>
      },
      {
        path: "/admin/managementCustomer",
        element: <ManajemenCustomerPage/>
      }
      
    ]
  }
  
]);