import { useState } from "react";
import styled from "styled-components";

// components
import MainContainer from "components/containers/MainContainer";
import Header from "components/Header";
import { NavBar } from "components/NavBar";
import Input from "components/Input";
import ActButton from "components/ActButton";

const StyledDiv = styled.div`
  height: 100vh;
  border-right: 1px solid var(--grey3);
  overflow: auto;
`;

const StyledForm = styled.form`
  padding: 24px;

  button {
    display: block;
    width: auto;
    margin-left: auto;
  }
`;

function SettingPage() {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  };

  const clearError = (el) => {
    el.classList.remove("error");
    el.parentElement.setAttribute("data-content", "");
  };

  const showError = (el, message) => {
    el.classList.add("error");
    el.parentElement.setAttribute("data-content", message);
  };

  const handleNameChange = (e) => {
    //清掉前一次提醒
    clearError(e.target);

    //  超過 50 字的提醒
    if (e.target.value.length > 50) {
      showError(e.target, "您已輸入超過 50 字");
    }

    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckPasswordChange = (e) => {
    setCheckPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex">
      <NavBar />
      <MainContainer>
        <StyledDiv className="col-8">
          <Header>
            <h1>帳戶設定</h1>
          </Header>
          <StyledForm onSubmit={handleSubmit}>
            <Input
              id="input_account"
              label="帳號"
              type="text"
              placeholder="請設定帳號"
              value={account}
              onChange={handleAccountChange}
            />
            <Input
              id="input_name"
              label="名稱"
              type="text"
              placeholder="請設定使用者名稱，不可超過50字"
              value={name}
              onChange={handleNameChange}
            />
            <Input
              id="input_email"
              label="Email"
              type="text"
              placeholder="請輸入 Email"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              id="input_password"
              label="密碼"
              type="password"
              placeholder="請設定密碼"
              value={password}
              onChange={handlePasswordChange}
            />
            <Input
              id="input_checkPassword"
              label="密碼確認"
              type="password"
              placeholder="請再次輸入密碼"
              value={checkPassword}
              onChange={handleCheckPasswordChange}
            />
            <ActButton buttonName="儲存" />
          </StyledForm>
        </StyledDiv>
      </MainContainer>
    </div>
  );
}

export default SettingPage;
