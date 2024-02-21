import { Form, InputField } from "components/styles/AddFormStyle";
import {
  LoginButtonField,
  LoginPageDiv,
  LoginSectionTitle,
} from "components/styles/LoginPageStyle";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoginState } from "shared/redux/modules/authSlice";

function Login() {
  const [isSignUpPage, setSignUpPage] = useState(false); // 회원가입 페이지 여부

  // user 정보 입력 form 초기 state
  const initialUserInfoFormState = {
    userId: "",
    userPassword: "",
    userNickname: "",
  };
  // user 정보 입력 form
  const [userInfoFormState, setUserInfoFormState] = useState(initialUserInfoFormState);
  const { userId, userPassword, userNickname } = userInfoFormState;

  // input change handler
  const onUserInfoFormChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInfoFormState((prev) => ({ ...prev, [name]: value }));
  };

  const dispatch = useDispatch();

  // 회원가입이 완료되었을 때
  const signedUp = () => {
    setSignUpPage(false);
    alert("회원가입이 완료되었습니다.");
    setUserInfoFormState(initialUserInfoFormState);
  };

  // Submit Handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const buttonType = e.nativeEvent.submitter.name;
    if (buttonType === "signUp") {
      signedUp();
    } else if (buttonType === "login") {
      dispatch(setLoginState(true));
      alert("로그인 되었습니다.");
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
              onChange={onUserInfoFormChangeHandler}
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
              onChange={onUserInfoFormChangeHandler}
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
                onChange={onUserInfoFormChangeHandler}
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
