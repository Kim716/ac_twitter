import { useContext, useEffect, useState } from "react";
import { TweetContext } from "contexts/TweetContext";
import { useLocation } from "react-router-dom";
import { getSingleTweet, getSingleTweetReplies } from "api/tweetAuth";

// Components
import MainContainer from "components/containers/MainContainer";
import ModalContainer from "components/containers/ModalContainer";
import ViewContainer from "components/containers/ViewContainer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import ReplyItem from "components/ReplyItem";
import SideBar from "components/SideBar";
import TweetCard from "components/TweetCard";

function TweetPage() {
  const [tweet, setTweet] = useState({});
  const [tweetReplies, setTweetReplies] = useState([]);
  const [isTweetLike, setIsTweetLike] = useState(0);
  const [currentLikeCount, setCurrentLikeCount] = useState(0);
  const location = useLocation();
  const tweetId = Number(location.pathname.split("/")[2]);

  const { isTweetModalShow, handleTweetClick } = useContext(TweetContext);

  // useEffect
  useEffect(() => {
    const getSingleTweetAsync = async () => {
      try {
        const singleTweet = await getSingleTweet(tweetId);
        setTweet(singleTweet);
        setIsTweetLike(singleTweet.isLiked);
        setCurrentLikeCount(singleTweet.likeCount);
      } catch (error) {
        console.error(error);
      }
    };

    const getSingleTweetRepliesAsync = async () => {
      try {
        const singleTweetReplies = await getSingleTweetReplies(tweetId);
        setTweetReplies(singleTweetReplies);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleTweetAsync();
    getSingleTweetRepliesAsync();
  }, [tweetId]);

  return (
    <div className="d-flex">
      {isTweetModalShow && <ModalContainer value="推文" />}
      <NavBar isUser={true} onTweetClick={handleTweetClick} status="首頁" />
      <MainContainer>
        <ViewContainer>
          <Header backIcon="true">
            <h1>推文</h1>
          </Header>
          <TweetCard
            tweet={tweet}
            isTweetLike={isTweetLike}
            setIsTweetLike={setIsTweetLike}
            currentLikeCount={currentLikeCount}
            setCurrentLikeCount={setCurrentLikeCount}
          />
          {tweetReplies.map((reply) => (
            <ReplyItem
              key={reply.id}
              userId={reply.UserId}
              avatar={reply.User.avatar}
              name={reply.User.name}
              account={reply.User.account}
              createAt={reply.createdAt}
              replyToAccount={reply.Tweet.User.account}
              comment={reply.comment}
            />
          ))}
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default TweetPage;
