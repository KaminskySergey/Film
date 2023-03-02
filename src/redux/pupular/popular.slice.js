import { createSlice } from "@reduxjs/toolkit";
import { getPopularThunk } from "./popular.thunk";
import { initStatePopular } from "./pupular.init-state";


export const popularSlice = createSlice({
    name: 'popular',
    initialState: initStatePopular,
    extraReducers: {
        [getPopularThunk.pending]: state => {
            state.isLoading = true;
        },
        [getPopularThunk.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.popular = payload
        },
        [getPopularThunk.rejected]: (state, {payload}) => {
            state.isLoading = true;
            
        },

    }
})
// console.log(getPopularThunk.pending.toString());
export const popularReducer = popularSlice.reducer;
// console.log(popularSlice.reducer);