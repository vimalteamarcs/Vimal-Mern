import React, { createContext, useContext, useState } from "react";
import AllRoutes from "./AllRoutes";
import { DataContext } from "./Datacontext";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [data, setData] = useState("hey");
  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}
