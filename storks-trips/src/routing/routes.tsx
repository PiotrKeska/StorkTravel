import { createBrowserRouter } from "react-router-dom";

import Trips from "../TripsBox/Trips";
import Home from "../Home/Home";
import Opinions from "../Opinions/Opinions";
import Contact from "../Contact/Contact";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "trips", element: <Trips /> },
      { path: "opinions", element: <Opinions /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
