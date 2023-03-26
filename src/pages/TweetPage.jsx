import MainContainer from "components/containers/MainContainer";
import ViewContainer from "components/containers/ViewContainer";
import Header from "components/Header";
import { NavBar } from "components/NavBar";
import SideBar from "components/SideBar";

function TweetPage() {
  return (
    <div className="d-flex">
      <NavBar />
      <MainContainer>
        <ViewContainer>
          <Header backIcon={true}>
            <h1>推文</h1>
          </Header>
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default TweetPage;
