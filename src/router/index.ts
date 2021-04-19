import Home from "@src/pages/Home";
import Login from "@src/pages/Login";
import Register from "@src/pages/Register";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

export default routes;
