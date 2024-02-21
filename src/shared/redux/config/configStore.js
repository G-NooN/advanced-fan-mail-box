import { configureStore } from "@reduxjs/toolkit";
import activeArtistSlice from "shared/redux/modules/activeArtistSlice";
import mailListSlice from "shared/redux/modules/mailListSlice";

const store = configureStore({
  reducer: { activeArtistSlice, mailListSlice },
});

export default store;
