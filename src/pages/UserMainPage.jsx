import { TweetContext } from "contexts/TweetContext";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getUserTweets } from "api/userAuth";

// Components
import MainContainer from "components/containers/MainContainer";
import ViewContainer from "components/containers/ViewContainer";
import ModalContainer from "components/containers/ModalContainer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";
import SwitchBar from "components/SwitchBar";
import UserInfo from "components/UserInfo";
import { UserTweetItem } from "components/TweetItem";

function UserMainPage() {
  const [currentPage, setCurrentPage] = useState("tweets");

  const {
    tweets,
    setTweets,
    isTweetModalShow,
    handleTweetClick,
    isReplyModalShow,
  } = useContext(TweetContext);

  const navigate = useNavigate();
  const location = useLocation();

  const pageUserId = Number(location.pathname.split("/")[2]);

  const handlePageChange = (changePage) => {
    if (changePage !== "tweets") {
      setCurrentPage(changePage);
      navigate(`/user/${pageUserId}/${changePage}`);
    }
  };

  // useEffect
  useEffect(() => {
    const getUserTweetsAsync = async () => {
      try {
        const userTweetsData = await getUserTweets(pageUserId);
        setTweets(userTweetsData);
      } catch (error) {
        console.error(error);
      }
    };

    getUserTweetsAsync();
  }, [pageUserId, setTweets]);

  return (
    <div className="d-flex">
      {isTweetModalShow && <ModalContainer value="推文" />}
      {isReplyModalShow && <ModalContainer value="回覆" />}
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
          <div>
            {tweets.map((tweet) => (
              <UserTweetItem
                key={tweet.id}
                tweetId={tweet.id}
                avatar={tweet.User.avatar}
                userId={tweet.UserId}
                name={tweet.User.name}
                account={tweet.User.account}
                createdAt={tweet.createdAt}
                description={tweet.description}
                replyCount={tweet.replyCount}
                likeCount={tweet.likeCount}
                isLiked={tweet.isLiked}
              />
            ))}
          </div>
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default UserMainPage;
