import { lazy } from "react";

const HomePage = lazy(() => import("@src/pages/Home"));
const LoginPage = lazy(() => import("@src/pages/Login"));
const RegisterPage = lazy(() => import("@src/pages/Register"));

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
];

export default routes;
