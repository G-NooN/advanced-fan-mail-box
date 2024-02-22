import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "components/layout/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { useSelector } from "react-redux";

const Router = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // 로그인 상태

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          // 로그인 한 경우
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        ) : (
          // 로그인 하지 않은 경우
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
