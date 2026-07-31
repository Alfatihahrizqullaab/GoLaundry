import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/rootLayout";
import LandingPage from "../pages/LandingPage/LandingPage";
import { RegistrationOwnerPage } from "../pages/DaftarOwnerLaundryPage/DaftarOwnerLaundry";
import { LoginOwnerPage } from "../pages/LoginOwner/LoginOwnerPage";
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
      // {
      //   path: "/login",
      //   element: <Login />
      // }
    ]
  }
]);