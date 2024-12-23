import React from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide text-bg-secondary"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="container text-center">
              <div className="row">
                <div className="col p-2 rounded">
                  <img
                    src="assets/img/examples/product1.jpg"
                    className="img-fluid"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                  />
                </div>

                <div className="col p-2 rounded">
                  <img
                    src="assets\img\examples\product2.jpg"
                    className="d-block w-100 img-fluid"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                  />
                </div>
                <div className="col p-2 rounded">
                  <img
                    src="assets\img\examples\product3.jpg"
                    className="d-block w-100 img-fluid"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="container text-center">
              <div className="row">
                <div className="col p-2 rounded">
                  <img
                    src="assets/img/examples/product1.jpg"
                    className="d-block w-100 img-fluid"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                  />
                </div>

                <div className="col p-2 rounded">
                  <img
                    src="assets\img\examples\product2.jpg"
                    className="d-block w-100 img-fluid"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                  />
                </div>
                <div className="col p-2 rounded">
                  <img
                    src="assets\img\examples\product3.jpg"
                    className="d-block w-100 img-fluid"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container text-center">
              <div className="row">
                <div className="col p-2 rounded">
                  <img
                    src="assets\img\examples\product3.jpg"
                    className="d-block w-100 img-fluid"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                  />
                </div>
                <div className="col p-2 rounded">
                  <img
                    src="assets\img\examples\product2.jpg"
                    className="d-block w-100 img-fluid"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                  />
                </div>
                <div className="col p-2 rounded">
                  <img
                    src="assets/img/examples/product1.jpg"
                    className="d-block w-100 img-fluid"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
