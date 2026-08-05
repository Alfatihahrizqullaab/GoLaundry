import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/layout/landingComponent/rootLayout";
import LandingPage from "../pages/LandingPage/LandingPage";

import { RegistrationOwnerPage } from "../pages/DaftarOwnerLaundryPage/DaftarOwnerLaundry";
import { LoginOwnerPage } from "../pages/LoginOwner/LoginOwnerPage";

import { ProfileTokoPage } from "../pages/ProfileTokoPage/ProfileTokoPage";
import DashboardPage from "../pages/DashboardPageOwner/DashboardPageOwner";
import KaryawanPage from "../pages/KaryawanPage/KaryawanPage";
import LayananPage from "../pages/LayananPage/LayananPage";
import LanggananPage from "../pages/Langganan/LanggananPage";
import RiwayatPembayaranPage from "../pages/RiwayatTransaksiPage/RiwayatTransaksiPage";
import LaporanAnalisisPage from "../pages/LaporanAnalisisPage/LaporanAnalisisPage";
import { TagihanPage } from "../pages/TagihanPage/TagihanPage";
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
]);