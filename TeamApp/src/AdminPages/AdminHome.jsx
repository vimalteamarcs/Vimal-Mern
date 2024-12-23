import React, { useContext, useEffect, useState } from "react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import { DataContext } from "../Datacontext";
export default function AdminHome() {
  const navigate = useNavigate();
  const { setData } = useContext(DataContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const usertype = localStorage.getItem("usertype");
    if (!token && usertype != "admin") {
      navigate("/");
    }

    setData("");
  }, []);

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <UserNavbar />
        <div className="row">
          <div className="col">
            <h2 className="text-center mt-5">AdminHome</h2>
          </div>
        </div>
      </div>
    </>
  );
}
