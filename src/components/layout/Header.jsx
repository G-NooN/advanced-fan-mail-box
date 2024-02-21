import {
  StyledHeader,
  HeaderTitle,
  HeaderContent,
  StrongText,
} from "components/styles/HeaderStyle";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
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
