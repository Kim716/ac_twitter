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

    // 沒有輸入帳密就直接擋掉
    if (account.length === 0 || password.length === 0) {
      return;
    }

    const { message, status, token } = await login({ account, password });

    // 登入成功
    if (status === "success") {
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
