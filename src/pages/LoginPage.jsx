import { Link, useNavigate } from "react-router-dom";
import { login } from "api/userAuth";
import { useState } from "react";
import Swal from "sweetalert2";

// components
import AuthContainer from "components/containers/AuthContainer";
import Logo from "components/Logo";
import Title from "components/Title";
import Input from "components/Input";
import ActButton from "components/ActButton";

function LoginPage() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const clearError = () => {
      const allInputEl = e.target.querySelectorAll("input");
      allInputEl.forEach((el) => el.classList.remove("error"));
    };

    // 前一次的錯誤訊息要先被清掉
    clearError();

    try {
      const { message, token } = await login({ account, password });

      const accountError = () => {
        const accountInputEl = e.target.querySelector("#login_account");
        accountInputEl.classList.add("error");
        accountInputEl.parentElement.setAttribute("data-content", message);
      };

      const passwordError = () => {
        const passwordInputEl = e.target.querySelector("#login_password");
        passwordInputEl.classList.add("error");
        passwordInputEl.parentElement.setAttribute("data-content", message);
      };

      // 沒填帳號
      if (account.length === 0) {
        accountError();
      }

      // 沒填密碼
      if (password.length === 0) {
        passwordError();
        return;
      }

      // 帳號或密碼有誤
      if (!token) {
        accountError();
        passwordError();
        return;
      }

      // 如果 token 存在代表登入成功
      if (token) {
        // 儲存 token
        localStorage.setItem("token", token);

        // 跳通知
        Swal.fire({
          position: "top",
          icon: "success",
          title: message,
          timer: 1500,
          showConfirmButton: false,
          customClass: {
            icon: "swalIcon right",
            title: "swalTitle",
          },
        });

        // 跳轉頁面
        navigate("/main");

        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContainer>
      <Logo />
      <Title>登入 Alphitter</Title>
      <form onSubmit={handleSubmit}>
        <Input
          id="login_account"
          label="帳號"
          type="text"
          placeholder="請輸入帳號"
          value={account}
          onChange={handleAccountChange}
        />
        <Input
          id="login_password"
          label="密碼"
          type="password"
          placeholder="請輸入密碼"
          value={password}
          onChange={handlePasswordChange}
        />
        <ActButton buttonName="登入" />
      </form>
      <div className="d-flex justify-content-end mt-3 p-2">
        <Link to="/regist">註冊</Link>
        <span className="mx-2">・</span>
        <Link to="/admin">後台登入</Link>
      </div>
    </AuthContainer>
  );
}

export default LoginPage;
