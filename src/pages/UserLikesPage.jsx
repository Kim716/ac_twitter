import { TweetContext } from "contexts/TweetContext";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

// Components
import MainContainer from "components/containers/MainContainer";
import ModalContainer from "components/containers/ModalContainer";
import ViewContainer from "components/containers/ViewContainer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";
import SwitchBar from "components/SwitchBar";
import UserInfo from "components/UserInfo";
import { UserTweetItem } from "components/TweetItem";
import { getUserLikedTweets } from "api/userAuth";

function UserLikesPage() {
  const [userLikedTweets, setUserLikedTweets] = useState([]);
  const [currentPage, setCurrentPage] = useState("likes");

  const { isTweetModalShow, handleTweetClick } = useContext(TweetContext);

  const navigate = useNavigate();
  const location = useLocation();

  const pageUserId = Number(location.pathname.split("/")[2]);

  const handlePageChange = (changePage) => {
    if (changePage !== "likes") {
      setCurrentPage(changePage);
      navigate(`/user/${pageUserId}/${changePage}`);
    }
    if (changePage === "tweets") {
      setCurrentPage(changePage);
      navigate(`/user/${pageUserId}`);
    }
  };

  // useEffect
  useEffect(() => {
    const getUserLikedTweetsAsync = async () => {
      try {
        const userLikedTweetsData = await getUserLikedTweets(pageUserId);
        setUserLikedTweets(userLikedTweetsData);
      } catch (error) {
        console.error(error);
      }
    };

    getUserLikedTweetsAsync();
  }, [pageUserId]);

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
          <UserInfo pageUserId={pageUserId} />
          <SwitchBar
            value="info"
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
          <div>
            {userLikedTweets.map((tweet) => (
              <UserTweetItem
                key={tweet.TweetId}
                tweetId={tweet.TweetId}
                avatar={tweet.Tweet.User.avatar}
                userId={tweet.Tweet.User.id}
                name={tweet.Tweet.User.name}
                account={tweet.Tweet.User.account}
                createdAt={tweet.Tweet.createdAt}
                description={tweet.Tweet.description}
                replyCount={tweet.Tweet.replyCount}
                likeCount={tweet.Tweet.replyCount}
                isLiked={tweet.Tweet.isLiked}
              />
            ))}
          </div>
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default UserLikesPage;
