import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});
request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    const errorMsg = {
      code: "5001",
      errMsg: err,
    };
    return Promise.reject(errorMsg);
  }
);

export default request;
