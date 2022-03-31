import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./CustomerSlice";
import OrderSlice from "./OrderSlice";
import TopCustomerSlice from "./TopCustomerSlice";

const store = configureStore({
  reducer: {
    TopCustomer: TopCustomerSlice,
    Order: OrderSlice,
    Customer: CustomerSlice,
  },
});

export default store;
