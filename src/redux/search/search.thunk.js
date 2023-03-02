import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getSearchThunk = createAsyncThunk('search', async ({query, page}) => {
    
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&page=${page}&include_adult=false&query=${query}`)
    return data
})
