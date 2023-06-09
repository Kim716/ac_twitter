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
import { InfoContext } from "contexts/InfoContext";

function FollowersPage() {
  const [currentPage, setCurrentPage] = useState("followers");

  const { tweets, isTweetModalShow, handleTweetClick } =
    useContext(TweetContext);
  const {
    isUserLogin,
    loginAlert,
    pageUserInfo,
    followers,
    setFollowers,
    handleFollowClick,
  } = useContext(InfoContext);

  const navigate = useNavigate();
  const location = useLocation();
  const pageUserId = Number(location.pathname.split("/")[2]);

  // 換頁
  const handlePageChange = (changePage) => {
    if (changePage !== "followers") {
      setCurrentPage(changePage);
      navigate(`/user/${pageUserId}/${changePage}`);
    }
  };

  // useEffect
  // 驗證登入
  useEffect(() => {
    if (!isUserLogin) {
      loginAlert();
      navigate("/login");
    }
  }, [isUserLogin, loginAlert, navigate]);

  // 取得當前使用者的追隨者列表
  useEffect(() => {
    const getFollowersAsync = async () => {
      try {
        const getFollower = await getFollowers(pageUserId);
        setFollowers(getFollower);
      } catch (error) {
        console.error(error);
      }
    };
    getFollowersAsync();
    // eslint-disable-next-line
  }, [pageUserId]);

  return (
    <div className="d-flex">
      {isTweetModalShow && <ModalContainer value="推文" />}
      <NavBar isUser={true} onTweetClick={handleTweetClick} />
      <MainContainer>
        <ViewContainer>
          <Header backIcon={true}>
            <h1>{pageUserInfo.name}</h1>
            <span>{tweets.length} 則推文</span>
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
                  id={follower.followerId}
                  name={follower.Followers.name}
                  account={follower.Followers.account}
                  introduction={follower.Followers.introduction}
                  avatar={follower.Followers.avatar}
                  isFollowed={follower.Followers.isFollowed}
                  onFollowClick={handleFollowClick}
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
