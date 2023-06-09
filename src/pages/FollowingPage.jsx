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
import { InfoContext } from "contexts/InfoContext";

function FollowingPage() {
  const [currentPage, setCurrentPage] = useState("following");

  const { tweets, isTweetModalShow, handleTweetClick } =
    useContext(TweetContext);
  const {
    isUserLogin,
    loginAlert,
    pageUserInfo,
    followings,
    setFollowings,
    handleFollowClick,
  } = useContext(InfoContext);

  const navigate = useNavigate();
  const location = useLocation();
  const pageUserId = Number(location.pathname.split("/")[2]);

  // 換頁
  const handlePageChange = (changePage) => {
    if (changePage !== "following") {
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

  // 取得當前使用者的跟隨者列表
  useEffect(() => {
    const getFollowingsAsync = async () => {
      try {
        const getFollowing = await getFollowings(pageUserId);
        setFollowings(getFollowing);
      } catch (error) {
        console.error(error);
      }
    };
    getFollowingsAsync();
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
            {followings.map((following) => {
              return (
                <UserItem
                  key={following.followingId}
                  id={following.followingId}
                  name={following.Followings.name}
                  account={following.Followings.account}
                  introduction={following.Followings.introduction}
                  avatar={following.Followings.avatar}
                  isFollowed={following.Followings.isFollowed}
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

export default FollowingPage;
