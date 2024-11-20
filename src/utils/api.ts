import axios from "axios";

import { toast } from "react-toastify";

const BASEURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

let APIKIT = axios.create({
  baseURL: BASEURL,
  timeout: 90000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

APIKIT.interceptors.response.use(undefined, (error) => {
  const statusCode = error.response ? error.response.status : null;

  if (statusCode === 404) {
    return Promise.reject(error);
  }
  if (
    statusCode === 400 ||
    statusCode === 401 ||
    statusCode === 403 ||
    statusCode === 404 ||
    statusCode === 409
  ) {
    toast.error(error.response.data.message, {
      position: "top-center",
      theme: "colored",
    });
  } else {
    toast.error("Something went wrong", {
      position: "top-center",
      theme: "colored",
    });
  }
});

export const authService = {
  signup: (payload: object) => {
    return APIKIT.post("/user/register", payload);
  },
  activate: (payload: object) => {
    return APIKIT.post("/user/activate", payload);
  },
  login: (payload: object) => {
    return APIKIT.post("/user/login", payload);
  },
};
