import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const getCustomer = createAsyncThunk(
  "getCustomer/CustomerSlice",
  async () => {
    try {
      const res = await api.getCustomer();
      return res;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  customer: [],
  status: null,
};

const CustomerSlice = createSlice({
  name: "CustomerSlice",
  initialState,
  reducers: {
    addUser(state, { payload }) {
      state.customer.push(payload);
      api.postUser(payload);
    },
  },
  extraReducers: {
    [getCustomer.pending]: (state) => {
      state.status = "pending";
    },
    [getCustomer.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.customer = payload;
    },
    [getCustomer.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default CustomerSlice.reducer;
export const { addUser } = CustomerSlice.actions;
