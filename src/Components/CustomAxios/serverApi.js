import axios from "axios";

axios.defaults.withCredentials = true;

const baseURL = "http://localhost:5000/";

const ServerApi = axios.create({
  baseURL,
  withCredentials: true,
});

export default ServerApi;
