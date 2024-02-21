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
import { toast } from "react-toastify";
import { removeMail, updateMail } from "shared/redux/modules/mailListSlice";

const MailDetail = ({ id, foundMail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { defaultAvatar, options } = useContext(CommonContext);
  const [editMail, setEditMail] = useState(false); // 메일 수정 section 전환 여부
  const [editedContent, setEditedContent] = useState(""); // 수정된 내용

  // [수정] 버튼 클릭 -> 수정 section으로 전환
  const checkEditMail = () => {
    const checkEdit = window.confirm("팬레터를 수정하시겠습니까?");
    if (!checkEdit) return;
    setEditMail(true);
  };
  // [취소] 버튼 클릭 -> 출력 section으로 전환
  const cancelEditMail = () => {
    const checkCancelEdit = window.confirm("수정을 취소하시겠습니까?");
    if (!checkCancelEdit) return;
    setEditMail(false);
    toast.success("취소되었습니다.");
  };
  // [수정완료] 버튼 클릭
  const editMailDone = () => {
    // 수정된 내용이 없는 경우
    if (!editedContent) {
      return toast.warning("수정된 내용이 없습니다.");
    }
    // 수정된 내용이 존재하는 경우
    dispatch(updateMail({ id, editedContent }));
    toast.success("팬레터가 정상적으로 수정되었습니다.");
    setEditMail(false);
    setEditedContent("");
  };
  // [삭제] 버튼 클릭
  const deleteMail = () => {
    const checkDeleteMail = window.confirm("정말 삭제하시겠습니까?");
    if (!checkDeleteMail) return;
    dispatch(removeMail(id));
    toast.success("팬레터가 정상적으로 삭제되었습니다.");
    navigate("/");
  };

  const formattedDate = new Date(foundMail.createdAt).toLocaleDateString("ko-KR", options);

  return (
    <MailDetailContainer>
      {/* 작성자 정보 container */}
      <WriterInfoContainer>
        <Avatar>
          <img src={foundMail.avatar || defaultAvatar} alt="avatar" />
        </Avatar>
        {/* 작성자 정보 */}
        <WriterInfo>
          <Nickname>{foundMail.nickname}</Nickname>
          <time>{formattedDate}</time>
        </WriterInfo>
      </WriterInfoContainer>
      {/* 받는 사람 정보 */}
      <ReceiverInfoContainer>To. {foundMail.writedTo}</ReceiverInfoContainer>
      {/* 메일 내용 출력 section */}
      {editMail ? (
        <>
          {/* 수정 상태 */}
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
          {/* 출력 상태 */}
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
