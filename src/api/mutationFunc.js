import { letterDbApi } from "./axiosAPI";

export const addMail = async (newMail) => {
  await letterDbApi.post("/letters", newMail);
};

export const removeMail = async (mailId) => {
  await letterDbApi.delete(`/letters/${mailId}`);
};

export const updateMail = async ({ id, editedContent }) => {
  await letterDbApi.patch(`letters/${id}`, { content: editedContent });
};
