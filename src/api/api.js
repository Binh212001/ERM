import AxiosConfig from "./Axiosconfig";
const api = {
  getTopCustomer: () => {
    const url = "/topcustomer";
    return AxiosConfig.get(url);
  },
  getOrder: () => {
    const url = "/order";
    return AxiosConfig.get(url);
  },
  postUser: (value) => {
    const url = "/costomer";
    return AxiosConfig.post(url, value);
  },
  getCustomer: () => {
    const url = "/costomer";
    return AxiosConfig.get(url);
  },
};

export default api;
