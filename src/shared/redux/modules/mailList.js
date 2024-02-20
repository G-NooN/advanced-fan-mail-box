import fakeData from "fakeData.json";

const ADD_MAIL = "mail/ADD_MAIL";
const UPDATE_MAIL = "mail/UPDATE_MAIL";
const REMOVE_MAIL = "mail/REMOVE_MAIL";

export const addMail = (payload) => {
  return {
    type: ADD_MAIL,
    payload,
  };
};
export const updateMail = (payload) => {
  return {
    type: UPDATE_MAIL,
    payload,
  };
};
export const removeMail = (payload) => {
  return {
    type: REMOVE_MAIL,
    payload,
  };
};

const initialState = fakeData;

const mailList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MAIL: {
      const newMail = action.payload;
      return [...state, newMail];
    }
    case UPDATE_MAIL: {
      const { id, editedContent } = action.payload;
      return state.map((mail) => {
        if (mail.id === id) {
          const newMail = { ...mail, content: editedContent };
          return newMail;
        } else {
          return mail;
        }
      });
    }
    case REMOVE_MAIL: {
      const id = action.payload;
      return state.filter((mail) => mail.id !== id);
    }
    default:
      return state;
  }
};

export default mailList;
