import { ButtonField, Avatar, Nickname, WriterInfo } from "components/styles/GlobalStyle";
import {
  MailDetailContainer,
  WriterInfoContainer,
  ReceiverInfoContainer,
  FullMailContent,
  EditMailArea,
} from "components/styles/MailDetailStyle";
import { CommonContext } from "context/CommonContext";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeMail, updateMail } from "shared/redux/modules/mailList";

const MailDetail = ({ id, foundMail }) => {
  const dispatch = useDispatch();
  const { defaultAvatar, options } = useContext(CommonContext);
  const navigate = useNavigate();
  const [editMail, setEditMail] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  const checkEditMail = () => {
    const checkEdit = window.confirm("팬레터를 수정하시겠습니까?");
    if (!checkEdit) return;
    setEditMail(true);
  };
  const cancelEditMail = () => {
    const checkCancelEdit = window.confirm("수정을 취소하시겠습니까?");
    if (!checkCancelEdit) return;
    setEditMail(false);
    alert("취소되었습니다.");
  };
  const editMailDone = () => {
    if (!editedContent) {
      return alert("수정된 내용이 없습니다.");
    }
    dispatch(updateMail({ id, editedContent }));
    alert("수정되었습니다.");
    setEditMail(false);
    setEditedContent("");
  };
  const deleteMail = () => {
    const checkDeleteMail = window.confirm("정말 삭제하시겠습니까?");
    if (!checkDeleteMail) return;
    dispatch(removeMail(id));
    alert("삭제되었습니다.");
    navigate("/");
  };

  const formattedDate = new Date(foundMail.createdAt).toLocaleDateString("ko-KR", options);

  return (
    <MailDetailContainer>
      <WriterInfoContainer>
        <Avatar>
          <img src={foundMail.avatar || defaultAvatar} alt="avatar" />
        </Avatar>
        <WriterInfo>
          <Nickname>{foundMail.nickname}</Nickname>
          <time>{formattedDate}</time>
        </WriterInfo>
      </WriterInfoContainer>
      <ReceiverInfoContainer>To. {foundMail.writedTo}</ReceiverInfoContainer>
      {editMail ? (
        <>
          <EditMailArea
            autoFocus
            defaultValue={foundMail.content}
            onChange={(event) => setEditedContent(event.target.value)}
          ></EditMailArea>
          <ButtonField>
            <button onClick={editMailDone}>수정완료</button>
            <button onClick={cancelEditMail}>취소</button>
          </ButtonField>
        </>
      ) : (
        <>
          <FullMailContent>{foundMail.content}</FullMailContent>
          <ButtonField>
            <button onClick={checkEditMail}>수정</button>
            <button onClick={deleteMail}>삭제</button>
          </ButtonField>
        </>
      )}
    </MailDetailContainer>
  );
};

export default MailDetail;
