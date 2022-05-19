import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/NotFound";
import Guess from "../pages/guess";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login/*",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
  {
    path: "/guess",
    layout: LayoutAdmin,
    component: Guess,
  },
];

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const RouterNotFound = [
  {
    path: "*",
    layout: LayoutBasic,
    component: NotFound,
  },
];

const routes = [...routesAdmin, ...routesClient, ...RouterNotFound];
export default routes;
