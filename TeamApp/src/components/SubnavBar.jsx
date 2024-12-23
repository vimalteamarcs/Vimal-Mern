import React from "react";

export default function SubnavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Restro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Streams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shows
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ListYourShow
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Corporates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Offers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
