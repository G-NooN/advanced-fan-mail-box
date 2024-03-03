import styled from "styled-components";
import { SectionTitle } from "./GlobalStyle";

const LoginPageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSectionTitle = styled(SectionTitle)`
  text-align: center;
`;

const LoginButtonField = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  & button {
    width: 100%;
    padding: 5px 0;
  }
`;

export { LoginPageDiv, LoginSectionTitle, LoginButtonField };
