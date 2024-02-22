import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};
// const initialState = false;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
    // setLoginState: (state, action) => action.payload,
  },
});

export const { login, logout } = authSlice.actions;
// export const { setLoginState } = authSlice.actions;
export default authSlice.reducer;
