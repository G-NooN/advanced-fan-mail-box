import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const activeArtistSlice = createSlice({
  name: "activeArtist",
  initialState,
  reducers: {
    setArtist: (state, action) => action.payload,
  },
});

export const { setArtist } = activeArtistSlice.actions;
export default activeArtistSlice.reducer;
