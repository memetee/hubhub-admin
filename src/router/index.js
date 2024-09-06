import React from "react";
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthRoute from "./AuthRoute";
const Login = React.lazy(() => import("@/pages/login/index"));
const SignUp = React.lazy(() => import("@/pages/signup/index"));
const Home = React.lazy(() => import("@/pages/main/home"));
const Carousel = React.lazy(() => import("@/pages/main/carousel"));
const Dynamic = React.lazy(() => import("@/pages/main/dynamic"));
const Error = React.lazy(() => import('@/pages/error/index'))
const Main = React.lazy(() => import('@/pages/main/index'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><Main /></AuthRoute>,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Navigate to="/home" />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: "carousel",
        element: <Carousel />
      },
      {
        path: "/dynamic",
        element: <Dynamic />
      },
      {
        path: "/roles",
        element: <Home />
      },
      {
        path: "/tasks",
        element: <Home />
      },
      {
        path: "/option10",
        element: <Home />
      },
    ]
  },
  {
    path: "/login",
    element:<AuthRoute type="login"><Login /></AuthRoute>,
  },
  {
    path: "/signup",
    element: <AuthRoute type="signup"><SignUp /></AuthRoute>,
  },
]);

export default router;
