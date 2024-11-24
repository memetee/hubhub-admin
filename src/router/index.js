import React, {Suspense} from "react";
import { createBrowserRouter, Navigate } from 'react-router-dom';
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
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: <Navigate to="home" />
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
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login /> 
          </Suspense>
        )
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
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
]);

export default router;
