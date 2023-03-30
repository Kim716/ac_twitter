import { getUserInfo } from "api/userAuth";
import { createContext, useEffect, useState } from "react";

export const TweetContext = createContext("");

export function TweetContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [userAvatar, setUserAvatar] = useState("");
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);

  const loginUserId = localStorage.getItem("userId");

  const handleTweetClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  };

  // useEffect
  useEffect(() => {
    // 有登入在抓資料
    if (loginUserId) {
      const getUserInfoAsync = async () => {
        try {
          const { avatar } = await getUserInfo(loginUserId);
          setUserAvatar(avatar);
        } catch (error) {
          console.error(error);
        }
      };

      getUserInfoAsync();
    }
  }, [loginUserId]);

  return (
    <TweetContext.Provider
      value={{
        isTweetModalShow,
        handleTweetClick,
        userAvatar,
        tweets,
        setTweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
