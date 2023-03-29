import { TweetContext } from "contexts/TweetContext";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

// Components
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

function UserMainPage() {
  const [currentPage, setCurrentPage] = useState("tweets");

  const { isTweetModalShow, handleTweetClick } = useContext(TweetContext);

  const navigate = useNavigate();
  const location = useLocation();

  const userId = Number(localStorage.getItem("userId"));
  const pageUserId = Number(location.pathname.split("/")[2]);

  const handlePageChange = (changePage) => {
    if (changePage !== "tweets") {
      setCurrentPage(changePage);
      navigate(`/user/${userId}/${changePage}`);
    }
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
          <UserInfo pageUserId={pageUserId} />
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
