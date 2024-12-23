import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminHome from "./AdminPages/AdminHome";
import UserHome from "./UserPages/UserHome";
import ErrorPage from "./Pages/ErrorPage";
import DashBoard from "./vendor/DashBoard";
import { DataContext } from "./Datacontext";
import Otp from "./Pages/Otp";
import { Test } from "./Test";

export default function AllRoutes() {
  const { data } = useContext(DataContext);

  let t = localStorage.getItem("token");
  let u = localStorage.getItem("usertype");
  let [token, setToken] = useState(t);
  let [userType, setUsertype] = useState(u);

  useEffect(() => {
    if (data === "logout") {
      t = u = null;
      setToken(null);
      setUsertype(null);
      setRoutes(defaultroutes);
    }
  }, [data]);

  const defaultroutes = (
    <Routes>
      <Route
        path="/"
        element={
          <Login updatetoken={updatetoken} />
          // <Test />
        }
      ></Route>
      <Route
        path="/login"
        element={<Login updatetoken={updatetoken} />}
      ></Route>
      <Route
        path="/register"
        element={<Register updatetoken={updatetoken} />}
      ></Route>
      <Route path="/*" element={<ErrorPage />}></Route>
    </Routes>
  );

  let [routes, setRoutes] = useState(defaultroutes);

  const userroute = (
    <Routes>
      <Route path="/userhome" element={<UserHome />} />
      <Route path="/" element={<UserHome />} />
    </Routes>
  );
  const adminroutes = (
    <Routes>
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/" element={<AdminHome />} />
    </Routes>
  );
  const vendorroutes = (
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/" element={<DashBoard />} />
    </Routes>
  );

  function updatetoken(tok, utype) {
    setToken(tok);
    setUsertype(utype);
    setRoutes(
      !token
        ? defaultroutes
        : userType === "user"
        ? userroute
        : userType === "vendor"
        ? vendorroutes
        : adminroutes
    );
  }

  useEffect(() => {
    setToken(t ? t : null);
    setUsertype(u ? u : null);
    if (token) {
      setRoutes(
        !token
          ? defaultroutes
          : userType === "user"
          ? userroute
          : userType === "vendor"
          ? vendorroutes
          : adminroutes
      );
    } else {
      setRoutes(defaultroutes);
    }
  }, [token, userType]);

  return (
    <>
      {
        <Routes>
          <Route path="/" element={<UserHome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>

          <Route path="/adminhome" element={<AdminHome />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      }
    </>
  );
}

{
  /* <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          {token && userType === "user" ? (
            <Route path="/userhome" element={<UserHome />}></Route>
          ) : null}
          {token && userType === "admin" ? (
            <Route path="/adminhome" element={<AdminHome />}></Route>
          ) : null}
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes> */
}
