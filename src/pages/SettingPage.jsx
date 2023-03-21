import NavContainer from "components/containers/NavContainer";
import MainContainer from "components/containers/MainContainer";

function SettingPage() {
  return (
    <div className="d-flex">
      <NavContainer>
        <h1>SettingPage</h1>
      </NavContainer>
      <MainContainer>
        <h1>Main</h1>
      </MainContainer>
    </div>
  );
}

export default SettingPage;
