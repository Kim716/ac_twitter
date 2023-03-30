import { getSingleTweet } from "api/tweetAuth";
import { createContext, useState } from "react";

export const TweetContext = createContext("");

export function TweetContextProvider({ children }) {
  const [tweet, setTweet] = useState({});
  const [tweets, setTweets] = useState([]);
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);
  const [isReplyModalShow, setIsReplyModalShow] = useState(false);
  const [tweetId, setTweetId] = useState({});

  const handleTweetClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  };

  const handleReplyClick = (e) => {
    e.stopPropagation();
    setTweetId(e.target.dataset.id);
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
        tweetId,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
