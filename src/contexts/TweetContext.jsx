import { createContext, useState } from "react";

export const TweetContext = createContext("");

export function TweetContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);
  const [isReplyModalShow, setIsReplyModalShow] = useState(false);

  const handleTweetClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  };

  const handleReplyClick = (e) => {
    e.stopPropagation();
    setIsReplyModalShow(!isReplyModalShow);
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
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
