import React, { useContext, useEffect, useState } from "react";

import SubnavBar from "../components/SubnavBar";
import Carousel from "../components/Carousel";

export default function UserHome() {
  return (
    <>
      <SubnavBar />
      <Carousel />
      <div className="row">
        <div className="col-2">
          <div class="form-floating m-3 p-0">
            <input
              type="email"
              class="form-control p-0 m-0"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
        </div>
      </div>
    </>
  );
}
