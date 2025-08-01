import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
  name: "bank",
  initialState : { val: 0 },
  reducers: {
    deposit: (state) => {
      state.val += 100; 
    },
    withdraw: (state) => {
      state.val -= 100;
    },
  },
});

export const { deposit, withdraw } = bankSlice.actions;

export default bankSlice.reducer;