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

const addMinusSlice = createSlice({
  name:"addMinus",
  initialState:{ value:0 },
  reducers:{
    addition:(state)=>{
      state.value+=1;
    },
    subtraction:(state)=>{
      state.value-=1;
    }
  }
});

export const {addition, subtraction} = addMinusSlice.actions;

export const school = addMinusSlice.reducer;

export const { deposit, withdraw } = bankSlice.actions;

export default bankSlice.reducer;