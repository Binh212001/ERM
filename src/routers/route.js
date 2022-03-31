import Analytics from "../pages/Analytics";
import Categories from "../pages/Categories";
import Customer from "../pages/Customer";
import DashBoard from "../pages/DashBoard";
import Discount from "../pages/Discount";
import Inventory from "../pages/Inventory";
import Login from "../pages/Login";
import Order from "../pages/Order";
import Product from "../pages/Product";

const routes = [
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/costomer",
    element: <Customer />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/discount",
    element: <Discount />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
