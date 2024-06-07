/** @format */

import axios from "axios";

const env = () => {
  return axios.create({
    //baseURL: `http://localhost:8008/api/`,
     baseURL: `https://api.tejipaz.com/api/`,
  });
};

export const api = env();
