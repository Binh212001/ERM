import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../api/api";

export const getTopCustomer = createAsyncThunk(
  "getTopCustomer/TopCustomerSlice",
  async () => {
    try {
      const res = await api.getTopCustomer();
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

const TopCustomerSlice = createSlice({
  name: "TopCustomerSlice",
  initialState,
  extraReducers: {
    [getTopCustomer.pending]: (state) => {
      state.status = "pending";
    },
    [getTopCustomer.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.customer = payload;
    },
    [getTopCustomer.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default TopCustomerSlice.reducer;
