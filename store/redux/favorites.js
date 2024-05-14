import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  isLiked: false,
};

export const FavoritSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const filtered = state.ids.filter((item) => item !== action.payload);
      state.ids = filtered;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = FavoritSlice.actions;

export default FavoritSlice.reducer;
