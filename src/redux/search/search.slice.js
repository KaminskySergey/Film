import { createSlice } from "@reduxjs/toolkit";
import { initStateSearch } from "./search.init-state";
import { getSearchThunk } from "./search.thunk";





export const searchSlice = createSlice({
    name: 'search',
    initialState: initStateSearch,
    extraReducers: {
        [getSearchThunk.pending]: state => {
            state.isLoadingSearch = false;
        },
        [getSearchThunk.fulfilled]: (state, {payload}) => {
            state.isLoadingSearch = true;
            state.films = payload;
            state.page = 1;
        },
        [getSearchThunk.rejected]: (state, {payload}) => {
            state.isLoadingSearch = false;
            
        },
    }
})

export const searchReducer = searchSlice.reducer;