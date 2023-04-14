import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        formData: ""
    },
    reducers: {
        submitForm(state, action) {
            state.formData = action.payload
        }
    }
})

export const formActions = formSlice.actions;
export default formSlice.reducer;