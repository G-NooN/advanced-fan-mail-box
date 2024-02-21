import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginState: (state, action) => action.payload,
  },
});

export const { setLoginState } = authSlice.actions;
export default authSlice.reducer;
