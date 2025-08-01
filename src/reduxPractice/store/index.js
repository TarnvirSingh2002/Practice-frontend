import { configureStore } from "@reduxjs/toolkit";
import redy from "../reducers/index"
const store = configureStore({
    reducer:{
        bank:redy
    }
});
export default store;