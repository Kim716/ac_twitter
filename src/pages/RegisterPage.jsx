import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "api/userAuth";

// components
import AuthContainer from "components/containers/AuthContainer";
import Logo from "components/Logo";
import Title from "components/Title";
import Input from "components/Input";
import ActButton from "components/ActButton";

function RegisterPage() {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  };

  const hideError = (el) => {
    el.classList.remove("error");
  };

  const showError = (el, message) => {
    el.classList.add("error");
    el.parentElement.setAttribute("data-content", message);
  };

  const handleNameChange = (e) => {
    //清掉前一次提醒
    hideError(e.target);

    //  超過 50 字的提醒
    if (e.target.value.length > 3) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await register({
        account,
        name,
        email,
        password,
        checkPassword,
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContainer>
      <Logo />
      <Title>建立你的帳號</Title>
      <form onSubmit={handleSubmit}>
        <Input
          id="regist_account"
          label="帳號"
          type="text"
          placeholder="請設定帳號"
          value={account}
          onChange={handleAccountChange}
        />
        <Input
          id="regist_name"
          label="名稱"
          type="text"
          placeholder="請設定使用者名稱，不可超過50字"
          value={name}
          onChange={handleNameChange}
          // maxLength="50"
        />
        <Input
          id="regist_email"
          label="Email"
          type="email"
          placeholder="請輸入 Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          id="regist_password"
          label="密碼"
          type="password"
          placeholder="請設定密碼"
          value={password}
          onChange={handlePasswordChange}
        />
        <Input
          id="regist_checkPassword"
          label="密碼確認"
          type="password"
          placeholder="請再次輸入密碼"
          value={checkPassword}
          onChange={handleCheckPasswordChange}
        />
        <ActButton buttonName="註冊" />
      </form>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/login">取消</Link>
      </div>
    </AuthContainer>
  );
}

export default RegisterPage;
