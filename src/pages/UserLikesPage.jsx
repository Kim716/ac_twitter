import { TweetContext } from "contexts/TweetContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

// Components
import MainContainer from "components/containers/MainContainer";
import ModalContainer from "components/containers/ModalContainer";
import ViewContainer from "components/containers/ViewContainer";
import Header from "components/Header";
import ListCollection from "components/ListCollection";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";
import SwitchBar from "components/SwitchBar";
import UserInfo from "components/UserInfo";
import { UserTweetItem } from "components/TweetItem";

function UserLikesPage() {
  const [currentPage, setCurrentPage] = useState("likes");

  const { isTweetModalShow, handleTweetClick } = useContext(TweetContext);

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const handlePageChange = (changePage) => {
    if (changePage !== "likes") {
      setCurrentPage(changePage);
      navigate(`/user/${userId}/${changePage}`);
    }
    if (changePage === "tweets") {
      setCurrentPage(changePage);
      navigate(`/user/${userId}`);
    }
  };

  return (
    <div className="d-flex">
      {isTweetModalShow && <ModalContainer value="推文" />}
      <NavBar isUser={true} onTweetClick={handleTweetClick} status="個人資料" />
      <MainContainer>
        <ViewContainer>
          <Header backIcon={true}>
            <h1>User name</h1>
            <span>like 推文</span>
          </Header>
          <UserInfo />
          <SwitchBar
            value="info"
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
          <ListCollection>
            <UserTweetItem />
          </ListCollection>
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default UserLikesPage;