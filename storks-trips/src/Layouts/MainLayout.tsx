import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../Navigate/NavBar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
