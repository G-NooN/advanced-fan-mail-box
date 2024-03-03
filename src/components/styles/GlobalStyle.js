import styled, { createGlobalStyle } from "styled-components";

// reset.css
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

// box-sizing 적용
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

// 전체 page
const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
`;

// section
const SectionContainer = styled.div`
  margin: 20px;
`;

// section 제목
const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 900;
`;

// 버튼 container
const ButtonField = styled.div`
  display: flex;
  justify-content: flex-end;

  // 버튼
  & button {
    width: 100px;
    height: 40px;
    margin: 0 5px;
    font-size: 16px;
    font-weight: 700;
    background-color: powderblue;
    border: 1px solid dodgerblue;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: lightblue;
      transform: scale(1.05);
    }
  }
`;

// 프로필 사진
const Avatar = styled.figure`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

// 닉네임
const Nickname = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

// 작성자 정보 container
const WriterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
`;

// HOME 이동 버튼
const HomeButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 80px;
  width: 80px;
  height: 60px;
  font-weight: 900;
  font-size: 16px;
  background-color: aliceblue;
  cursor: pointer;

  &:hover {
    background-color: silver;
  }
`;

export {
  GlobalStyle,
  PageContainer,
  SectionContainer,
  SectionTitle,
  ButtonField,
  Avatar,
  Nickname,
  WriterInfo,
  HomeButton,
};
