import { lazy } from "react";

function lazyLoad(name: string) {
  return lazy(() => import(`@src/pages/${name}`));
}

const HomePage = lazyLoad("Home");
const LoginPage = lazyLoad("Login");
const RegisterPage = lazyLoad("Register");

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
