import MainContainer from "components/containers/MainContainer";
import { NavBar } from "components/NavBar";

function SettingPage() {
  return (
    <div className="d-flex">
      <NavBar />
      <MainContainer>
        <h1>Main</h1>
      </MainContainer>
    </div>
  );
}

export default SettingPage;
