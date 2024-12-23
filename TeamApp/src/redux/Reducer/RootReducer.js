import { combineReducers } from "@reduxjs/toolkit";
import getdataReducer from "../Features/getData/getDataSlice";
const rootReducer = combineReducers({
    getdata: getdataReducer,
    
  });
  export default rootReducer;