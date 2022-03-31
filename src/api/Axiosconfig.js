import axios from "axios";

const AxiosConfig = axios.create({
  baseURL: "https://6242b882d126926d0c55c7bf.mockapi.io",
  header: "application/json",
});

AxiosConfig.interceptors.response.use((res) => {
  return res.data;
});

AxiosConfig.interceptors.request.use((config) => {
  config.headers.post["header1"] = "value";
  return config;
});

export default AxiosConfig;
