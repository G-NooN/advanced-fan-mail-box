import { SectionTitle, ButtonField } from "components/styles/GlobalStyle";
import { Form, InputLabel, InputField, SelectField, Option } from "components/styles/AddFormStyle";
import { useSelector } from "react-redux";
import { artistList } from "components/common/artistList";
import shortid from "shortid";
import useForm from "hooks/useForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMail } from "api/mutationFunc";

const AddForm = () => {
  const queryClient = useQueryClient();
  const { mutate: addMailMutation } = useMutation({
    mutationFn: addMail,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["letters"]);
    },
  });
  const { avatar, nickname, userId } = useSelector((state) => state.auth);

  // 작성자 닉네임, 메일 내용, 받는 사람 정보 state 관리
  const { formState, onFormChangeHandler, resetForm } = useForm({
    mailContent: "",
    receiver: "",
  });
  const { mailContent, receiver } = formState;

  // 메일 추가
  const addNewMail = (event) => {
    event.preventDefault();
    const checkAddMail = window.confirm("등록하시겠습니까?");
    if (!checkAddMail) return;
    // 새로운 메일
    const newMail = {
      id: shortid(),
      nickname,
      content: mailContent,
      avatar,
      writedTo: receiver,
      createdAt: new Date().toString(),
      userId,
    };
    addMailMutation(newMail);
    resetForm();
  };

  return (
    <>
      <SectionTitle>Write Your Mail</SectionTitle>
      {/* 입력 form */}
      <Form onSubmit={addNewMail}>
        {/* 닉네임 */}
        <InputField>
          <InputLabel>닉네임</InputLabel>
          <p>{nickname}</p>
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
