import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // localstorage에서 데이터(accessToken, avatar, nickname, userId)를 get
  // accessToken 데이터가 존재하면 boolean(=true) 타입으로 설정 (초기값: true의 !(NOT))
  isLoggedIn: !!localStorage.getItem("accessToken"),
  avatar: localStorage.getItem("avatar"),
  nickname: localStorage.getItem("nickname"),
  userId: localStorage.getItem("userId"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // localStorage에 accessToken, avatar, nickname, userId 저장
      const { accessToken, avatar, nickname, userId } = action.payload;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("userId", userId);
      state.isLoggedIn = true;
      state.avatar = avatar;
      state.nickname = nickname;
      state.userId = userId;
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
