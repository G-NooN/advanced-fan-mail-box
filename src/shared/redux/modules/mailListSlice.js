import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { letterDbApi } from "api/axiosAPI";
import { toast } from "react-toastify";

const initialState = {
  letters: [],
  isLoading: true,
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
export const __updateMail = createAsyncThunk(
  "updateMail",
  async ({ id, editedContent }, thunkAPI) => {
    try {
      await letterDbApi.patch(`letters/${id}`, { content: editedContent });
      const mailList = await getMailListFromDB();
      return thunkAPI.fulfillWithValue(mailList);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 메일 삭제
export const __removeMail = createAsyncThunk("removeMail", async (mailId, thunkAPI) => {
  try {
    await letterDbApi.delete(`/letters/${mailId}`);
    const mailList = await getMailListFromDB();
    return thunkAPI.fulfillWithValue(mailList);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const mailListSlice = createSlice({
  name: "mailList",
  initialState,
  reducers: {},
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
      })
      // 메일 삭제 진행중
      .addCase(__removeMail.pending, (state, action) => {
        state.isLoading = true;
      })
      // 메일 삭제 성공
      .addCase(__removeMail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
        toast.success("팬레터가 정상적으로 삭제되었습니다.");
      })
      // 메일 삭제 실패
      .addCase(__removeMail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      // 메일 수정 진행중
      .addCase(__updateMail.pending, (state, action) => {
        state.isLoading = true;
      })
      // 메일 수정 성공
      .addCase(__updateMail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
        toast.success("팬레터가 정상적으로 수정되었습니다.");
      })
      // 메일 수정 실패
      .addCase(__updateMail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default mailListSlice.reducer;
