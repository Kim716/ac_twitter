import { TweetContext } from "contexts/TweetContext";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getFollowings } from "api/userAuth";

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

function FollowingPage() {
  const [currentPage, setCurrentPage] = useState("following");
  const [followings, setFollowings] = useState([])
  const { isTweetModalShow, handleTweetClick } = useContext(TweetContext);
  const navigate = useNavigate();

  const location = useLocation();
  const userId = Number(location.pathname.split("/")[2]);

  const handlePageChange = (changePage) => {
    if (changePage !== "following") {
      setCurrentPage(changePage);
      navigate(`/user/${userId}/${changePage}`);
    }
  };

  useEffect(() => {
    const getFollowingsAsync = async () => {
      try {
        const getFollowing = await getFollowings(userId);
        setFollowings(getFollowing);
      } catch (error) {
        console.error(error);
      }
    };
    getFollowingsAsync();
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
            {followings.map((following) => {
              return (
                <UserItem
                  key={following.followingId}
                  name={following.Followings.name}
                  account={following.Followings.account}
                  introduction={following.Followings.introduction}
                  avatar={following.Followings.avatar}
                  isFollowed={following.Followings.isFollowed}
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

export default FollowingPage;
