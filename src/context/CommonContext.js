import { createContext } from "react";
import defaultAvatar from "assets/defaultAvatar.png";

export const CommonContext = createContext(null);

const CommonContextProvider = ({ children }) => {
  const options = {
    hour12: false,
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return (
    <CommonContext.Provider value={{ defaultAvatar, options }}>{children}</CommonContext.Provider>
  );
};

export default CommonContextProvider;
