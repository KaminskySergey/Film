import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getPopularThunk = createAsyncThunk('popular', async (page) => {
    
const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&page=${page}`)
console.log(data, 'data')
return data
})


