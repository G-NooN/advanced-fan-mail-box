import styled from "styled-components";

// navbar
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: whitesmoke;
`;

// 오른쪽 nav container
const RightNavContainer = styled.div`
  display: flex;
  gap: 30px;
`;

// 헤더
const StyledHeader = styled.header`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  // background 적용
  ::before {
    content: "";
    background-image: url("https://s3.ap-northeast-2.amazonaws.com/blog.spartacodingclub.kr/sparta-supporters.png");
    background-size: 400px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
    opacity: 0.1;
  }
`;

// 헤더 제목
const HeaderTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: dodgerblue;
`;

// 헤더 본문
const HeaderContent = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
`;

// 강조 문구
const StrongText = styled.span`
  font-size: 30px;
  color: rebeccapurple;
`;

// navbar Text
const NavbarText = styled.span`
  font-size: 20px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;
export {
  StyledNav,
  RightNavContainer,
  StyledHeader,
  HeaderTitle,
  HeaderContent,
  StrongText,
  NavbarText,
};
