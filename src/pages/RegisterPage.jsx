import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "api/userAuth";
import Swal from "sweetalert2";

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

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputEls = [...e.target.querySelectorAll("input")];

    // 清除前一次的錯誤訊息
    inputEls.forEach((inputEl) => clearError(inputEl));

    try {
      const { message } = await register({
        account,
        name,
        email,
        password,
        checkPassword,
      });

      // 欄位不得為空，去找到是否有至少一個欄位為空
      if (inputEls.some((inputEl) => inputEl.value.length === 0)) {
        // 找出欄位為空的
        const emptyInputEls = inputEls.filter(
          (inputEl) => inputEl.value.length === 0
        );

        // 針對欄位為空的跳 error
        emptyInputEls.forEach((inputEl) => showError(inputEl, message));

        return;
      }

      // !!! 目前以下 error message 的設計都比較 hard code，還可以再優化
      // 帳號註冊過
      if (message === "Account 重複註冊") {
        const [accountInputEL] = inputEls.filter(
          (inputEl) => inputEl.id === "regist_account"
        );
        showError(accountInputEL, message);
        // showError(inputEls[1], message);
        return;
      }

      // name 超過 50字
      if (message === "名稱不能超過 50 個字") {
        const [nameInputEL] = inputEls.filter(
          (inputEl) => inputEl.id === "regist_name"
        );
        showError(nameInputEL, message);
        // showError(inputEls[1], message);
        return;
      }

      // 信箱格式錯誤
      if (message === "Email 格式有誤") {
        const [emailInputEL] = inputEls.filter(
          (inputEl) => inputEl.id === "regist_email"
        );
        showError(emailInputEL, message);
        // showError(inputEls[2], message);
        return;
      }

      // 信箱註冊過
      if (message === "Email 重複註冊") {
        const [emailInputEL] = inputEls.filter(
          (inputEl) => inputEl.id === "regist_email"
        );
        showError(emailInputEL, message);
        // showError(inputEls[2], message);
        return;
      }

      // 兩次輸入的密碼不同
      if (message === "兩次輸入的密碼不相同") {
        const [passwordInputEL] = inputEls.filter(
          (inputEl) => inputEl.id === "regist_password"
        );
        const [checkPasswordInputEL] = inputEls.filter(
          (inputEl) => inputEl.id === "regist_checkPassword"
        );
        showError(passwordInputEL, message);
        showError(checkPasswordInputEL, message);

        // showError(inputEls[3], message);
        // showError(inputEls[4], message);
        return;
      }

      // 伺服器有誤
      if (message === "伺服器出現問題，請稍後再使用") {
        Swal.fire({
          position: "top",
          icon: "warning",
          title: message,
          timer: 1500,
          showConfirmButton: false,
          customClass: {
            icon: "swalIcon right",
            title: "swalTitle",
          },
        });
        return;
      }

      // 註冊成功，因為沒有 token ，跳轉登入頁面
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

      navigate("/login");
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
        />
        <Input
          id="regist_email"
          label="Email"
          type="text"
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
