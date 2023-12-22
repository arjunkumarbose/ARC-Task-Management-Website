// import { Outlet } from "react-router-dom";
import DashboardContent from "../Component/DashboardContent/DashboardContent";
import Sidebar from "../Component/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="container mx-auto ">
      <div className="lg:flex">
        <Sidebar />
        {/* Add your main content here */}
        <div className="flex-1 px-3 py-2">
          {/* Your main content goes here */}
          <DashboardContent/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
