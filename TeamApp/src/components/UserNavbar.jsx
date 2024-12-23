import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../Datacontext";
import Loader from "./Loader";
export default function Navbar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setData } = useContext(DataContext);
  const handlelogout = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.clear();
      setData("logout");

      navigate("/login");
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      <Loader start={loading} />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
            UserNavbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  About us
                </NavLink>
              </li>
            </ul>
            <button className="btn btn-danger ms-auto" onClick={handlelogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
