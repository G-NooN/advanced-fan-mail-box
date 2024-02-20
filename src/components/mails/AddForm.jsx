import { SectionTitle, ButtonField } from "components/styles/GlobalStyle";
import { Form, InputLabel, InputField, SelectField, Option } from "components/styles/AddFormStyle";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addMail } from "shared/redux/modules/mailList";
import { artistList } from "components/common/artistList";
import shortid from "shortid";

const AddForm = () => {
  const dispatch = useDispatch();
  const nicknameRef = useRef("");
  const contentRef = useRef("");
  const receiverRef = useRef("");

  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [receiver, setReceiver] = useState("");

  const addNewMail = (event) => {
    event.preventDefault();
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
      return nicknameRef.current.focus();
    } else if (!content) {
      alert("내용을 입력해주세요.");
      return contentRef.current.focus();
    } else if (!receiver) {
      alert("받는 사람을 선택해주세요.");
      return receiverRef.current.focus();
    } else if (nickname.length > 20) {
      alert("닉네임은 최대 20자까지만 입력할 수 있습니다.");
      return nicknameRef.current.focus();
    } else if (content.length > 100) {
      alert("내용은 최대 100자까지만 입력할 수 있습니다.");
      return contentRef.current.focus();
    } else {
      const checkAddMail = window.confirm("등록하시겠습니까?");
      if (!checkAddMail) return;
      const newMail = {
        id: shortid(),
        nickname,
        content,
        avatar: "",
        writedTo: receiver,
        createdAt: new Date(),
      };
      dispatch(addMail(newMail));
      alert("등록되었습니다.");
      setNickname("");
      setContent("");
      setReceiver("");
    }
  };

  return (
    <>
      <SectionTitle>Write Your Mail</SectionTitle>
      <Form onSubmit={addNewMail}>
        <InputField>
          <InputLabel htmlFor="writerNickname">닉네임</InputLabel>
          <input
            type="text"
            id="writerNickname"
            ref={nicknameRef}
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="최대 20자까지만 작성할 수 있습니다."
          />
        </InputField>
        <InputField>
          <InputLabel htmlFor="mailContent">내용</InputLabel>
          <textarea
            id="mailContent"
            ref={contentRef}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="최대 100자까지만 작성할 수 있습니다."
          />
        </InputField>
        <SelectField>
          <InputLabel htmlFor="receiver">받는 사람</InputLabel>
          <select
            id="receiver"
            ref={receiverRef}
            value={receiver}
            onChange={(event) => setReceiver(event.target.value)}
          >
            <option value={""}>선택</option>
            <hr />
            <optgroup label="매니저 (Manager)">
              {artistList
                .filter((artist) => artist === "방현재" || artist === "최예지")
                .map((artist) => (
                  <Option value={artist}>{artist}</Option>
                ))}
            </optgroup>
            <optgroup label="튜터 (Tutor)">
              {artistList
                .filter((artist) => artist !== "방현재" && artist !== "최예지")
                .map((artist) => (
                  <Option value={artist}>{artist}</Option>
                ))}
            </optgroup>
          </select>
        </SelectField>
        <ButtonField>
          <button type="submit">등록</button>
        </ButtonField>
      </Form>
    </>
  );
};

export default AddForm;