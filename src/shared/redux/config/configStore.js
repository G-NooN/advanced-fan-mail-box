import { configureStore } from "@reduxjs/toolkit";
import activeArtist from "shared/redux/modules/activeArtist";
import mailList from "shared/redux/modules/mailList";

const store = configureStore({
  reducer: { activeArtist, mailList },
});

export default store;
