import React, {Suspense} from "react";
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthRoute from "./AuthRoute";
const Login = React.lazy(() => import("@/pages/login/index"));
const SignUp = React.lazy(() => import("@/pages/signup/index"));
const AdminHome = React.lazy(() => import("@/pages/main/home"));
const Carousel = React.lazy(() => import("@/pages/main/carousel"));
const Dynamic = React.lazy(() => import("@/pages/main/dynamic"));
const TaskManage = React.lazy(() => import('@/pages/main/admin_menu/task_manage'))
const Error = React.lazy(() => import('@/pages/error/index'))
const Main = React.lazy(() => import('@/pages/main/index'))
const Loading = React.lazy(() => import('components/loading'));
const Home = React.lazy(() => import('@/pages/home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Home></Home>
      </Suspense>
    ),
    errorElement: <Error />
  },
  {
    path: '/admin',
    element: (
      <Suspense fallback={<Loading />}>
        <AuthRoute>
          <Main />
        </AuthRoute>
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: <Navigate to="/admin/home" />
      },
      {
        path: 'home',
        element: (
          <Suspense fallback={<Loading />}>
            <AdminHome />
          </Suspense>
        )
      },

      {
        path: "carousel",
        element: (
          <Suspense fallback={<Loading />}>
            <Carousel />
          </Suspense>
        )
      },
      {
        path: "dynamic",
        element: (
          <Suspense fallback={<Loading />}>
            <Dynamic />
          </Suspense>
        )
      },
      {
        path: "menu",
        children: [
          {
            path: 'task-manage',
            element: (
              <Suspense fallback={<Loading />}>
                <TaskManage />
              </Suspense>
            )
          },
        ]
      }
    ]
  },
  {
    path: "/admin/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login /> 
      </Suspense>
    )
  },
  {
    path: "/admin/signup",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUp />
      </Suspense>
    )
  }
]);

export default router;
