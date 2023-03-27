import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    savedURLs: [],
    likedURLs: [],
  },
  reducers: {
    saveItem: (state, action) => {
      state.savedURLs.push(action.payload);
    },
    likeItem: (state, action) => {
      state.likedURLs.push(action.payload);
    },
  },
});

export const { saveItem, likeItem } = cartSlice.actions;

export default cartSlice.reducer;
