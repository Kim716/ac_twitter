import MainContainer from "components/containers/MainContainer";
import SideBar from "components/SideBar";
import ViewContainer from "components/containers/ViewContainer";
import ListCollection from "components/ListCollection";
import TweetArea from "components/TweetArea";
import Header from "components/Header";
import { NavBar } from "components/NavBar";
import { AdminTweetItem, UserTweetItem } from "components/TweetItem";
import UserItem from "components/UserItem";

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
            <AdminTweetItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
          </ListCollection>
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default MainPage;
