import { configureStore } from "@reduxjs/toolkit";
import activeArtist from "shared/redux/modules/activeArtistSlice";
import mailList from "shared/redux/modules/mailListSlice";
import auth from "shared/redux/modules/authSlice";

const store = configureStore({
  reducer: { activeArtist, mailList, auth },
});

export default store;
