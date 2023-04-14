import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/FormSlice";
import { formActions } from "./slices/FormSlice";

const store = configureStore({
    reducer: {form: formReducer}
})

export default store;
export { formActions };