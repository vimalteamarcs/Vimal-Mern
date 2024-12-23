import React from "react";

import Sidebar from "../components/Sidebar";
import Mainpanel from "../components/Mainpanel";
export default function DashBoard() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Mainpanel title="vimal" />
      </div>
    </>
  );
}
