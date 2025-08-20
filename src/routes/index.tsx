import { createBrowserRouter } from "react-router";
import { Dashboard } from "../pages/app/Dashboard";
import { SignIn } from "../pages/auth/sign-in";
import { AuthLayout } from "../pages/app/_layouts/auth";
import { AppLayout } from "../pages/app/_layouts/app";
import { RegisterVisitors } from "../pages/app/RegisterVisitors";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/cadastro",
        element: <RegisterVisitors />,
      },
    ],
  },

  {
    path: "/sign-in",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);
