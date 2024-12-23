import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setTimeout(() => {
      GetToken();
      setLoading(false);
    }, 3000);
  }

  async function GetToken() {
    try {
      const bod = { email, password };
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}auth/login`,
        bod
      );

      if (res.status >= 200 && res.status < 300) {
        setData(res.data);

        if (res.data.usertype === "user") {
          navigate("/userhome");
        } else if (res.data.usertype === "admin") {
          navigate("/adminhome");
        } else if (res.data.usertype === "vendor") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("usertype", res.data.usertype);
        props ? props.updatetoken(res.data.token, res.data.usertype) : null;
      } else {
        setError("Invalid Email or Password");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "An error occurred."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <h2 className="text-capitalize">Login Now</h2>
          <div className="row mt-4">
            {" "}
            {/* {loading && <p>Loading...</p>} */}
            <Loader start={loading} />
            {error && <p style={{ color: "red" }}> {error}</p>}
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row mb-3">
              <div className="col m-1 text-start">
                <h5>Email</h5>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col m-1 text-start">
                <h5>Password</h5>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="passwordHelp"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          <div className="row mt-3">
            <div className="col-12"></div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <NavLink to={"/Register"}>SignUp?</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
