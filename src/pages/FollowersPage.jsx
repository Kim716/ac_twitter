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
import UserItem from "components/UserItem";

function FollowersPage() {
  const [currentPage, setCurrentPage] = useState("followers");

  const { isTweetModalShow, handleTweetClick } = useContext(TweetContext);

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const handlePageChange = (changePage) => {
    if (changePage !== "followers") {
      setCurrentPage(changePage);
      navigate(`/user/${userId}/${changePage}`);
    }
  };

  return (
    <div className="d-flex">
      {isTweetModalShow && <ModalContainer value="推文" />}
      <NavBar isUser={true} onTweetClick={handleTweetClick} />
      <MainContainer>
        <ViewContainer>
          <Header backIcon={true}>
            <h1>User Name</h1>
            <span>20 推文</span>
          </Header>
          <SwitchBar
            value="follow"
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
          <ListCollection>
            <UserItem />
            <UserItem />
          </ListCollection>
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default FollowersPage;
