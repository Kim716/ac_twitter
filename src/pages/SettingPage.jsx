import { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserSettingInfo, putUserSettingInfo } from "api/userAuth";
import Swal from "sweetalert2";

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

const StyledFormDiv = styled.div`
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

  const clearError = (el) => {
    el.classList.remove("error");
    el.parentElement.setAttribute("data-content", "");
  };

  const showError = (el, message) => {
    el.classList.add("error");
    el.parentElement.setAttribute("data-content", message);
  };

  const handleAccountChange = (e) => {
    setAccount(e.target.value);
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

  const handleSaveClick = async (e) => {
    const inputEls = [...e.target.parentElement.querySelectorAll("input")];

    // 清除前一次的錯誤訊息
    inputEls.forEach((inputEl) => clearError(inputEl));

    // 欄位為空先擋掉，不進後端檢驗了，比較快
    if (inputEls.some((inputEl) => inputEl.value.length === 0)) {
      // 找出欄位為空的
      const emptyInputEls = inputEls.filter(
        (inputEl) => inputEl.value.length === 0
      );

      // 針對欄位為空的跳 error
      emptyInputEls.forEach((inputEl) => showError(inputEl, "欄位不得為空"));

      return;
    }

    // 帳號去掉前後空白
    if (account.trim().length === 0) {
      const [nameInputEL] = inputEls.filter(
        (inputEl) => inputEl.id === "input_account"
      );
      showError(nameInputEL, "帳號不得全為空白");
      return;
    }

    // 名稱去掉前後空白
    if (name.trim().length === 0) {
      const [nameInputEL] = inputEls.filter(
        (inputEl) => inputEl.id === "input_name"
      );
      showError(nameInputEL, "名稱不得全為空白");
      return;
    }

    // 跳是否確認儲存的通知
    Swal.fire({
      title: "確定要儲存嗎？",
      showDenyButton: true,
      confirmButtonText: "確定",
      denyButtonText: "取消",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // 確認儲存就進到後端
        try {
          const { message } = await putUserSettingInfo({
            id: 134, // !!! 現階段 id 為 hard code，等後端提供
            account,
            name,
            email,
            password,
            checkPassword,
          });

          // !!! 目前以下 error message 的設計都比較 hard code，還可以再優化
          // 帳號註冊過
          if (message === "Account 重複註冊") {
            const [accountInputEL] = inputEls.filter(
              (inputEl) => inputEl.id === "input_account"
            );
            showError(accountInputEL, message);
            return;
          }

          // name 超過 50字
          if (message === "名稱不可超過 50 個字") {
            const [nameInputEL] = inputEls.filter(
              (inputEl) => inputEl.id === "input_name"
            );
            showError(nameInputEL, message);
            return;
          }

          // 信箱格式錯誤
          if (message === "Email 格式有誤") {
            const [emailInputEL] = inputEls.filter(
              (inputEl) => inputEl.id === "input_email"
            );
            showError(emailInputEL, message);
            return;
          }

          // 信箱註冊過
          if (message === "Email 重複註冊") {
            const [emailInputEL] = inputEls.filter(
              (inputEl) => inputEl.id === "input_email"
            );
            showError(emailInputEL, message);
            return;
          }

          // 兩次輸入的密碼不同
          if (message === "兩次輸入的密碼不相同") {
            const [passwordInputEL] = inputEls.filter(
              (inputEl) => inputEl.id === "input_password"
            );
            const [checkPasswordInputEL] = inputEls.filter(
              (inputEl) => inputEl.id === "input_checkPassword"
            );
            showError(passwordInputEL, message);
            showError(checkPasswordInputEL, message);
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

          // 儲存成功跳通知
          Swal.fire({
            position: "top",
            icon: "success",
            title: "儲存成功",
            timer: 1500,
            showConfirmButton: false,
            customClass: {
              icon: "swalIcon right",
              title: "swalTitle",
            },
          });

          // 清空密碼欄位
          setPassword("");
          setCheckPassword("");
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  // useEffect
  useEffect(() => {
    const setUserInfo = async () => {
      try {
        const info = await getUserSettingInfo(134); // !!! 現階段 id 為 hard code，等後端提供
        setAccount(info.account);
        setName(info.name);
        setEmail(info.email);
      } catch (error) {
        console.error(error);
      }
    };

    setUserInfo();
  }, []);

  return (
    <div className="d-flex">
      <NavBar />
      <MainContainer>
        <StyledDiv className="col-8">
          <Header>
            <h1>帳戶設定</h1>
          </Header>
          <StyledFormDiv>
            <Input
              id="input_account"
              label="帳號"
              type="text"
              placeholder="重新設定帳號"
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
            <ActButton buttonName="儲存" onClick={handleSaveClick} />
          </StyledFormDiv>
        </StyledDiv>
      </MainContainer>
    </div>
  );
}

export default SettingPage;
