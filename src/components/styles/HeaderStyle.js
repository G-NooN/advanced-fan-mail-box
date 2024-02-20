import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

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

const HeaderTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: dodgerblue;
`;

const HeaderContent = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
`;

const StrongText = styled.span`
  font-size: 30px;
  color: rebeccapurple;
`;

export { StyledHeader, HeaderTitle, HeaderContent, StrongText };
