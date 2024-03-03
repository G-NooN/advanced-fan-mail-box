import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { letterDbApi } from "api/axiosAPI";
import { toast } from "react-toastify";

const initialState = {
  letters: [],
  isLoading: false,
  isError: false,
  error: null,
};

// DB로부터 최신순으로 메일 리스트 가져오기
const getMailListFromDB = async () => {
  const { data } = await letterDbApi.get("/letters?_sort=-createdAt");
  return data;
};

// 메일 리스트 가져오기
export const __getMailList = createAsyncThunk("getMailList", async (mailList, thunkAPI) => {
  try {
    const mailList = await getMailListFromDB();
    return thunkAPI.fulfillWithValue(mailList);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// 메일 추가
export const __addMail = createAsyncThunk("addMail", async (newMail, thunkAPI) => {
  try {
    await letterDbApi.post("/letters", newMail);
    const mailList = await getMailListFromDB();
    return thunkAPI.fulfillWithValue(mailList);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// 메일 수정
export const __updateMail = createAsyncThunk();

// 메일 삭제
export const __removeMail = createAsyncThunk();

const mailListSlice = createSlice({
  name: "mailList",
  initialState,
  reducers: {
    addMail: (state, action) => [...state, action.payload],
    updateMail: (state, action) =>
      state.map((mail) => {
        if (mail.id === action.payload.id) {
          return { ...mail, content: action.payload.editedContent };
        } else {
          return mail;
        }
      }),
    removeMail: (state, action) => state.filter((mail) => mail.id !== action.payload),
  },
  extraReducers: (builder) => {
    builder
      // 메일 가져오기 진행중
      .addCase(__getMailList.pending, (state, action) => {
        state.isLoading = true;
      })
      // 메일 가져오기 성공
      .addCase(__getMailList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
      })
      // 메일 가져오기 실패
      .addCase(__getMailList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      // 메일 추가 진행중
      .addCase(__addMail.pending, (state, action) => {
        state.isLoading = true;
      })
      // 메일 추가 성공
      .addCase(__addMail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
        toast.success("팬레터가 정상적으로 등록되었습니다.");
      })
      // 메일 추가 실패
      .addCase(__addMail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { addMail, updateMail, removeMail } = mailListSlice.actions;
export default mailListSlice.reducer;
