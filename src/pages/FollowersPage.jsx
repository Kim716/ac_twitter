import { TweetContext } from "contexts/TweetContext";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getFollowers } from "api/userAuth";

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
  const [followers, setFollowers] = useState([])
  const { isTweetModalShow, handleTweetClick } = useContext(TweetContext);
  const navigate = useNavigate();

  const location = useLocation();
  const userId = Number(location.pathname.split("/")[2]);

  const handlePageChange = (changePage) => {
    if (changePage !== "followers") {
      setCurrentPage(changePage);
      navigate(`/user/${userId}/${changePage}`);
    }
  };

  useEffect(() => {
    const getFollowersAsync = async () => {
      try {
        const getFollower = await getFollowers(userId);
        setFollowers(getFollower);
      } catch (error) {
        console.error(error);
      }
    };
    getFollowersAsync();
  }, [userId]);

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
            {followers.map((follower) => {
              return (
                <UserItem
                  key={follower.followerId}
                  name={follower.Followers.name}
                  account={follower.Followers.account}
                  introduction={follower.Followers.introduction}
                  avatar={follower.Followers.avatar}
                  isFollowed={follower.Followers.isFollowed}
                />
              );
            })}
          </ListCollection>
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default FollowersPage;
