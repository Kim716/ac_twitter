import { NavBar } from "components/NavBar";
import styled from "styled-components";

// components
import MainContainer from "components/containers/MainContainer";
import Header from "components/Header";

const StyledDiv = styled.div`
  height: 100vh;
  border-right: 1px solid var(--grey3);
  overflow: auto;
`;

function SettingPage() {
  return (
    <div className="d-flex">
      <NavBar />
      <MainContainer>
        <StyledDiv className="col-8">
          <Header>
            <h1>帳戶設定</h1>
          </Header>
        </StyledDiv>
      </MainContainer>
    </div>
  );
}

export default SettingPage;
