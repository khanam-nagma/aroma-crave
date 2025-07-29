import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../App";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Body from "../Components/Body";
import Error from "../Components/Error";
import RestaurantMenu from "../Components/RestaurantMenu";
import Cart from '../Components/cart'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],

    errorElement: <Error />,
  },
]);

const RouteConfig = () => <RouterProvider router={appRouter} />;

export default RouteConfig;
