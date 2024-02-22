import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // localStorage에 accessToken 데이터를 get
  // 데이터가 존재하면 boolean(=true) 타입으로 설정
  // initialState : true의 !(NOT)
  isLoggedIn: !!localStorage.getItem("accessToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // localStorage에 accessToken 저장
      const accessToken = action.payload;
      localStorage.setItem("accessToken", accessToken);
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      // localStorage 초기화
      localStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
