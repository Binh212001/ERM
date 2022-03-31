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
};

export default api;
