import { createContext, useState } from "react";

export const TweetContext = createContext("");

export function TweetContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);

  const handleTweetClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  };

  return (
    <TweetContext.Provider
      value={{
        isTweetModalShow,
        handleTweetClick,
        tweets,
        setTweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
