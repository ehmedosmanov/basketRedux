import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        inc: (state) => {
            state.value += 1
        },
        dec: (state) => {
            state.value -= 1
        }
    }
})

export const {inc,dec} = counterSlice.actions

export default counterSlice.reducer