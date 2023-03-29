import { TweetContext } from "contexts/TweetContext";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

// Components
import MainContainer from "components/containers/MainContainer";
import ViewContainer from "components/containers/ViewContainer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";
import SwitchBar from "components/SwitchBar";
import UserInfo from "components/UserInfo";
import ModalContainer from "components/containers/ModalContainer";
import { UserTweetItem } from "components/TweetItem";
import { getUserTweets } from "api/userAuth";

function UserMainPage() {
  const [userTweets, serUserTweets] = useState([]);
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

  // useEffect
  useEffect(() => {
    const getUserTweetsAsync = async () => {
      try {
        const userTweetsData = await getUserTweets(pageUserId);
        serUserTweets(userTweetsData);
      } catch (error) {
        console.error(error);
      }
    };

    getUserTweetsAsync();
  }, [pageUserId]);

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
          <div>
            {userTweets.map((tweet) => (
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
                likeCount={tweet.replyCount}
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
