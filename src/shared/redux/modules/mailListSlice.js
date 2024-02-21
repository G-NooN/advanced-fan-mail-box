import { createSlice } from "@reduxjs/toolkit";
import fakeData from "fakeData.json";

const initialState = fakeData;

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
});

export const { addMail, updateMail, removeMail } = mailListSlice.actions;
export default mailListSlice.reducer;
