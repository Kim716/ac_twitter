import { createContext, useState } from "react";

export const TweetContext = createContext("");

export function TweetContextProvider({ children }) {
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);

  const handleTweetClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  };
  return (
    <TweetContext.Provider value={{ isTweetModalShow, handleTweetClick }}>
      {children}
    </TweetContext.Provider>
  );
}
