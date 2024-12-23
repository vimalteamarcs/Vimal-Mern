import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-danger">
        <div
          className="card text-center shadow-lg p-4"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <div className="card-body">
            <h2 className="card-title text-danger">
              Oops! Something went wrong
            </h2>
            <p className="card-text text-danger">
              {"An unexpected error has occurred."}
            </p>
            <button className="btn btn-danger" onClick={handleback}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
