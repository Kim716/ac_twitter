import MainContainer from "components/containers/MainContainer";
import ViewContainer from "components/containers/ViewContainer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";
import SwitchBar from "components/SwitchBar";
import UserInfo from "components/UserInfo";
import ListCollection from "components/ListCollection";
import ModalContainer from "components/containers/ModalContainer";
import { UserTweetItem } from "components/TweetItem";
import { useState } from "react";
import { useNavigate } from "react-router";

function UserMainPage() {
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState("tweets");
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const handlePageChange = (changePage) => {
    if (changePage !== "tweets") {
      setCurrentPage(changePage);
      navigate(`/user/${userId}/${changePage}`);
    }
  };

  const handleTweetClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  };

  return (
    <div className="d-flex">
      {isTweetModalShow && <ModalContainer value="推文" />}
      <NavBar isUser={true} onTweetClick={handleTweetClick} status="個人資料" />
      <MainContainer>
        <ViewContainer>
          <Header backIcon={true}>
            <h1>個人資料</h1>
          </Header>
          <UserInfo />
          <SwitchBar
            value="info"
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
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
