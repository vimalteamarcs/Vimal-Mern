import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

export default function Register(props) {
  const navigate = useNavigate();
  const [otpcode, setOtpcode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ddlrole, setDdlrole] = useState([]);

  // Fetch user roles and generate OTP
  useEffect(() => {
    function generateOTP() {
      return Math.floor(100000 + Math.random() * 900000).toString();
    }

    const getUserRoles = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}auth/getAllRoles`
        );
        if (response.data && response.data.length) {
          setDdlrole(response.data);
        }
      } catch (error) {
        console.error("Error fetching user roles:", error);
      }
    };

    getUserRoles();
    setOtpcode(generateOTP());
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required.";
    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Email is invalid.";
    }
    if (!phone.trim()) {
      errors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    if (!userRole || userRole === "null") {
      errors.userRole = "Please select a user role.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setError(errors);
      setLoading(false);
      return;
    }

    setError(null);
    try {
      const body = {
        email,
        name,
        phone,
        status: "1",
        last_login: new Date(),
        token: "",
        otp: otpcode,
        password,
        role: userRole,
      };

      console.log("Submitting form:", body);

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}auth/signup`,
        body
      );

      if (response.status >= 200 && response.status < 300) {
        if (response.data.usertype) {
          navigate("/otp", { state: response.data.userid });
        } else {
          navigate("/");
        }

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("usertype", response.data.usertype);
        localStorage.setItem("otp", response.data.otp);
        if (props) {
          props.updatetoken(response.data.token, response.data.usertype);
        }
      } else {
        throw new Error("Invalid form data");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container text-center">
      <div className="my-5">
        <div className="row">
          <h2>Register Now</h2>
          <div className="row mt-4">
            <Loader start={loading} />
            {error &&
              Object.values(error).map((errMsg, idx) => (
                <p key={idx} style={{ color: "red" }}>
                  {errMsg}
                </p>
              ))}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col m-1 text-start">
                <h5>Name</h5>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col m-1 text-start">
                <h5>Email</h5>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col m-1 text-start">
                <h5>Phone</h5>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col m-1 text-start">
                <h5>Password</h5>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col m-1 text-start">
                <h5>Confirm Password</h5>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col m-1 text-start">
                <h5>Select Role</h5>
                <select
                  className="form-control"
                  id="userRole"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                >
                  <option value="null">Select User Role</option>
                  {ddlrole &&
                    ddlrole.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.role_name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary my-2">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <NavLink to="/">Already Registered?</NavLink>
        </div>
      </div>
    </div>
  );
}
