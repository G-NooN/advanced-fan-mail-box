import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "components/layout/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { useState } from "react";

const Router = () => {
  const [isLoggedIn, setLoginState] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        ) : (
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
