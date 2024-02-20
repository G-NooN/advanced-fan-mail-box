import styled, { css } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 600px;
  margin: 20px 0;
  padding: 20px;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 5px;
`;

const InputLabel = styled.label`
  width: 80px;
  font-size: 16px;
  font-weight: 700;
`;

const InputField = styled.div`
  display: flex;
  align-items: center;

  & input,
  textarea {
    width: 500px;
    padding: 10px;
  }

  & input {
    height: 35px;
  }

  & textarea {
    height: 60px;
    resize: none;
  }
`;

const SelectField = styled.div`
  display: flex;
  align-items: center;

  & select {
    width: 120px;
    height: 30px;
    padding-left: 5px;
  }
`;

const Option = styled.option`
  font-weight: 600;
  ${(option) => {
    switch (option.value) {
      case "최예지":
      case "박가현":
        return css`
          color: hotpink;
        `;
      default:
        return css`
          color: dodgerblue;
        `;
    }
  }}
`;

export { Form, InputLabel, InputField, SelectField, Option };
