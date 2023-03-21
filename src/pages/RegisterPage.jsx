import AuthContainer from "components/containers/AuthContainer";
import Logo from "components/Logo";
import Title from "components/Title";
import Input from "components/Input";
import ActButton from "components/ActButton";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <AuthContainer>
      <Logo width="40px" />
      <Title>建立你的帳號</Title>
      <form
        onSubmit={() => {
          console.log("submit");
        }}
      >
        <Input
          id="regist_account"
          label="帳號"
          type="text"
          placeholder="請設定帳號"
        />
        <Input
          id="regist_name"
          label="名稱"
          type="text"
          placeholder="請設定使用者名稱，不可超過50字"
          maxLength="50"
        />
        <Input
          id="regist_email"
          label="Email"
          type="email"
          placeholder="請輸入 Email"
        />
        <Input
          id="regist_password"
          label="密碼"
          type="password"
          placeholder="請設定密碼"
        />
        <Input
          id="regist_checkPassword"
          label="密碼確認"
          type="password"
          placeholder="請再次輸入密碼"
        />
        <ActButton
          buttonName="註冊"
          onClick={() => {
            console.log("submit");
          }}
        />
      </form>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/login">取消</Link>
      </div>
    </AuthContainer>
  );
}

export default RegisterPage;
