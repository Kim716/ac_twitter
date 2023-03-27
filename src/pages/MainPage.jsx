import MainContainer from "components/containers/MainContainer";
import SideBar from "components/SideBar";
import ViewContainer from "components/containers/ViewContainer";
import ListCollection from "components/ListCollection";
import TweetArea from "components/TweetArea";
import Header from "components/Header";
import { NavBar } from "components/NavBar";
import { UserTweetItem } from "components/TweetItem";

function MainPage() {
  return (
    <div className="d-flex">
      <NavBar />
      <MainContainer>
        <ViewContainer>
          <Header>
            <h1>首頁</h1>
          </Header>
          <TweetArea />
          <ListCollection>
            <UserTweetItem />
          </ListCollection>
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default MainPage;
