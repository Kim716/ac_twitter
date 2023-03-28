import { useContext, useEffect, useState } from "react";
import { TweetContext } from "contexts/TweetContext";

// Components
import MainContainer from "components/containers/MainContainer";
import SideBar from "components/SideBar";
import ViewContainer from "components/containers/ViewContainer";
import TweetArea from "components/TweetArea";
import Header from "components/Header";
import NavBar from "components/NavBar";
import { UserTweetItem } from "components/TweetItem";
import ModalContainer from "components/containers/ModalContainer";
import { getAllTweets } from "api/tweetAuth";

function MainPage() {
  const [tweets, setTweets] = useState([]);
  const { isTweetModalShow, handleTweetClick } = useContext(TweetContext);

  //useEffect
  useEffect(() => {
    const getAllTweetsAsync = async () => {
      try {
        const allTweets = await getAllTweets();
        setTweets(allTweets);
      } catch (error) {
        console.error(error);
      }
    };

    getAllTweetsAsync();
  }, []);

  return (
    <div className="d-flex">
      {isTweetModalShow && (
        <ModalContainer value="推文" onTweetClick={handleTweetClick} />
      )}
      <NavBar isUser={true} onTweetClick={handleTweetClick} status="首頁" />
      <MainContainer>
        <ViewContainer>
          <Header>
            <h1>首頁</h1>
          </Header>
          <TweetArea onTweetClick={handleTweetClick} />
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

export default MainPage;
