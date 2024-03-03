import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "shared/redux/modules/authSlice";

let store;
import("shared/redux/config/configStore").then((module) => {
  store = module.default();
});

// 사용자 정보 DB 저장소
const userAuthApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

// 메일 리스트 DB 저장소
const letterDbApi = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

userAuthApi.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

userAuthApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    toast.error(error.response.data.message);
    if (error.response.data.message === "토큰이 만료되었습니다. 다시 로그인 해주세요.") {
      return store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

letterDbApi.interceptors.request.use(
  async (request) => {
    const { data } = await userAuthApi.get("/user");
    if (data.success) return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { userAuthApi, letterDbApi };
