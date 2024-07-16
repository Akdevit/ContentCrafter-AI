// src/features/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
