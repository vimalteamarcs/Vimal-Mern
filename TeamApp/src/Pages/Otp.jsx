import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import OtpInput from "react-otp-input";
export default function Otp() {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [otpfromDB, setOtpfromDB] = useState("");

  const handleVerify = () => {
    if (otpfromDB.userotp.toString() === otp.toLocaleString()) {
      alert(`Verifed OTP`);
      navigate("/dashboard");
    } else {
      alert(`OTP did't match`);
    }
  };
  const getotpfromDB = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}auth/getotp/${location.state}`
      );
      console.log(res.data);
      if (res.data != null) {
        setOtpfromDB(res.data);
      }
    } catch (error) {
      console.error(
        "Error fetching OTP:",
        error.response?.data || error.message
      );
    }
  };
  useEffect(() => {
    getotpfromDB();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-sm" style={{ width: "24rem" }}>
          <div className="card-body text-center">
            <h5 className="card-title mb-4">OTP Verification</h5>
            <p className="card-text text-muted">
              Please enter the 6-digit OTP sent to your registered Email.
            </p>
            <div className="m-3 d-flex justify-content-center">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <button
              className="btn btn-primary w-100"
              onClick={handleVerify}
              disabled={otp.length !== 6}
            >
              Verify OTP
            </button>
            {/* <div className="mb-3">
              <input
                type="text"
                className="form-control text-center"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
              />
            </div>
            <button
              className="btn btn-primary w-100"
              onClick={handleVerify}
              disabled={otp.length !== 6}
            >
              Verify OTP
            </button>
            <p className="mt-3">
              Didn't receive the OTP?{" "}
              <button
                className="btn btn-link p-0 text-decoration-none"
                onClick={() => alert("Resending OTP...")}
              >
                Resend OTP
              </button>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
