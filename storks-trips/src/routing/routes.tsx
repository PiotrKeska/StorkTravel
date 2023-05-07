import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Layouts/mainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default router;
