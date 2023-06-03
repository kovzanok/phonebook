import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:3000/" });

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("phonebook-token");
  return config;
});

export default instance;