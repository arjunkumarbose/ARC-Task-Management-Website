import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="font-popopins container mx-auto min-h-screen px-4">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
