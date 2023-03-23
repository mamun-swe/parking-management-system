import { Navigate, useRoutes } from "react-router-dom";
import { DashbaordLayout } from "layouts/dashboard.layout";
import { Dashboard } from "pages/dashboard";
import { VehicleIndex } from "pages/vehicle";
import { VehicleStore } from "pages/vehicle/store";
import { VehicleEdit } from "pages/vehicle/edit";
import { FourOFour } from "pages/404";
import { ToastContainer } from "react-toastify";

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: "/",
    element: <DashbaordLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "vehicle", element: <VehicleIndex /> },
      { path: "vehicle/create", element: <VehicleStore /> },
      { path: "vehicle/edit/:id", element: <VehicleEdit /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <FourOFour /> },
    ],
  };

  const routing = useRoutes([mainRoutes]);
  return (
    <>
      {routing} 
      <ToastContainer />
    </>
  );
};

export default App;
