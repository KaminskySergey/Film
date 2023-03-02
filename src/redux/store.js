


import { initStatePopular } from './pupular/pupular.init-state';
import { configureStore } from '@reduxjs/toolkit';
import { popularReducer } from './pupular/popular.slice';
import { searchReducer } from './search/search.slice';
import { initStateSearch } from './search/search.init-state';

const initState = {
    popular: initStatePopular,
    search: initStateSearch,
}



export const store = configureStore({
    preloadedState: initState,
    devTools: true,
    reducer: {
        popular: popularReducer,
        search: searchReducer,
    }
})