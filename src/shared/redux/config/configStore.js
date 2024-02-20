import { createStore, combineReducers } from "redux";
import activeArtist from "shared/redux/modules/activeArtist";
import mailList from "shared/redux/modules/mailList";

const rootReducer = combineReducers({ activeArtist, mailList });
const store = createStore(rootReducer);

export default store;
