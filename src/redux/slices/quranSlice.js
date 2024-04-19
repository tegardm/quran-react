import { createSlice } from "@reduxjs/toolkit";

const quranSlice = createSlice({
  name: 'quran',
  initialState: {
    data: [],
    quransPage: 1
  },
  reducers: {
    queryQuran: (state, action) => {
      // Gunakan spread operator untuk menghindari mutasi langsung pada state
      state.data = [...action.payload];
    },
    changePage: (state, action) => {
      // Periksa apakah page lebih besar dari 0 sebelum mengganti halaman
      state.quransPage = Math.max(action.payload, 1);
    }
  }
});

export const { queryQuran, changePage } = quranSlice.actions;

export default quranSlice.reducer;
