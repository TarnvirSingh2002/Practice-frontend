import { configureStore } from "@reduxjs/toolkit";
import redy, { school } from "../reducers/index"
const store = configureStore({
    reducer:{
        bank:redy,
        school
    }
});
export default store;