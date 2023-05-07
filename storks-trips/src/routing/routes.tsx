import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/mainLayout";
import Trips from "../TripsBox/Trips";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "trips", element: <Trips /> }],
  },
]);

export default router;
