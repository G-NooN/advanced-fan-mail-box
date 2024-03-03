import { letterDbApi } from "./axiosAPI";

export const getMailList = async () => {
  const { data } = await letterDbApi.get("/letters?_sort=-createdAt");
  return data;
};
