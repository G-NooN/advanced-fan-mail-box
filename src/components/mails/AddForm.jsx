import { SectionTitle, ButtonField } from "components/styles/GlobalStyle";
import { Form, InputLabel, InputField, SelectField, Option } from "components/styles/AddFormStyle";
import { useDispatch } from "react-redux";
import { addMail } from "shared/redux/modules/mailListSlice";
import { artistList } from "components/common/artistList";
import shortid from "shortid";
import useForm from "hooks/useForm";

const AddForm = () => {
  const dispatch = useDispatch();

  // 작성자 닉네임, 메일 내용, 받는 사람 정보 state 관리
  const { formState, onFormChangeHandler, resetForm } = useForm({
    writerNickname: "",
    mailContent: "",
    receiver: "",
  });
  const { writerNickname, mailContent, receiver } = formState;

  // 메일 추가
  const addNewMail = (event) => {
    event.preventDefault();
    const checkAddMail = window.confirm("등록하시겠습니까?");
    if (!checkAddMail) return;
    // 새로운 메일
    const newMail = {
      id: shortid(),
      nickname: writerNickname,
      content: mailContent,
      avatar: "",
      writedTo: receiver,
      createdAt: new Date().toString(),
    };
    dispatch(addMail(newMail));
    alert("등록되었습니다.");
    resetForm();
  };

  return (
    <>
      <SectionTitle>Write Your Mail</SectionTitle>
      {/* 입력 form */}
      <Form onSubmit={addNewMail}>
        {/* 닉네임 */}
        <InputField>
          <InputLabel htmlFor="writerNickname">닉네임</InputLabel>
          <input
            type="text"
            id="writerNickname"
            name="writerNickname"
            required
            maxLength={20}
            value={writerNickname}
            onChange={onFormChangeHandler}
            placeholder="최대 20자까지만 작성할 수 있습니다."
          />
        </InputField>
        {/* 내용 */}
        <InputField>
          <InputLabel htmlFor="mailContent">내용</InputLabel>
          <textarea
            id="mailContent"
            name="mailContent"
            required
            maxLength={100}
            value={mailContent}
            onChange={onFormChangeHandler}
            placeholder="최대 100자까지만 작성할 수 있습니다."
          />
        </InputField>
        {/* 아티스트 선택 */}
        <SelectField>
          <InputLabel htmlFor="receiver">받는 사람</InputLabel>
          <select
            id="receiver"
            name="receiver"
            required
            value={receiver}
            onChange={onFormChangeHandler}
          >
            {/* 아티스트 선택 Dropdown */}
            <option value={""}>선택</option>
            <optgroup label="매니저 (Manager)">
              {artistList
                .filter((artist) => artist === "방현재" || artist === "최예지")
                .map((artist, index) => (
                  <Option key={index} value={artist}>
                    {artist}
                  </Option>
                ))}
            </optgroup>
            <optgroup label="튜터 (Tutor)">
              {artistList
                .filter((artist) => artist !== "방현재" && artist !== "최예지")
                .map((artist, index) => (
                  <Option key={index} value={artist}>
                    {artist}
                  </Option>
                ))}
            </optgroup>
          </select>
        </SelectField>
        {/* [등록] 버튼 */}
        <ButtonField>
          <button type="submit">등록</button>
        </ButtonField>
      </Form>
    </>
  );
};

export default AddForm;
