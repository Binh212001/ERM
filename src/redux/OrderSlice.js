import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../api/api";

export const getOrder = createAsyncThunk("getOrder/OrderSlice", async () => {
  try {
    const res = await api.getOrder();
    return res;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  order: [],
  status: null,
};

const OrderSlice = createSlice({
  name: "OrderSlice",
  initialState,
  extraReducers: {
    [getOrder.pending]: (state) => {
      state.status = "pending";
    },
    [getOrder.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.order = payload;
    },
    [getOrder.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default OrderSlice.reducer;
