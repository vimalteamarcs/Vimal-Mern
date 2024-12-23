 import axios from "axios";
import { addData, removeData } from "../Features/getData/getDataSlice";
export async function updatedata(dispatch) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return dispatch(addData(response.data));
  }

  