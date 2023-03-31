import { getSingleTweet } from "api/tweetAuth";
import { createContext, useState } from "react";

export const TweetContext = createContext("");

export function TweetContextProvider({ children }) {
  const [tweet, setTweet] = useState({});
  const [tweetReplies, setTweetReplies] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);
  const [isReplyModalShow, setIsReplyModalShow] = useState(false);
  const [tweetId, setTweetId] = useState(0);

  const handleTweetClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  };

  const handleReplyClick = (e) => {
    if (e) {
      e.stopPropagation();
      setTweetId(Number(e.target.dataset.id));
    }
    setIsReplyModalShow(!isReplyModalShow);
  };

  const getSingleTweetAsync = async (tweetId) => {
    try {
      const singleTweet = await getSingleTweet(tweetId);
      setTweet(singleTweet);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TweetContext.Provider
      value={{
        isTweetModalShow,
        handleTweetClick,
        tweets,
        setTweets,
        isReplyModalShow,
        handleReplyClick,
        getSingleTweetAsync,
        tweet,
        setTweet,
        tweetId,
        tweetReplies,
        setTweetReplies,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
