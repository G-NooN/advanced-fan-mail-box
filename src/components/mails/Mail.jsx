import { Avatar, Nickname, WriterInfo } from "components/styles/GlobalStyle";
import { MailContainer, MailInfo, MailContent } from "components/styles/MailStyle";
import { CommonContext } from "context/CommonContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Mail = ({ mail }) => {
  const { defaultAvatar, options } = useContext(CommonContext);
  const formattedDate = new Date(mail.createdAt).toLocaleDateString("ko-KR", options);

  const navigate = useNavigate();

  return (
    // 클릭 시 세부 페이지로 이동
    <MailContainer onClick={() => navigate(`/detail/${mail.id}`)}>
      <Avatar>
        <img src={mail.avatar || defaultAvatar} alt="avatar" />
      </Avatar>
      {/* 메일 정보 */}
      <MailInfo>
        {/* 작성자 정보 */}
        <WriterInfo>
          <Nickname>{mail.nickname}</Nickname>
          <time>{formattedDate}</time>
        </WriterInfo>
        {/* 메일 내용 (1줄) */}
        <MailContent>{mail.content}</MailContent>
      </MailInfo>
    </MailContainer>
  );
};

export default Mail;
