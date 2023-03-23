import React from "react";
import { Outlet } from "react-router-dom";

export const DashbaordLayout: React.FC = (): JSX.Element => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};
