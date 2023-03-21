import AuthContainer from "components/containers/AuthContainer";
import Logo from "components/Logo";
import Title from "components/Title";
import Input from "components/Input";
import Button from "components/ActButton";

function LoginPage() {
  return (
    <AuthContainer>
      <Logo width="50px" />
      <Title>登入 Alphitter</Title>
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
          console.log("click");
        }}
      />
    </AuthContainer>
  );
}

export default LoginPage;
