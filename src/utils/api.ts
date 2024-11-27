import axios from "axios";

import { handlePopUp } from "./function";

const BASEURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

const APIKIT = axios.create({
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
    handlePopUp(error.response.data.message, "error");
  } else {
    handlePopUp("Something went wrong", "error");
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
