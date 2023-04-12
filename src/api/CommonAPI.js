import axios from "axios";

export const CommonAPI = axios.create({
    baseURL: process.env.REACT_APP_SERVER_HOST,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});


CommonAPI.interceptors.request.use(
  function (config){
        console.log(config);
  }
);
