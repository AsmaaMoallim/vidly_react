import axios from "axios";
// import { toast } from "react-toastify";
axios.interceptors.response.use(null, (err) => {
  const expected =
    err.response && err.response.status >= 400 && err.response.statu < 500;

  if (!expected) {
    console.log("logging the error", err);
    // toast.error("unexpected error");
  }

  return Promise.reject(err);
});

export default {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};
