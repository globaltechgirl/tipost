import { createBrowserRouter, Navigate } from "react-router-dom";
import PrivateLayout from "@/component/layout/privateLayout";
import Home from "@/pages/home";
import Posts from "@/pages/posts";
import AuthGuard from "@/router/authGuard";
import { ROUTES } from "@/utils/constants";

/**
 * Application Router
 *
 * Defines all routes for the app.
 * - AuthGuard wraps all routes that may require authentication.
 * - PrivateLayout contains the main layout for authenticated pages.
 * - Redirects unknown routes to HOME.
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthGuard />, 
    children: [
      {
        element: <PrivateLayout />, //
        children: [
          { path: "", element: <Navigate to={ROUTES.HOME} replace /> }, 
          { path: ROUTES.HOME.replace("/", ""), element: <Home /> },   
          { path: ROUTES.POST.replace("/", ""), element: <Posts /> },  
          { path: "*", element: <Navigate to={ROUTES.HOME} replace /> }, 
        ],
      },
    ],
  },
]);

export default router;
