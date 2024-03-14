import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  transformResponse: [
    function (response) {
      const data = JSON.parse(response);

      return data;
    },
  ],
});

instance.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
