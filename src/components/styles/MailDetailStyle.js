import styled from "styled-components";

const MailDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 800px;
  margin: 20px 0;
  padding: 20px;
  background-color: floralwhite;
  border: 1px solid black;
  border-radius: 5px;
`;

const WriterInfoContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const ReceiverInfoContainer = styled.div`
  display: flex;
  margin: 0 10px;
  padding: 5px;
  font-size: 20px;
  font-weight: 700;
`;

const FullMailContent = styled.p`
  width: 720px;
  margin: 0 20px;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  line-height: 1.5;
`;

const EditMailArea = styled.textarea`
  width: 720px;
  margin: 0 20px;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  resize: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

export {
  MailDetailContainer,
  WriterInfoContainer,
  ReceiverInfoContainer,
  FullMailContent,
  EditMailArea,
};
