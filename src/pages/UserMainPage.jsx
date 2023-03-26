import MainContainer from "components/containers/MainContainer";
import ViewContainer from "components/containers/ViewContainer";
import Header from "components/Header";
import { NavBar } from "components/NavBar";
import SideBar from "components/SideBar";
import SwitchBar from "components/SwitchBar";
import UserInfo from "components/UserInfo";
import { UserTweetItem } from "components/TweetItem";
import ListCollection from "components/ListCollection";


function UserMainPage() {
  return (
    <div className="d-flex">
      <NavBar />
      <MainContainer>
        <ViewContainer>
          <Header back={true}>
            <h1>個人資料</h1>
          </Header>
          <UserInfo />
          <SwitchBar value={"info"} />
          <ListCollection>
            <UserTweetItem />
            <UserTweetItem />
            <UserTweetItem />
          </ListCollection>
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default UserMainPage;
