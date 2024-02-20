import styled from "styled-components";

// 메일 상세보기 container
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

// 작성자 정보 container
const WriterInfoContainer = styled.div`
  display: flex;
  gap: 5px;
`;

// 받는 사람 정보 container
const ReceiverInfoContainer = styled.div`
  display: flex;
  margin: 0 10px;
  padding: 5px;
  font-size: 20px;
  font-weight: 700;
`;

// 메일 전체 내용 출력 section
const FullMailContent = styled.p`
  width: 720px;
  margin: 0 20px;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  line-height: 1.5;
`;

// 메일 내용 수정 section
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
