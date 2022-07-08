import axios from "axios";
import Config from "../config.json";
import { toast } from "react-toastify";
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
  return `${endpointbase}${path}`;
};

export default {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};
