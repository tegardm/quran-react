import { configureStore } from "@reduxjs/toolkit";
import quranReducer from './slices/quranSlice'

const store = configureStore({
    reducer : {
        quran : quranReducer
    }
})

console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState());
})

export default store;