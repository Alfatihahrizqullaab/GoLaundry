import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/rootLayout";
import Home from "../pages/Home/Home";
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
        element: <Home />
      },
      // Halaman lain seperti login atau dashboard nanti bisa ditambahkan di sini
      // {
      //   path: "/login",
      //   element: <Login />
      // }
    ]
  }
]);