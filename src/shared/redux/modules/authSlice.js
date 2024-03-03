import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAuthApi } from "api/axiosAPI";
import { toast } from "react-toastify";

const initialState = {
  // localstorage에서 데이터(accessToken, avatar, nickname, userId)를 get
  // accessToken 데이터가 존재하면 boolean(=true) 타입으로 설정 (초기값: true의 !(NOT))
  isLoggedIn: !!localStorage.getItem("accessToken"),
  avatar: localStorage.getItem("avatar"),
  nickname: localStorage.getItem("nickname"),
  userId: localStorage.getItem("userId"),
  isLoading: false,
  isError: false,
  error: null,
};

export const __login = createAsyncThunk("login", async ({ id, password }, thunkAPI) => {
  try {
    const { data } = await userAuthApi.post("/login?expiresIn=30s", {
      id,
      password,
    });
    const { accessToken, avatar, nickname, userId } = data;
    if (data.success) {
      toast.success("로그인 되었습니다.");
      return { accessToken, avatar, nickname, userId };
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error);
  }
});

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
      state.isLoading = false;
      state.isError = false;
      state.error = null;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      // localStorage 초기화
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      // 로그인 진행중
      .addCase(__login.pending, (state, action) => {
        state.isLoading = true;
      })
      // 로그인 성공
      .addCase(__login.fulfilled, (state, action) => {
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
      })
      // 로그인 실패
      .addCase(__login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
