import { configureStore } from "@reduxjs/toolkit";
import OrderSlice from "./OrderSlice";
import TopCustomerSlice from "./TopCustomerSlice";

const store = configureStore({
  reducer: {
    TopCustomer: TopCustomerSlice,
    Order: OrderSlice,
  },
});

export default store;
