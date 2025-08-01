import { createSlice } from "@reduxjs/toolkit";

const initialState = { val: 0 };

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    deposit: (state) => {
      state.val += 100; // RTK allows direct mutation (uses Immer under the hood)
    },
    withdraw: (state) => {
      state.val -= 100;
    },
  },
});

// Export actions
export const { deposit, withdraw } = bankSlice.actions;

// Export reducer to use in store
export default bankSlice.reducer;