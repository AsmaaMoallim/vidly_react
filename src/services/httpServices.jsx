import axios from "axios";
import Config from "../config.json";
import { toast } from "react-toastify";

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token")
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (err) => {
  const expected =
    err.response && err.response.status >= 400 && err.response.status < 500;

  if (!expected) {
    // console.log("logging the error", err);
    toast.error("unexpected error", err.response.data);
  }

  return Promise.reject(err);
});

const endpointbase = Config.apiEndPoint;

export const setEndPointPath = (path) => {
  // return `${endpointbase}${path}`;

  // production
  return `${path}`;
};

export default {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};
