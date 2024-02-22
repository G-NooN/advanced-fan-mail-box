import axios from "axios";
import { Form, InputField } from "components/styles/AddFormStyle";
import {
  LoginButtonField,
  LoginPageDiv,
  LoginSectionTitle,
} from "components/styles/LoginPageStyle";
import useForm from "hooks/useForm";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setLoginState } from "shared/redux/modules/authSlice";

function Login() {
  const [isSignUpPage, setSignUpPage] = useState(false); // 회원가입 페이지 여부

  // 유저 id, 유저 비밀번호, 유저 닉네임 state 관리
  const { formState, onFormChangeHandler, resetForm } = useForm({
    userId: "",
    userPassword: "",
    userNickname: "",
  });
  const { userId, userPassword, userNickname } = formState;

  const dispatch = useDispatch();

  // Submit Handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const buttonType = e.nativeEvent.submitter.name;
    if (buttonType === "signUp") {
      try {
        const { data } = await axios.post("https://moneyfulpublicpolicy.co.kr/register", {
          id: userId,
          password: userPassword,
          nickname: userNickname,
        });
        console.log(data);
        setSignUpPage(false);
        toast.success(data.message);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
      resetForm();
    } else if (buttonType === "login") {
      dispatch(setLoginState(true));
      toast.success("로그인 되었습니다.");
    } else return;
  };

  return (
    <>
      <LoginPageDiv>
        <Form onSubmit={onSubmitHandler}>
          <LoginSectionTitle>{isSignUpPage ? "회원가입" : "로그인"}</LoginSectionTitle>
          {/* 아이디 */}
          <InputField>
            <input
              type="text"
              name="userId"
              required
              minLength={4}
              maxLength={10}
              value={userId}
              onChange={onFormChangeHandler}
              placeholder="아이디 (4~10글자)"
            />
          </InputField>
          {/* 비밀번호 */}
          <InputField>
            <input
              type="password"
              name="userPassword"
              required
              minLength={4}
              maxLength={15}
              value={userPassword}
              onChange={onFormChangeHandler}
              placeholder="비밀번호 (4~15글자)"
            />
          </InputField>
          {/* 닉네임 (회원가입 페이지일 때만 출력) */}
          {isSignUpPage && (
            <InputField>
              <input
                type="text"
                name="userNickname"
                required
                minLength={1}
                maxLength={10}
                value={userNickname}
                onChange={onFormChangeHandler}
                placeholder="닉네임 (1~10글자)"
              />
            </InputField>
          )}
          {/* 버튼 리스트 (회원가입 페이지 - 회원가입/돌아가기, 로그인 페이지 - 로그인/회원가입) */}
          <LoginButtonField>
            {isSignUpPage ? (
              <>
                <button type="submit" name="signUp">
                  회원가입
                </button>
                <button type="button" onClick={() => setSignUpPage(false)}>
                  돌아가기
                </button>
              </>
            ) : (
              <>
                <button type="submit" name="login">
                  로그인
                </button>
                <button type="button" onClick={() => setSignUpPage(true)}>
                  회원가입
                </button>
              </>
            )}
          </LoginButtonField>
        </Form>
      </LoginPageDiv>
    </>
  );
}

export default Login;
