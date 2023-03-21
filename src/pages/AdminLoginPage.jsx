import AuthContainer from "components/containers/AuthContainer";
import Logo from "components/Logo";
import Title from "components/Title";
import Input from "components/Input";
import Button from "components/ActButton";
import { Link } from "react-router-dom";

function AdminLoginPage() {
  return (
    <AuthContainer>
      <Logo width="50px" />
      <Title>後台登入</Title>
      <form
        onSubmit={() => {
          console.log("submit");
        }}
      >
        <Input
          id="login_account"
          label="帳號"
          type="text"
          placeholder="請輸入帳號"
        />
        <Input
          id="login_password"
          label="密碼"
          type="password"
          placeholder="請輸入密碼"
        />
        <Button
          buttonName="登入"
          onClick={() => {
            console.log("submit");
          }}
        />
      </form>
      <div className="d-flex justify-content-end mt-3 p-2">
        <Link to="/login">前台登入</Link>
      </div>
    </AuthContainer>
  );
}

export default AdminLoginPage;
