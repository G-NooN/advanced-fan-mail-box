import {
  StyledNav,
  RightNavContainer,
  StyledHeader,
  HeaderTitle,
  HeaderContent,
  StrongText,
  NavbarText,
} from "components/styles/HeaderStyle";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "shared/redux/modules/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname: currentLocation } = useLocation();

  // 로그아웃
  const doLogout = () => {
    dispatch(logout());
    toast.success("정상적으로 로그아웃 되었습니다.");
  };

  return (
    <>
      <StyledNav>
        {currentLocation !== "/" && <NavbarText onClick={() => navigate("/")}>HOME</NavbarText>}
        <RightNavContainer>
          <NavbarText onClick={doLogout}>로그아웃</NavbarText>
        </RightNavContainer>
      </StyledNav>
      <StyledHeader>
        <HeaderTitle>[React_4] Fan Mail Page</HeaderTitle>
        <HeaderContent>
          수많은 학생들을 <StrongText>React</StrongText> 의 세계로 이끄는 그룹{" "}
          <StrongText>[ React 4 ]</StrongText> 의 팬레터함입니다.{" "}
        </HeaderContent>
      </StyledHeader>
      {/* 하위 라우팅 컴포넌트 */}
      <Outlet />
    </>
  );
};

export default Header;
